"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enums_js_1 = require("../src/generated/client/enums.js");
const pg_1 = __importDefault(require("pg"));
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_js_1 = require("../src/generated/client/client.js");
const bcrypt = __importStar(require("bcrypt"));
const pool = new pg_1.default.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_js_1.PrismaClient({ adapter });
async function main() {
    console.log('Seeding database...');
    await prisma.notification.deleteMany();
    await prisma.inventoryMovement.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.supplier.deleteMany();
    await prisma.user.deleteMany();
    const password = await bcrypt.hash('123456', 10);
    const admin = await prisma.user.create({
        data: { email: 'admin@inventario.com', password, name: 'Carlos Admin', role: enums_js_1.Role.ADMIN, isActive: true },
    });
    const manager = await prisma.user.create({
        data: { email: 'manager@inventario.com', password, name: 'María Manager', role: enums_js_1.Role.INVENTORY_MANAGER, isActive: true },
    });
    const employee = await prisma.user.create({
        data: { email: 'employee@inventario.com', password, name: 'José Employee', role: enums_js_1.Role.EMPLOYEE, isActive: true },
    });
    const categories = await Promise.all([
        prisma.category.create({ data: { name: 'Electrónicos', description: 'Dispositivos y componentes electrónicos' } }),
        prisma.category.create({ data: { name: 'Muebles', description: 'Muebles de oficina y hogar' } }),
        prisma.category.create({ data: { name: 'Oficina', description: 'Suministros de oficina' } }),
        prisma.category.create({ data: { name: 'Herramientas', description: 'Herramientas manuales y eléctricas' } }),
        prisma.category.create({ data: { name: 'Seguridad', description: 'Equipos de seguridad industrial' } }),
        prisma.category.create({ data: { name: 'Limpieza', description: 'Productos de limpieza' } }),
        prisma.category.create({ data: { name: 'Iluminación', description: 'Sistemas de iluminación' } }),
        prisma.category.create({ data: { name: 'Climatización', description: 'Equipos de clima' } }),
        prisma.category.create({ data: { name: 'Cómputo', description: 'Equipos de cómputo' } }),
        prisma.category.create({ data: { name: 'Audio y Video', description: 'Equipos de audio y video' } }),
    ]);
    const suppliers = await Promise.all([
        prisma.supplier.create({ data: { name: 'Distribuidora Nacional S.A.', contactName: 'Roberto Díaz', email: 'roberto@dnacional.com', phone: '555-0101', address: 'Av. Principal 123' } }),
        prisma.supplier.create({ data: { name: 'Importadora Global', contactName: 'Ana López', email: 'ana@iglobal.com', phone: '555-0102', address: 'Blvd. Internacional 456' } }),
        prisma.supplier.create({ data: { name: 'TecnoSuministros', contactName: 'Pedro García', email: 'pedro@tecsun.com', phone: '555-0103', address: 'Calle Tecnología 789' } }),
        prisma.supplier.create({ data: { name: 'Industrial Martínez', contactName: 'Laura Martínez', email: 'laura@indmart.com', phone: '555-0104', address: 'Av. Industrial 321' } }),
        prisma.supplier.create({ data: { name: 'Proveedora Office', contactName: 'Jorge Ramírez', email: 'jorge@proffice.com', phone: '555-0105', address: 'Calle Oficina 654' } }),
        prisma.supplier.create({ data: { name: 'Equipos y Servicios', contactName: 'Sofía Torres', email: 'sofia@eqys.com', phone: '555-0106', address: 'Av. Equipos 987' } }),
        prisma.supplier.create({ data: { name: 'Distribuidora del Sur', contactName: 'Miguel Ángel', email: 'miguel@delsur.com', phone: '555-0107', address: 'Calle Sur 147' } }),
        prisma.supplier.create({ data: { name: 'Suministros Industriales', contactName: 'Carmen Vega', email: 'carmen@sumind.com', phone: '555-0108', address: 'Av. Industrial 258' } }),
    ]);
    const products = await Promise.all([
        prisma.product.create({ data: { name: 'Laptop Pro 15"', sku: 'LAP-001', description: 'Laptop profesional 15 pulgadas', price: 24999.99, stock: 15, minStock: 5, categoryId: categories[8].id, supplierId: suppliers[0].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Monitor 27" 4K', sku: 'MON-001', description: 'Monitor 4K UHD 27 pulgadas', price: 8999.99, stock: 8, minStock: 3, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Teclado Mecánico RGB', sku: 'TEC-001', description: 'Teclado mecánico con retroiluminación RGB', price: 1899.99, stock: 25, minStock: 10, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Mouse Inalámbrico', sku: 'MOU-001', description: 'Mouse ergonómico inalámbrico', price: 899.99, stock: 30, minStock: 10, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Escritorio Ejecutivo', sku: 'MUE-001', description: 'Escritorio ejecutivo de madera', price: 5499.99, stock: 3, minStock: 2, categoryId: categories[1].id, supplierId: suppliers[3].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Silla Ergonómica', sku: 'MUE-002', description: 'Silla de oficina ergonómica', price: 7899.99, stock: 2, minStock: 3, categoryId: categories[1].id, supplierId: suppliers[3].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Router WiFi 6', sku: 'NET-001', description: 'Router WiFi 6 de doble banda', price: 2499.99, stock: 12, minStock: 5, categoryId: categories[0].id, supplierId: suppliers[1].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Switch 24 Puertos', sku: 'NET-002', description: 'Switch Gigabit 24 puertos', price: 4599.99, stock: 6, minStock: 3, categoryId: categories[0].id, supplierId: suppliers[1].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Cable HDMI 2m', sku: 'CAB-001', description: 'Cable HDMI 2.1 de 2 metros', price: 199.99, stock: 50, minStock: 20, categoryId: categories[0].id, supplierId: suppliers[0].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Cámara Seguridad IP', sku: 'SEG-001', description: 'Cámara de seguridad IP 1080p', price: 3299.99, stock: 4, minStock: 5, categoryId: categories[4].id, supplierId: suppliers[5].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Taladro Percutor', sku: 'HER-001', description: 'Taladro percutor 650W', price: 2199.99, stock: 7, minStock: 3, categoryId: categories[3].id, supplierId: suppliers[7].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Lámpara LED Escritorio', sku: 'ILU-001', description: 'Lámpara LED para escritorio', price: 699.99, stock: 20, minStock: 8, categoryId: categories[6].id, supplierId: suppliers[4].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Aire Acondicionado 12K', sku: 'CLI-001', description: 'Aire acondicionado split 12000 BTU', price: 12999.99, stock: 1, minStock: 2, categoryId: categories[7].id, supplierId: suppliers[6].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Proyector 4K', sku: 'AV-001', description: 'Proyector 4K 3000 lúmenes', price: 18999.99, stock: 3, minStock: 2, categoryId: categories[9].id, supplierId: suppliers[1].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Kit Limpieza Oficina', sku: 'LIM-001', description: 'Kit completo de limpieza para oficina', price: 399.99, stock: 35, minStock: 15, categoryId: categories[5].id, supplierId: suppliers[4].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Papel Bond Carta', sku: 'OFI-001', description: 'Resma papel bond tamaño carta 500 hojas', price: 89.99, stock: 100, minStock: 30, categoryId: categories[2].id, supplierId: suppliers[4].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Toner Impresora HP', sku: 'OFI-002', description: 'Toner negro para impresora HP', price: 1299.99, stock: 8, minStock: 5, categoryId: categories[2].id, supplierId: suppliers[0].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Archivero Metálico', sku: 'MUE-003', description: 'Archivero metálico 4 gavetas', price: 3899.99, stock: 5, minStock: 2, categoryId: categories[1].id, supplierId: suppliers[3].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Tablet 10"', sku: 'TAB-001', description: 'Tablet Android 10 pulgadas', price: 5999.99, stock: 0, minStock: 5, categoryId: categories[0].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.DISCONTINUED } }),
        prisma.product.create({ data: { name: 'Disco SSD 1TB', sku: 'ALM-001', description: 'Disco SSD 1TB NVMe', price: 1799.99, stock: 18, minStock: 5, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Webcam HD 1080p', sku: 'CAM-001', description: 'Webcam Full HD con micrófono', price: 1299.99, stock: 22, minStock: 8, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Audífonos Bluetooth', sku: 'AUD-001', description: 'Audífonos inalámbricos con cancelación de ruido', price: 2499.99, stock: 14, minStock: 5, categoryId: categories[9].id, supplierId: suppliers[1].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Hub USB-C 7 en 1', sku: 'ACC-001', description: 'Hub multipuerto USB-C', price: 899.99, stock: 30, minStock: 10, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Extintor PQS 6kg', sku: 'SEG-002', description: 'Extintor de polvo químico seco', price: 1599.99, stock: 10, minStock: 4, categoryId: categories[4].id, supplierId: suppliers[5].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Casco Seguridad Industrial', sku: 'SEG-003', description: 'Casco con suspensión de ratchet', price: 349.99, stock: 25, minStock: 10, categoryId: categories[4].id, supplierId: suppliers[5].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Ventilador de Piso 20"', sku: 'CLI-002', description: 'Ventilador industrial de piso', price: 2899.99, stock: 6, minStock: 3, categoryId: categories[7].id, supplierId: suppliers[6].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Pizarra Magnética 120x90', sku: 'OFI-003', description: 'Pizarra blanca magnética con marco de aluminio', price: 1899.99, stock: 4, minStock: 2, categoryId: categories[2].id, supplierId: suppliers[4].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Sierra Circular 1400W', sku: 'HER-002', description: 'Sierra circular profesional', price: 3499.99, stock: 3, minStock: 2, categoryId: categories[3].id, supplierId: suppliers[7].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Panel LED 60x60', sku: 'ILU-002', description: 'Panel LED empotrable para techo', price: 599.99, stock: 40, minStock: 15, categoryId: categories[6].id, supplierId: suppliers[4].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Memoria RAM DDR4 16GB', sku: 'RAM-001', description: 'Memoria RAM DDR4 3200MHz', price: 1499.99, stock: 20, minStock: 8, categoryId: categories[8].id, supplierId: suppliers[2].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Bocina Bluetooth Portátil', sku: 'AV-002', description: 'Bocina resistente al agua IPX7', price: 1999.99, stock: 12, minStock: 5, categoryId: categories[9].id, supplierId: suppliers[1].id, status: enums_js_1.ProductStatus.ACTIVE } }),
        prisma.product.create({ data: { name: 'Cable de Red Cat6 10m', sku: 'CAB-002', description: 'Cable Ethernet Cat6 plano', price: 149.99, stock: 60, minStock: 25, categoryId: categories[0].id, supplierId: suppliers[0].id, status: enums_js_1.ProductStatus.ACTIVE } }),
    ]);
    const now = new Date();
    const movementDescriptions = [
        'Reabastecimiento mensual', 'Venta directa', 'Ajuste de inventario',
        'Devolución de cliente', 'Compra a proveedor', 'Transferencia entre almacenes',
        'Consumo interno', 'Merma registrada', 'Entrada de producción',
    ];
    const users = [admin.id, manager.id];
    for (let i = 0; i < 120; i++) {
        const daysAgo = Math.floor(Math.random() * 180);
        const date = new Date(now);
        date.setDate(date.getDate() - daysAgo);
        date.setHours(8 + Math.floor(Math.random() * 10), Math.floor(Math.random() * 60), 0, 0);
        const typeRoll = Math.random();
        const type = typeRoll < 0.5 ? enums_js_1.MovementType.INCOMING : typeRoll < 0.85 ? enums_js_1.MovementType.OUTGOING : enums_js_1.MovementType.ADJUSTMENT;
        const quantity = type === 'OUTGOING'
            ? -Math.floor(Math.random() * 10 + 1)
            : Math.floor(Math.random() * 20 + 1);
        await prisma.inventoryMovement.create({
            data: {
                productId: products[i % products.length].id,
                type,
                quantity,
                description: movementDescriptions[i % movementDescriptions.length],
                userId: users[i % users.length],
                createdAt: date,
            },
        });
    }
    await prisma.notification.create({ data: { userId: admin.id, title: 'Stock Bajo', message: 'Silla Ergonómica tiene stock crítico (2 unidades)', type: enums_js_1.NotificationType.LOW_STOCK } });
    await prisma.notification.create({ data: { userId: admin.id, title: 'Stock Bajo', message: 'Cámara Seguridad IP tiene stock bajo (4 unidades)', type: enums_js_1.NotificationType.LOW_STOCK } });
    await prisma.notification.create({ data: { userId: admin.id, title: 'Movimiento Registrado', message: 'Entrada de 10 Laptop Pro 15" registrada', type: enums_js_1.NotificationType.MOVEMENT, isRead: true } });
    await prisma.notification.create({ data: { userId: admin.id, title: 'Movimiento Registrado', message: 'Salida de 2 Aire Acondicionado 12K registrada', type: enums_js_1.NotificationType.MOVEMENT, isRead: true } });
    await prisma.notification.create({ data: { userId: admin.id, title: 'Sistema', message: 'Respaldo de base de datos completado', type: enums_js_1.NotificationType.SYSTEM } });
    console.log('Seed completed!');
    console.log('Users: admin@inventario.com, manager@inventario.com, employee@inventario.com (all: 123456)');
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map