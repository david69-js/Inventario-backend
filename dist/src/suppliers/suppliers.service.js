"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SuppliersService = class SuppliersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const suppliers = await this.prisma.supplier.findMany({
            include: { _count: { select: { products: true } } },
            orderBy: { name: 'asc' },
        });
        return suppliers.map(s => ({ ...s, productCount: s._count.products }));
    }
    async findOne(id) {
        const supplier = await this.prisma.supplier.findUnique({
            where: { id },
            include: { _count: { select: { products: true } } },
        });
        if (!supplier)
            return null;
        return { ...supplier, productCount: supplier._count.products };
    }
    async create(data) {
        return this.prisma.supplier.create({ data });
    }
    async update(id, data) {
        return this.prisma.supplier.update({ where: { id }, data });
    }
    async remove(id) {
        const count = await this.prisma.product.count({ where: { supplierId: id } });
        if (count > 0)
            throw new Error('No se puede eliminar: proveedor tiene productos asociados');
        await this.prisma.supplier.delete({ where: { id } });
        return { deleted: true };
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map