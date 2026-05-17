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
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InventoryService = class InventoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(query) {
        const where = {};
        if (query.type)
            where.type = query.type;
        if (query.productId)
            where.productId = query.productId;
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
    async findOne(id) {
        return this.prisma.inventoryMovement.findUnique({
            where: { id },
            include: { product: true, user: { select: { id: true, name: true } } },
        });
    }
    async findByProduct(productId) {
        return this.prisma.inventoryMovement.findMany({
            where: { productId },
            include: { user: { select: { id: true, name: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async register(data) {
        const movement = await this.prisma.inventoryMovement.create({
            data: data,
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
                    type: 'LOW_STOCK',
                },
            });
        }
        return movement;
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map