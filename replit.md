# Beyond Horizon Supported Living

## Overview

A marketing and lead-generation website for Beyond Horizon Supported Living, a care services organization that provides supported living, independent living support, and caregiver collaboration services. The application features a public-facing informational site with contact forms, career applications, and testimonial displays.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Animations**: Framer Motion for page transitions and scroll animations
- **Forms**: React Hook Form with Zod schema validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Build**: Custom build script using esbuild for server bundling and Vite for client

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with drizzle-zod for type-safe validation
- **Migrations**: Drizzle Kit for database schema management (`db:push` command)

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Route page components
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API endpoint definitions
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   ├── schema.ts     # Drizzle table definitions
│   └── routes.ts     # API route contracts
└── migrations/       # Database migrations
```

### Key Design Patterns
- **Monorepo Structure**: Client and server code colocated with shared types
- **Type-Safe API Contracts**: Route definitions in `shared/routes.ts` include input validation schemas and response types
- **Storage Interface**: `IStorage` interface in `server/storage.ts` abstracts database operations for potential future flexibility

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Connection**: pg Pool with Drizzle ORM wrapper

### UI Component Library
- **shadcn/ui**: Pre-built accessible components using Radix UI primitives
- **Component Path Aliases**: `@/components`, `@/lib`, `@/hooks` configured in tsconfig

### Development Tools
- **Vite**: Development server with HMR and production builds
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Key npm Packages
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `@tanstack/react-query`: Async state management
- `framer-motion`: Animation library
- `wouter`: Lightweight React router
- `zod`: Schema validation