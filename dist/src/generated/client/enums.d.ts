export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly INVENTORY_MANAGER: "INVENTORY_MANAGER";
    readonly EMPLOYEE: "EMPLOYEE";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProductStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly INACTIVE: "INACTIVE";
    readonly DISCONTINUED: "DISCONTINUED";
};
export type ProductStatus = (typeof ProductStatus)[keyof typeof ProductStatus];
export declare const MovementType: {
    readonly INCOMING: "INCOMING";
    readonly OUTGOING: "OUTGOING";
    readonly ADJUSTMENT: "ADJUSTMENT";
};
export type MovementType = (typeof MovementType)[keyof typeof MovementType];
export declare const NotificationType: {
    readonly LOW_STOCK: "LOW_STOCK";
    readonly MOVEMENT: "MOVEMENT";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
