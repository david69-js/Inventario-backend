import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, email: true, name: true, role: true, avatar: true, isActive: true, createdAt: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true, role: true, avatar: true, isActive: true, createdAt: true },
    });
  }

  async update(id: string, data: { name?: string; email?: string; role?: any; isActive?: boolean }) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: { id: true, email: true, name: true, role: true, avatar: true, isActive: true, createdAt: true },
    });
  }

  async remove(id: string) {
    await this.prisma.user.delete({ where: { id } });
    return { deleted: true };
  }
}
