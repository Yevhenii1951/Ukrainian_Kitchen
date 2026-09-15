# Stack Decision — Ukrainian Kitchen

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 15 (App Router, Turbopack) | As Tatar Kitchen reference; RSC, server actions, ISR, React 19 |
| UI library | HeroUI (NextUI) | Matches reference; pre-built accessible components, dark/light |
| CSS | Tailwind CSS v4 | Matches reference; @import "tailwindcss", @theme tokens |
| Animation | motion (framer-motion) | Matches reference; stagger animations for menu, hero transitions |
| DB | PostgreSQL (Supabase hosted) | User choice; managed, schema-compatible with Prisma, free tier |
| ORM | Prisma (schema-first) | Matches reference; code-gen types, migrations |
| Auth | NextAuth v5 (Auth.js, Credentials) | Matches reference; Credentials provider with bcryptjs passwords |
| Client state | Zustand | Matches reference; cart state |
| Validation | Zod | Matches reference; schema validation on mutation boundaries |
| Password hashing | bcryptjs | Matches reference |
| Language | TypeScript (strict) | Default for Next.js + Prisma stack |

## Alternatives Considered

- **Supabase Auth instead of NextAuth**: Rejected; the goal is to
  replicate the reference stack to learn the same auth flow. Supabase
  Postgres is used purely as a hosted database, not as a full BaaS.
- **Local Postgres instead of Supabase**: Supabase was chosen to avoid
  Docker on this machine; direct connection string keeps Prisma workflow
  unchanged.

## Hosting / Runtime

- **Dev**: `localhost:3000` (Turbopack, Next.js 15 dev server).
- **Production**: not deployed; local-only learning project.
- **Database**: Supabase free-tier PostgreSQL (single region).

## Sensible Defaults

- Server Components by default; `"use client"` only for interactive
  components (cart, forms, client animations).
- Server Actions for mutations; Prisma calls only from server-side code.
- Zustand in client code only; no Prisma in client components.
