import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        productCount: number;
        _count: {
            products: number;
        };
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    }[]>;
    findOne(id: string): Promise<{
        productCount: number;
        _count: {
            products: number;
        };
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    } | null>;
    create(data: {
        name: string;
        description?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    }>;
    update(id: string, data: {
        name?: string;
        description?: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
