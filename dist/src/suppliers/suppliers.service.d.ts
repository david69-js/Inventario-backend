import { PrismaService } from '../prisma/prisma.service';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        productCount: number;
        _count: {
            products: number;
        };
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        contactName: string | null;
        phone: string | null;
        address: string | null;
    }[]>;
    findOne(id: string): Promise<{
        productCount: number;
        _count: {
            products: number;
        };
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        contactName: string | null;
        phone: string | null;
        address: string | null;
    } | null>;
    create(data: {
        name: string;
        contactName?: string;
        email?: string;
        phone?: string;
        address?: string;
    }): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        contactName: string | null;
        phone: string | null;
        address: string | null;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        contactName: string | null;
        phone: string | null;
        address: string | null;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
