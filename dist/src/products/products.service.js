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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const where = {};
        if (query.search) {
            where.OR = [
                { name: { contains: query.search, mode: 'insensitive' } },
                { sku: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        if (query.categoryId)
            where.categoryId = query.categoryId;
        if (query.status)
            where.status = query.status;
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
    async findOne(id) {
        return this.prisma.product.findUnique({ where: { id }, include: { category: true, supplier: true } });
    }
    async create(data) {
        return this.prisma.product.create({
            data,
            include: { category: true, supplier: true },
        });
    }
    async update(id, data) {
        return this.prisma.product.update({
            where: { id },
            data,
            include: { category: true, supplier: true },
        });
    }
    async remove(id) {
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
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map