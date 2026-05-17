import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const suppliers = await this.prisma.supplier.findMany({
      include: { _count: { select: { products: true } } },
      orderBy: { name: 'asc' },
    });
    return suppliers.map(s => ({ ...s, productCount: s._count.products }));
  }

  async findOne(id: string) {
    const supplier = await this.prisma.supplier.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    });
    if (!supplier) return null;
    return { ...supplier, productCount: supplier._count.products };
  }

  async create(data: { name: string; contactName?: string; email?: string; phone?: string; address?: string }) {
    return this.prisma.supplier.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.supplier.update({ where: { id }, data });
  }

  async remove(id: string) {
    const count = await this.prisma.product.count({ where: { supplierId: id } });
    if (count > 0) throw new Error('No se puede eliminar: proveedor tiene productos asociados');
    await this.prisma.supplier.delete({ where: { id } });
    return { deleted: true };
  }
}
