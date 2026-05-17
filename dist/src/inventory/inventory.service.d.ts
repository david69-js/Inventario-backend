import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query: {
        type?: string;
        productId?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            user: {
                id: string;
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
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<({
        user: {
            id: string;
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
    }) | null>;
    findByProduct(productId: string): Promise<({
        user: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        productId: string;
        type: import("../generated/client/enums").MovementType;
        quantity: number;
        userId: string;
    })[]>;
    register(data: {
        productId: string;
        type: string;
        quantity: number;
        description?: string;
        userId: string;
    }): Promise<{
        user: {
            id: string;
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
    }>;
}
