import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: { type?: string; productId?: string; page?: number; limit?: number }) {
    const where: any = {};
    if (query.type) where.type = query.type;
    if (query.productId) where.productId = query.productId;

    const page = query.page || 1;
    const limit = query.limit || 50;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.inventoryMovement.findMany({
        where,
        include: { product: true, user: { select: { id: true, name: true } } },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.inventoryMovement.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    return this.prisma.inventoryMovement.findUnique({
      where: { id },
      include: { product: true, user: { select: { id: true, name: true } } },
    });
  }

  async findByProduct(productId: string) {
    return this.prisma.inventoryMovement.findMany({
      where: { productId },
      include: { user: { select: { id: true, name: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async register(data: { productId: string; type: string; quantity: number; description?: string; userId: string }) {
    const movement = await this.prisma.inventoryMovement.create({
      data: data as any,
      include: { product: true, user: { select: { id: true, name: true } } },
    });

    await this.prisma.product.update({
      where: { id: data.productId },
      data: { stock: { increment: data.quantity } },
    });

    const product = await this.prisma.product.findUnique({ where: { id: data.productId } });
    if (product && product.stock <= product.minStock) {
      await this.prisma.notification.create({
        data: {
          userId: data.userId,
          title: 'Stock Bajo',
          message: `${product.name} tiene stock crítico (${product.stock} unidades)`,
          type: 'LOW_STOCK' as any,
        },
      });
    }

    return movement;
  }
}
