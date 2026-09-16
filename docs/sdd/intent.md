# Intent — Ukrainian Kitchen

## What

A learning project: a Ukrainian cuisine recipe platform with a German-language UI.

- **Stack**: Next.js 15 (App Router), Tailwind CSS v4, HeroUI, Prisma,
  PostgreSQL (Supabase hosted), NextAuth v5 (Credentials), Zustand,
  Zod, framer-motion, bcryptjs.
- **Language**: UI entirely in German (navigation, forms, error messages,
  static content). Currency: EUR (€).
- **Dishes**: Borschtsch, Deruny, Holubtsi, Pampuschky, Kotelett nach Kiew.
  All with real photos already in `public/`. Users can add more recipes.
- **Content**: German descriptions of Ukrainian cuisine on the About page.

## Why

Build fluency with the full-stack canon (SSG + React islands, client state,
server actions, Prisma/Postgres, auth, forms, Zod validation) by building a
complete project from scratch. The German UI doubles as portfolio material
for the Kassel job market.

## Scope

- CRUD for recipes (name, description, image, ingredients) and ingredients
  (category, unit, price in EUR, description).
- Auth: registration, login, passwordless "Meine Bestellungen"-style access
  via code on screen (demo mode).
- Protected routes: ingredient management, recipe create/edit.
- Dashboard with basic stats.
- Mobile-first responsive layout.

## Non-Goals (MVP)

- Payment / checkout.
- Real email delivery (code shown on screen in demo mode).
- Multi-language UI (single language: German).
- Image upload (remote URLs only).
