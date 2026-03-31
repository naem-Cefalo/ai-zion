# ai-zion

A Turborepo monorepo with NestJS, React, and Prisma implementing a simple JWT authentication system.

## Structure

```
ai-zion/
├── apps/
│   ├── api/        # NestJS backend with JWT auth
│   └── web/        # React/Vite frontend
└── packages/
    └── database/   # Shared Prisma schema and PrismaClient
```

## Prerequisites

- Node.js 18+
- pnpm 9+
- MySQL database

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy and configure environment variables
cp packages/database/.env.example packages/database/.env
cp apps/api/.env.example apps/api/.env

# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Run all apps in development mode
pnpm dev
```

## Apps

### API (`apps/api`) — port 3000

| Method | Path            | Auth     | Description      |
|--------|-----------------|----------|------------------|
| POST   | /auth/register  | Public   | Create new user  |
| POST   | /auth/login     | Public   | Login, get JWT   |
| GET    | /auth/me        | Bearer   | Get current user |

### Web (`apps/web`) — port 5173

React SPA that talks to the API via the Vite dev-server proxy (`/api → http://localhost:3000`).

## Packages

### `@repo/database`

- **`prisma/schema.prisma`** — Prisma schema with `User` model (MySQL)
- **`src/index.ts`** — Exports `PrismaClient` singleton and `User` type