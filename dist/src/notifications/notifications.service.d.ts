import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        type: import("../generated/client/enums").NotificationType;
        userId: string;
        title: string;
        message: string;
        isRead: boolean;
    }[]>;
    getUnreadCount(userId: string): Promise<number>;
    markAsRead(id: string, userId: string): Promise<import("../generated/client/internal/prismaNamespace").BatchPayload>;
    markAllAsRead(userId: string): Promise<import("../generated/client/internal/prismaNamespace").BatchPayload>;
}
