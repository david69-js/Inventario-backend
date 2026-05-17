import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const categories = await this.prisma.category.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { name: 'asc' },
    });
    return categories.map(c => ({ ...c, productCount: c._count.products }));
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    });
    if (!category) return null;
    return { ...category, productCount: category._count.products };
  }

  async create(data: { name: string; description?: string }) {
    return this.prisma.category.create({ data });
  }

  async update(id: string, data: { name?: string; description?: string }) {
    return this.prisma.category.update({ where: { id }, data });
  }

  async remove(id: string) {
    const count = await this.prisma.product.count({ where: { categoryId: id } });
    if (count > 0) throw new Error('No se puede eliminar: categoría tiene productos asociados');
    await this.prisma.category.delete({ where: { id } });
    return { deleted: true };
  }
}
