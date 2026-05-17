import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private service;
    constructor(service: CategoriesService);
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
    create(body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    }>;
    update(id: string, body: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        description: string | null;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
