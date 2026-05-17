"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationType = exports.MovementType = exports.ProductStatus = exports.Role = void 0;
exports.Role = {
    ADMIN: 'ADMIN',
    INVENTORY_MANAGER: 'INVENTORY_MANAGER',
    EMPLOYEE: 'EMPLOYEE'
};
exports.ProductStatus = {
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    DISCONTINUED: 'DISCONTINUED'
};
exports.MovementType = {
    INCOMING: 'INCOMING',
    OUTGOING: 'OUTGOING',
    ADJUSTMENT: 'ADJUSTMENT'
};
exports.NotificationType = {
    LOW_STOCK: 'LOW_STOCK',
    MOVEMENT: 'MOVEMENT',
    SYSTEM: 'SYSTEM'
};
//# sourceMappingURL=enums.js.map