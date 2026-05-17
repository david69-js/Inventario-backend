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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard() {
        const allProducts = this.prisma.product.findMany({ select: { price: true, stock: true, minStock: true } });
        const [totalProducts, lowStockCount, inventoryValue, monthlyMovements, movementsByMonth, productsByCategory, recentActivity] = await Promise.all([
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
        const movementMap = {};
        movements.forEach(m => {
            if (!movementMap[m.productId])
                movementMap[m.productId] = { incoming: 0, outgoing: 0 };
            if (m.type === 'INCOMING')
                movementMap[m.productId].incoming += m.quantity;
            else if (m.type === 'OUTGOING')
                movementMap[m.productId].outgoing += Math.abs(m.quantity);
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
        const byCategory = products.reduce((acc, p) => {
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
    async getMovementsByMonth() {
        const movements = await this.prisma.inventoryMovement.findMany({
            select: { type: true, quantity: true, createdAt: true },
            orderBy: { createdAt: 'asc' },
        });
        const months = {};
        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        movements.forEach((m) => {
            const monthKey = `${m.createdAt.getFullYear()}-${m.createdAt.getMonth()}`;
            if (!months[monthKey])
                months[monthKey] = { incoming: 0, outgoing: 0 };
            if (m.type === 'INCOMING')
                months[monthKey].incoming += m.quantity;
            else if (m.type === 'OUTGOING')
                months[monthKey].outgoing += Math.abs(m.quantity);
        });
        return Object.entries(months).slice(-6).map(([key, val]) => {
            const monthIdx = parseInt(key.split('-')[1]);
            return { month: monthNames[monthIdx] || key, ...val };
        });
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map