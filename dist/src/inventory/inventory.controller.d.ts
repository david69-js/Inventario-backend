import { InventoryService } from './inventory.service';
export declare class InventoryController {
    private service;
    constructor(service: InventoryService);
    findAll(query: any): Promise<{
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
                status: import("../generated/client/enums.js").ProductStatus;
                categoryId: string | null;
                supplierId: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string | null;
            productId: string;
            type: import("../generated/client/enums.js").MovementType;
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
            status: import("../generated/client/enums.js").ProductStatus;
            categoryId: string | null;
            supplierId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        productId: string;
        type: import("../generated/client/enums.js").MovementType;
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
        type: import("../generated/client/enums.js").MovementType;
        quantity: number;
        userId: string;
    })[]>;
    incoming(body: any, userId: string): Promise<{
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
            status: import("../generated/client/enums.js").ProductStatus;
            categoryId: string | null;
            supplierId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        productId: string;
        type: import("../generated/client/enums.js").MovementType;
        quantity: number;
        userId: string;
    }>;
    outgoing(body: any, userId: string): Promise<{
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
            status: import("../generated/client/enums.js").ProductStatus;
            categoryId: string | null;
            supplierId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        productId: string;
        type: import("../generated/client/enums.js").MovementType;
        quantity: number;
        userId: string;
    }>;
    adjust(body: any, userId: string): Promise<{
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
            status: import("../generated/client/enums.js").ProductStatus;
            categoryId: string | null;
            supplierId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        description: string | null;
        productId: string;
        type: import("../generated/client/enums.js").MovementType;
        quantity: number;
        userId: string;
    }>;
}
