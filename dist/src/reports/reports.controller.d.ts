import { ReportsService } from './reports.service';
export declare class ReportsController {
    private service;
    constructor(service: ReportsService);
    getDashboard(): Promise<{
        totalProducts: number;
        lowStockProducts: number;
        inventoryValue: number;
        monthlyMovements: number;
        movementsByMonth: {
            incoming: number;
            outgoing: number;
            month: string;
        }[];
        productsByCategory: (import("../generated/client/internal/prismaNamespace").PickEnumerable<import("../generated/client/models").ProductGroupByOutputType, "categoryId"[]> & {
            _count: number;
        })[];
        recentActivity: ({
            user: {
                name: string;
            };
            product: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                sku: string;
                description: string | null;
                price: import("@prisma/client-runtime-utils").Decimal;
                stock: number;
                minStock: number;
                imageUrl: string | null;
                status: import("../generated/client/enums").ProductStatus;
                categoryId: string | null;
                supplierId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string | null;
            productId: string;
            type: import("../generated/client/enums").MovementType;
            quantity: number;
            userId: string;
        })[];
    }>;
    getMonthlyMovements(): Promise<{
        incoming: number;
        outgoing: number;
        month: string;
    }[]>;
    getLowStock(): Promise<{
        id: string;
        name: string;
        sku: string;
        stock: number;
        minStock: number;
        deficit: number;
        category: string | undefined;
    }[]>;
    getProductAnalytics(): Promise<{
        id: string;
        name: string;
        sku: string;
        stock: number;
        minStock: number;
        price: import("@prisma/client-runtime-utils").Decimal;
        status: import("../generated/client/enums").ProductStatus;
        category: string | undefined;
        supplier: string | undefined;
        totalIncoming: number;
        totalOutgoing: number;
        turnoverRate: number;
    }[]>;
    getInventoryValue(): Promise<{
        totalValue: number;
        totalProducts: number;
        averagePrice: number;
        byCategory: {
            category: string;
            value: number;
        }[];
    }>;
}
