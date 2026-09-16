# Stack Decision — Ukrainian Kitchen

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router, Turbopack) | RSC, server actions, ISR, React 19 |
| UI library | HeroUI (NextUI) | Pre-built accessible components, dark/light |
| CSS | Tailwind CSS v4 | @import "tailwindcss", @theme tokens |
| Animation | motion (framer-motion) | Stagger animations, transitions |
| DB | PostgreSQL (Supabase hosted) | Managed, schema-compatible with Prisma, free tier |
| ORM | Prisma (schema-first) | Code-gen types, migrations |
| Auth | NextAuth v5 (Auth.js, Credentials) | Credentials provider with bcryptjs passwords |
| Client state | Zustand | Lightweight client state |
| Validation | Zod | Schema validation on mutation boundaries |
| Password hashing | bcryptjs | Easy, dependency-free hashing |
| Language | TypeScript (strict) | Default for Next.js + Prisma stack |

## Alternatives Considered

- **Supabase Auth instead of NextAuth**: Rejected; the learning goal is
  the NextAuth Credentials flow. Supabase Postgres is used purely as a
  hosted database, not as a full BaaS.
- **Local Postgres instead of Supabase**: Supabase was chosen to avoid
  Docker on the dev machine; direct connection string keeps Prisma
  workflow unchanged.

## Hosting / Runtime

- **Dev**: `localhost:3000` (Turbopack, Next.js 15 dev server).
- **Production**: not deployed; local-only learning project.
- **Database**: Supabase free-tier PostgreSQL (single region).

## Sensible Defaults

- Server Components by default; `"use client"` only for interactive
  components (cart, forms, client animations).
- Server Actions for mutations; Prisma calls only from server-side code.
- Zustand in client code only; no Prisma in client components.
