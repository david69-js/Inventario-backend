import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        role: import("../generated/client/enums").Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        role: import("../generated/client/enums").Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    } | null>;
    update(id: string, data: {
        name?: string;
        email?: string;
        role?: any;
        isActive?: boolean;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        role: import("../generated/client/enums").Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
