# Digital Business Card Application - Airavata Technologies

## Overview

This is a modern, interactive digital business card web application for Airavata Technologies. The application features a Facebook-style cover banner design with company logo, circular owner profile photo, portfolio showcase, and comprehensive sharing capabilities. Built as a single-page application with a professional layout optimized for both desktop and mobile viewing.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (currently single route application)
- **Single Page Application (SPA)** architecture with client-side rendering

**UI Component System**
- **shadcn/ui** component library using the "new-york" style variant
- **Radix UI** primitives for accessible, unstyled component foundations
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** based theming system supporting light/dark modes
- Custom color palette derived from brand colors (red, blue, yellow, green)

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local component state using React hooks
- Toast notifications for user feedback via custom toast system

**Design System**
- Facebook-style cover banner layout with company branding
- Circular owner profile photo overlay on banner
- Responsive grid layout (max-width: 1024px) optimized for desktop and mobile
- Professional design with clear information hierarchy
- Typography: Inter (primary) and Poppins (accent/company name)
- Dark mode support through CSS custom properties

**Key Features**
- **Banner Section**: Gradient background with centered company logo
- **Profile Section**: Circular owner photo with name and role overlay on banner
- **Contact Information**: WhatsApp, mobile, email, and website with click-to-contact
- **Social Media Links**: Facebook, Instagram, LinkedIn, X with branded icons
- **Portfolio Showcase**: Featured projects with images and descriptions
- **Sharing Features**: QR code generation and Web Share API integration

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- **ESM (ES Modules)** for modern JavaScript module system
- Custom request logging middleware for API route monitoring
- Vite integration in development mode for seamless full-stack development

**Build & Deployment**
- **esbuild** for server-side code bundling in production
- Client assets built with Vite and served from `dist/public`
- Separate development and production configurations

**Code Organization**
- Modular route registration system (`server/routes.ts`)
- Storage abstraction layer (`server/storage.ts`) with interface-based design
- In-memory storage implementation (MemStorage) for user data
- Shared schema definitions between client and server (`shared/schema.ts`)

### Data Storage Solutions

**Database System**
- **PostgreSQL** configured as the primary database (via Neon serverless driver)
- **Drizzle ORM** for type-safe database operations and schema management
- Database migrations managed through `drizzle-kit`
- Connection pooling via `@neondatabase/serverless`

**Schema Design**
- Users table with UUID primary keys (auto-generated)
- Username and password fields with unique constraints
- **Drizzle Zod** integration for runtime schema validation
- Type inference for compile-time type safety

**Current Implementation**
- In-memory storage fallback (MemStorage class) for development
- Interface-based storage abstraction (IStorage) allowing easy swapping between implementations
- No active database queries in current application (digital card is static content)

### Authentication and Authorization

**Current State**
- User schema defined but authentication not implemented
- Session management dependencies installed (`connect-pg-simple` for PostgreSQL-backed sessions)
- No active authentication flow in the digital card application

**Future-Ready Infrastructure**
- User table structure supports username/password authentication
- Session store configuration ready for PostgreSQL backend
- Form validation ready via `react-hook-form` and `@hookform/resolvers`

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** ecosystem (20+ component primitives including dialogs, dropdowns, tooltips)
- **Lucide React** for icon components
- **react-icons** specifically for social media icons (Facebook, Instagram, LinkedIn, X/Twitter, WhatsApp)
- **qrcode.react** for QR code generation and sharing functionality
- **embla-carousel-react** for carousel functionality
- **cmdk** for command palette patterns
- **vaul** for drawer components
- **react-day-picker** for date selection
- **recharts** for data visualization capabilities
- **input-otp** for OTP input handling

**Styling & Design**
- **Tailwind CSS** with PostCSS and Autoprefixer
- **class-variance-authority** for variant-based component styling
- **clsx** and **tailwind-merge** for conditional className composition
- **date-fns** for date formatting and manipulation

**Development Tools**
- **Replit-specific plugins**: runtime error overlay, cartographer, dev banner
- **tsx** for TypeScript execution in development
- TypeScript compiler for type checking

**Database & ORM**
- **@neondatabase/serverless** for PostgreSQL connectivity
- **drizzle-orm** with PostgreSQL dialect
- **drizzle-zod** for schema validation

**Build & Runtime**
- **esbuild** for fast server bundling
- **Vite** with React plugin
- **@jridgewell/trace-mapping** for source map support

**Current External Services**
- Google Fonts API (Inter and Poppins font families)
- Static logo asset served from local `attached_assets` directory
- Contact links that open native applications (phone, email, maps, browser for website and social media)