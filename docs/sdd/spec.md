# Business Spec — Ukrainian Kitchen

## Intent

A full-stack recipe-management learning project (Next.js 15 App Router,
HeroUI, Tailwind v4, Prisma, Postgres, NextAuth v5 Credentials,
Zustand, Zod) themed to Ukrainian cuisine with a German-language UI.
The learning goal is the full-stack canon; the project is built from
scratch as an original application.

## Users

- Primary: the studio (reproduction / learning exercise).
- Secondary: demo visitors browsing recipes and (demo) managing
  ingredients/recipes after login.

## User Stories

- US1: As a visitor I can browse recipes on the home page with German
  names and descriptions.
- US2: As a visitor I can read the About page describing Ukrainian cuisine.
- US3: As a visitor I can open the login and registration modals from the
  header.
- US4: As an authenticated user I can register, log in and log out
  (Credentials, bcryptjs-hashed passwords).
- US5: As an authenticated user I can create, edit and delete ingredients
  (name, category, unit, price per unit, description).
- US6: As an authenticated user I can create and delete recipes (name,
  description, image URL, ingredients with quantity).

## Requirements

### Functional Requirements

- FR-1: Public home page lists all recipes with name, description and
  image, from the database (no hardcoded list).
- FR-2: Public About page presents Ukrainian cuisine in German.
- FR-3: Navigation (header) covers Home / Ingredients / About; login and
  registration are available via modals in the header.
- FR-4: Registration creates a User in the DB; password stored bcryptjs-
  hashed; email is unique.
- FR-5: Login validates Credentials (Zod → DB lookup → bcryptjs compare);
  session is a JWT with maxAge 1 h.
- FR-6: Logout destroys the session; protected routes redirect to the
  login state afterwards.
- FR-7: Ingredient CRUD: create, edit, delete; fields name, category
  (enum), unit (enum), pricePerUnit (Float, optional), description.
- FR-8: Recipe CRUD: create, delete, detail view; fields name, description,
  imageUrl; ingredients attached via RecipeIngredient with quantity.
- FR-9: Auth protection: `/ingredients` and `/recipes` routes require a
  valid session; unauthenticated access redirects to login.
- FR-10: Home page reflects DB state after recipe create/delete without a
  full reload (revalidation).

### Non-Functional Requirements

- NFR-P1 (performance): Lighthouse ≥ 90 on core pages; home is SSG/ISR
  (no per-request DB round trip).
- NFR-V1 (security): Zod validation on every mutation; bcryptjs passwords;
  auth session checked server-side; no secrets in client code; Prisma
  parameterized by design; user input sanitized before rendering
  (dompurify).
- NFR-R1 (responsive): mobile-first; usable from 320 px up; modals and
  forms keyboard-operable.
- NFR-A1 (accessibility): semantic HTML, labels on all inputs, focus
  visible, sufficient contrast; HeroUI components for accessible primitives.

### UX Acceptance Criteria

- UX1: German UI text everywhere (header, buttons, modals, forms, errors,
  static content). No stock Russian references.
- UX2: The About page covers real Ukrainian dishes (Borschtsch, Deruny,
  Holubtsi, Pampuschky, Kotelett nach Kiew) with their real photos from
  `public/`.
- UX3: A first-time visitor reaches the About page in ≤ 2 clicks from home.
- UX4: Loading, empty and error states exist for asynchronous sections.

## Success Metrics

- M1: All key pages render German content with the theme photos.
- M2: Ingredient and recipe CRUD fully testable via a browser scenario.
- M3: `npm run check` green (lint + typecheck + tests) at every ticket close.

## Non-Goals

- NG1: Prices on dishes, cart or checkout (recipe has no price; only
  ingredients have an optional pricePerUnit).
- NG2: Passwordless / demo access codes (Credentials only).
- NG3: Multi-language UI (single language: German).
- NG4: Image upload (remote image URLs only).
- NG5: Roles/permissions (any authenticated user can CRUD).
- NG6: Deployment; local-only learning project.

## Acceptance Criteria

- AC-1: Home lists all recipes from the DB with German names/descriptions.
- AC-2: Registration, login, logout work; passwords are bcrypt-hashed.
- AC-3: An authenticated user can create/edit/delete an ingredient and
  create/delete a recipe; changes appear on the home page.
- AC-4: Unauthenticated access to protected routes redirects to login.
- AC-5: `npm run check` and `npm run build` pass locally.

## Risks / Questions

- OQ1 (resolved): Brand name in header is **Borschtsch & Pampuschky**
  (approved by user).
- OQ2: German title/description texts on the About page — draft copy from
  me for confirmation, or the user provides own texts?
- OQ3: Supabase Postgres: direct Prisma connection to Supabase-hosted DB
  for dev, or local Postgres during development?