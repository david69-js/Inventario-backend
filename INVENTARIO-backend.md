# INVENTARIO BACKEND — Plan de Desarrollo

## Tech Stack

| Tecnología     | Versión |
| -------------- | ------- |
| Node.js        | 20 LTS  |
| NestJS         | 10.x    |
| TypeScript     | 5.x     |
| Prisma ORM     | 7.x (driver adapter) |
| PostgreSQL     | 16      |
| Passport/JWT   | —       |
| Swagger        | —       |
| Jest           | —       |
| Docker         | —       |

---

## Arquitectura General

```
src/
├── auth/
├── users/
├── products/
├── categories/
├── suppliers/
├── inventory/
├── reports/
├── notifications/
├── common/
│   ├── guards/
│   ├── decorators/
│   ├── filters/
│   ├── interceptors/
│   └── pipes/
└── prisma/
```

### Patrón: Modular (NestJS modules)
- Cada módulo contiene: **controller, service, module, dto, entity, guard (si aplica)**

---

## Base de Datos — Modelo Entidad-Relación

### Tablas principales

#### User
| Campo       | Tipo     |
| ----------- | -------- |
| id          | UUID PK  |
| email       | String   |
| password    | String   |
| name        | String   |
| role        | Enum     |
| avatar      | String?  |
| isActive    | Boolean  |
| createdAt   | DateTime |
| updatedAt   | DateTime |

**Roles:** `ADMIN`, `INVENTORY_MANAGER`, `EMPLOYEE`

#### Product
| Campo       | Tipo         |
| ----------- | ------------ |
| id          | UUID PK      |
| name        | String       |
| sku         | String (uni) |
| description | String?      |
| price       | Decimal      |
| stock       | Int          |
| minStock    | Int          |
| imageUrl    | String?      |
| status      | Enum         |
| categoryId  | UUID FK      |
| supplierId  | UUID FK      |
| createdAt   | DateTime     |
| updatedAt   | DateTime     |

**Status:** `ACTIVE`, `INACTIVE`, `DISCONTINUED`

#### Category
| Campo      | Tipo     |
| ---------- | -------- |
| id         | UUID PK  |
| name       | String   |
| description| String?  |
| createdAt  | DateTime |

#### Supplier
| Campo      | Tipo     |
| ---------- | -------- |
| id         | UUID PK  |
| name       | String   |
| contactName| String?  |
| email      | String?  |
| phone      | String?  |
| address    | String?  |
| createdAt  | DateTime |

#### InventoryMovement
| Campo       | Tipo         |
| ----------- | ------------ |
| id          | UUID PK      |
| productId   | UUID FK      |
| type        | Enum         |
| quantity    | Int          |
| description | String?      |
| userId      | UUID FK      |
| createdAt   | DateTime     |

**Type:** `INCOMING`, `OUTGOING`, `ADJUSTMENT`

#### Notification
| Campo    | Tipo       |
| -------- | ---------- |
| id       | UUID PK    |
| userId   | UUID FK    |
| title    | String     |
| message  | String     |
| type     | Enum       |
| isRead   | Boolean    |
| createdAt| DateTime   |

**Type:** `LOW_STOCK`, `MOVEMENT`, `SYSTEM`

---

## API Endpoints

### Auth `/api/auth`
| Método | Ruta             | Acceso     | Descripción          |
| ------ | ---------------- | ---------- | -------------------- |
| POST   | /auth/login      | Público    | Iniciar sesión       |
| POST   | /auth/register   | Admin      | Registrar usuario    |
| POST   | /auth/logout     | Auth       | Cerrar sesión        |
| GET    | /auth/profile    | Auth       | Perfil del usuario   |
| PATCH  | /auth/change-pwd | Auth       | Cambiar contraseña   |

### Users `/api/users`
| Método | Ruta        | Acceso            | Descripción           |
| ------ | ----------- | ----------------- | --------------------- |
| GET    | /users      | Admin/Manager     | Listar usuarios       |
| GET    | /users/:id  | Admin/Manager     | Ver usuario           |
| PATCH  | /users/:id  | Admin             | Actualizar usuario    |
| DELETE | /users/:id  | Admin             | Eliminar usuario      |

### Products `/api/products`
| Método | Ruta             | Acceso     | Descripción            |
| ------ | ---------------- | ---------- | ---------------------- |
| GET    | /products        | Auth       | Listar (filtros, pag)  |
| GET    | /products/:id    | Auth       | Ver producto           |
| POST   | /products        | Admin/Mgr  | Crear producto         |
| PATCH  | /products/:id    | Admin/Mgr  | Actualizar producto    |
| DELETE | /products/:id    | Admin      | Eliminar producto      |
| GET    | /products/low-stock | Auth    | Productos bajo stock   |

### Categories `/api/categories`
| Método | Ruta              | Acceso     | Descripción     |
| ------ | ----------------- | ---------- | --------------- |
| GET    | /categories       | Auth       | Listar          |
| GET    | /categories/:id   | Auth       | Ver             |
| POST   | /categories       | Admin/Mgr  | Crear           |
| PATCH  | /categories/:id   | Admin/Mgr  | Actualizar      |
| DELETE | /categories/:id   | Admin      | Eliminar        |

