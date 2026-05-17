import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(query: { search?: string; categoryId?: string; status?: string; page?: number; limit?: number }) {
    const where: any = {};
    if (query.search) {
      where.OR = [
        { name: { contains: query.search, mode: 'insensitive' } },
        { sku: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    if (query.categoryId) where.categoryId = query.categoryId;
    if (query.status) where.status = query.status;

    const page = query.page || 1;
    const limit = query.limit || 20;
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: { category: true, supplier: true },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id }, include: { category: true, supplier: true } });
  }

  async create(data: any) {
    return this.prisma.product.create({
      data,
      include: { category: true, supplier: true },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true, supplier: true },
    });
  }

  async remove(id: string) {
    await this.prisma.product.delete({ where: { id } });
    return { deleted: true };
  }

  async getLowStock() {
    const products = await this.prisma.product.findMany({
      where: { status: { not: 'DISCONTINUED' } },
      include: { category: true },
      orderBy: { stock: 'asc' },
    });
    return products.filter(p => p.stock <= p.minStock);
  }
}
