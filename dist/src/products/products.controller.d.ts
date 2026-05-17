import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(query: any): Promise<{
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
            status: import("../generated/client/enums.js").ProductStatus;
            categoryId: string | null;
            supplierId: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
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
        status: import("../generated/client/enums.js").ProductStatus;
        categoryId: string | null;
        supplierId: string | null;
    })[]>;
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
        status: import("../generated/client/enums.js").ProductStatus;
        categoryId: string | null;
        supplierId: string | null;
    }) | null>;
    create(body: any): Promise<{
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
        status: import("../generated/client/enums.js").ProductStatus;
        categoryId: string | null;
        supplierId: string | null;
    }>;
    update(id: string, body: any): Promise<{
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
        status: import("../generated/client/enums.js").ProductStatus;
        categoryId: string | null;
        supplierId: string | null;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