### Suppliers `/api/suppliers`
| Método | Ruta             | Acceso     | Descripción     |
| ------ | ---------------- | ---------- | --------------- |
| GET    | /suppliers       | Auth       | Listar          |
| GET    | /suppliers/:id   | Auth       | Ver             |
| POST   | /suppliers       | Admin/Mgr  | Crear           |
| PATCH  | /suppliers/:id   | Admin/Mgr  | Actualizar      |
| DELETE | /suppliers/:id   | Admin      | Eliminar        |

### Inventory `/api/inventory`
| Método | Ruta                    | Acceso     | Descripción              |
| ------ | ----------------------- | ---------- | ------------------------ |
| GET    | /inventory              | Auth       | Listar movimientos       |
| GET    | /inventory/:id          | Auth       | Ver movimiento           |
| POST   | /inventory/incoming     | Admin/Mgr  | Registrar entrada        |
| POST   | /inventory/outgoing     | Admin/Mgr  | Registrar salida         |
| POST   | /inventory/adjust       | Admin/Mgr  | Ajustar inventario       |
| GET    | /inventory/product/:productId | Auth | Historial por producto   |

### Reports `/api/reports`
| Método | Ruta                         | Acceso    | Descripción                  |
| ------ | ---------------------------- | --------- | ---------------------------- |
| GET    | /reports/dashboard           | Auth      | Resumen del dashboard        |
| GET    | /reports/monthly-movements   | Auth      | Movimientos mensuales        |
| GET    | /reports/low-stock           | Auth      | Alertas de stock bajo        |
| GET    | /reports/product-analytics   | Auth      | Analytics por producto       |
| GET    | /reports/inventory-value     | Auth      | Valor total del inventario   |

### Notifications `/api/notifications`
| Método | Ruta                    | Acceso | Descripción              |
| ------ | ----------------------- | ------ | ------------------------ |
| GET    | /notifications          | Auth   | Listar notificaciones    |
| GET    | /notifications/unread-count | Auth | Conteo de no leídas  |
| PATCH  | /notifications/:id/read | Auth   | Marcar como leída        |
| PATCH  | /notifications/read-all | Auth   | Marcar todas como leídas |

---

## RBAC — Role-Based Access Control

| Recurso        | Admin | Inventory Manager | Employee |
| -------------- | ----- | ----------------- | -------- |
| Gestión Users  | ✅    | ❌               | ❌       |
| CRUD Products  | ✅    | ✅               | ❌       |
| CRUD Categories| ✅    | ✅               | ❌       |
| CRUD Suppliers | ✅    | ✅               | ❌       |
| Mov. Inventory | ✅    | ✅               | ❌       |
| Reports        | ✅    | ✅               | ✅ (read) |
| Profile        | ✅    | ✅               | ✅       |

---

## Autenticación

```
POST /auth/login
Body: { email, password }
Response: { accessToken, user }
```

- JWT con expiración (15m / refresh 7d)
- Guards: `@Auth()` y `@Roles(Role.ADMIN)`
- Passport Strategy: `JwtStrategy`
- Passwords hasheadas con bcrypt

---

## Seed / Mock Data

- Script `prisma/seed.ts`
- 3 usuarios (uno por rol)
- 30+ productos
- 10 categorías
- 8 proveedores
- 120+ movimientos de inventario
- Notificaciones de ejemplo

---

## Pruebas

| Tipo           | Herramienta |
| -------------- | ----------- |
| Unitarias      | Jest        |
| E2E            | Supertest   |
| Cobertura      | Jest --cov  |

---

## Variables de Entorno

```env
DATABASE_URL=postgresql://...
JWT_SECRET=super-secret
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
PORT=3000
CORS_ORIGIN=http://localhost:4200
```

---

## Docker

### Dockerfile (multi-stage)

```dockerfile
# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine
RUN apk add --no-cache openssl
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
RUN npx prisma generate
EXPOSE 3000
CMD ["node", "dist/src/main"]
```

### .dockerignore

```gitignore
node_modules
dist
.git
.env
*.log
coverage
```

### docker-compose.yml (backend standalone)

```yaml
services:
  api:
    build: .
    container_name: inventario-api
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://inventario:inventario123@db:5432/inventario
      - JWT_SECRET=${JWT_SECRET}
      - JWT_EXPIRES_IN=15m
      - JWT_REFRESH_EXPIRES_IN=7d
      - PORT=3000
      - CORS_ORIGIN=http://localhost:80
      - NODE_ENV=production
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    container_name: inventario-db
    environment:
      POSTGRES_DB: inventario
      POSTGRES_USER: inventario
      POSTGRES_PASSWORD: inventario123
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U inventario"]
      interval: 5s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  pgdata:
```

---

## Cronograma sugerido

| Fase | Tarea                      | Días |
| ---- | -------------------------- | ---- |
| 1    | Setup + Prisma + Auth      | 2    |
| 2    | Módulo Users               | 1    |
| 3    | Módulo Products            | 2    |
| 4    | Módulo Categories          | 1    |
| 5    | Módulo Suppliers           | 1    |
| 6    | Módulo Inventory           | 2    |
| 7    | Módulo Reports             | 2    |
| 8    | Módulo Notifications       | 1    |
| 9    | Guards + RBAC + Tests      | 2    |
| 10   | Seed + Documentación       | 1    |
|      | **Total**                  | **15**|
