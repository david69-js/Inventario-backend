import { UsersService } from './users.service';
import { Role } from '../generated/client/enums.js';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        id: string;
        email: string;
        name: string;
        role: Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        role: Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    } | null>;
    update(id: string, body: any): Promise<{
        id: string;
        email: string;
        name: string;
        role: Role;
        avatar: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
