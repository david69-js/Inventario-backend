import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getDashboard() {
    const allProducts = this.prisma.product.findMany({ select: { price: true, stock: true, minStock: true } });
    const [totalProducts, lowStockCount, inventoryValue, monthlyMovements, movementsByMonth, productsByCategory, recentActivity] =
      await Promise.all([
        this.prisma.product.count(),
        allProducts.then(ps => ps.filter(p => p.stock <= p.minStock).length),
        allProducts.then(ps => ps.reduce((sum, p) => sum + Number(p.price) * p.stock, 0)),
        this.prisma.inventoryMovement.count({
          where: { createdAt: { gte: new Date(new Date().setDate(1)) } },
        }),
        this.getMovementsByMonth(),
        this.prisma.product.groupBy({
          by: ['categoryId'],
          _count: true,
        }),
        this.prisma.inventoryMovement.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: { product: true, user: { select: { name: true } } },
        }),
      ]);

    return {
      totalProducts,
      lowStockProducts: lowStockCount,
      inventoryValue,
      monthlyMovements,
      movementsByMonth,
      productsByCategory,
      recentActivity,
    };
  }

  async getMonthlyMovements() {
    return this.getMovementsByMonth();
  }

  async getLowStock() {
    const products = await this.prisma.product.findMany({
      where: { status: { not: 'DISCONTINUED' } },
      include: { category: true },
    });
    const lowStock = products
      .filter(p => p.stock <= p.minStock)
      .map(p => ({
        id: p.id,
        name: p.name,
        sku: p.sku,
        stock: p.stock,
        minStock: p.minStock,
        deficit: p.minStock - p.stock,
        category: p.category?.name,
      }))
      .sort((a, b) => a.deficit - b.deficit);
    return lowStock;
  }

  async getProductAnalytics() {
    const products = await this.prisma.product.findMany({
      include: { category: true, supplier: true },
      orderBy: { stock: 'desc' },
    });

    const movements = await this.prisma.inventoryMovement.findMany({
      select: { productId: true, type: true, quantity: true },
    });

    const movementMap: Record<string, { incoming: number; outgoing: number }> = {};
    movements.forEach(m => {
      if (!movementMap[m.productId]) movementMap[m.productId] = { incoming: 0, outgoing: 0 };
      if (m.type === 'INCOMING') movementMap[m.productId].incoming += m.quantity;
      else if (m.type === 'OUTGOING') movementMap[m.productId].outgoing += Math.abs(m.quantity);
    });

    return products.map(p => ({
      id: p.id,
      name: p.name,
      sku: p.sku,
      stock: p.stock,
      minStock: p.minStock,
      price: p.price,
      status: p.status,
      category: p.category?.name,
      supplier: p.supplier?.name,
      totalIncoming: movementMap[p.id]?.incoming || 0,
      totalOutgoing: movementMap[p.id]?.outgoing || 0,
      turnoverRate: movementMap[p.id]?.outgoing
        ? Math.round((movementMap[p.id].outgoing / (p.stock + movementMap[p.id].outgoing)) * 100)
        : 0,
    }));
  }

  async getInventoryValue() {
    const products = await this.prisma.product.findMany({
      where: { status: { not: 'DISCONTINUED' } },
      include: { category: true },
    });

    const totalValue = products.reduce((sum, p) => sum + Number(p.price) * p.stock, 0);
    const byCategory = products.reduce<Record<string, number>>((acc, p) => {
      const cat = p.category?.name || 'Sin categoría';
      acc[cat] = (acc[cat] || 0) + Number(p.price) * p.stock;
      return acc;
    }, {});

    return {
      totalValue,
      totalProducts: products.length,
      averagePrice: products.length ? totalValue / products.reduce((s, p) => s + p.stock, 0) : 0,
      byCategory: Object.entries(byCategory)
        .map(([category, value]) => ({ category, value }))
        .sort((a, b) => b.value - a.value),
    };
  }

  private async getMovementsByMonth() {
    const movements = await this.prisma.inventoryMovement.findMany({
      select: { type: true, quantity: true, createdAt: true },
      orderBy: { createdAt: 'asc' },
    });

    const months: Record<string, { incoming: number; outgoing: number }> = {};
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    movements.forEach((m) => {
      const monthKey = `${m.createdAt.getFullYear()}-${m.createdAt.getMonth()}`;
      if (!months[monthKey]) months[monthKey] = { incoming: 0, outgoing: 0 };
      if (m.type === 'INCOMING') months[monthKey].incoming += m.quantity;
      else if (m.type === 'OUTGOING') months[monthKey].outgoing += Math.abs(m.quantity);
    });

    return Object.entries(months).slice(-6).map(([key, val]) => {
      const monthIdx = parseInt(key.split('-')[1]);
      return { month: monthNames[monthIdx] || key, ...val };
    });
  }
}
