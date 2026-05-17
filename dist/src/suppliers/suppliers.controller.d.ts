import { SuppliersService } from './suppliers.service';
export declare class SuppliersController {
    private service;
    constructor(service: SuppliersService);
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
    create(body: any): Promise<{
        id: string;
        email: string | null;
        name: string;
        createdAt: Date;
        contactName: string | null;
        phone: string | null;
        address: string | null;
    }>;
    update(id: string, body: any): Promise<{
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
