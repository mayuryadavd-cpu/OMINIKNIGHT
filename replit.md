# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### OmniKnight Express Laundry Studio (`artifacts/omniknight`)
- React + Vite static frontend, no backend needed
- 6 pages: Home, Services, Pricing, Why Us, Locate Us, Contact
- Brand: Deep Navy (#0D1B2A) primary, Crimson Red (#C0182A) accent
- Fonts: Inter + Poppins (loaded via HTML link tag in index.html)
- Routing: wouter
- Animations: framer-motion
- WhatsApp floating CTA (+91 97399 36399)
- Google Maps embed for store location

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
