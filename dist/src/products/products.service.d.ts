import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query: {
        search?: string;
        categoryId?: string;
        status?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            category: {
                id: string;
                name: string;
                createdAt: Date;
                description: string | null;
            } | null;
            supplier: {
                id: string;
                email: string | null;
                name: string;
                createdAt: Date;
                contactName: string | null;
                phone: string | null;
                address: string | null;
            } | null;
        } & {
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
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findOne(id: string): Promise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
        } | null;
        supplier: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            contactName: string | null;
            phone: string | null;
            address: string | null;
        } | null;
    } & {
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
    }) | null>;
    create(data: any): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
        } | null;
        supplier: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            contactName: string | null;
            phone: string | null;
            address: string | null;
        } | null;
    } & {
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
    }>;
    update(id: string, data: any): Promise<{
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
        } | null;
        supplier: {
            id: string;
            email: string | null;
            name: string;
            createdAt: Date;
            contactName: string | null;
            phone: string | null;
            address: string | null;
        } | null;
    } & {
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
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
    getLowStock(): Promise<({
        category: {
            id: string;
            name: string;
            createdAt: Date;
            description: string | null;
        } | null;
    } & {
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
    })[]>;
}
