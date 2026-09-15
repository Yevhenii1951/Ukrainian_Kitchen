# 01: Scaffold project (create + deps + Prisma schema)

**What to build:** Create the Next.js 15 (Turbopack) + Tailwind v4 project
with the same dependencies as the Tatar Kitchen reference (HeroUI, motion,
Prisma, next-auth v5 beta, Zod, Zustand, bcryptjs, dompurify,
html-react-parser, react-markdown). Configure `prisma/schema.prisma` with
the reference models (User, Account, Session, VerificationToken, Ingredient,
Recipe, RecipeIngredient, Category/Unit enums), run the initial migration
against the Supabase Postgres DATABASE_URL, and set up root layout with
Hermes font, Providers (NextAuth SessionProvider), meta in German. Verify
the dev server boots and the home page renders.

**Verification scenario (one, plain-text GIVEN/WHEN/THEN):**
GIVEN a fresh repo with the reference package.json dependencies installed
WHEN `npm run dev` starts and the root layout renders
THEN the home page loads without build errors, Tailwind v4 styles apply,
and the Prisma client was generated from the schema.

**Blocked by:** None (can start immediately).

**Status:** ready-for-agent

- [ ] `package.json` mirrors reference dependencies (Next 15, HeroUI, Prisma, NextAuth v5, Zustand, Zod, bcryptjs, dompurify)
- [ ] `prisma/schema.prisma` defines all reference models/enums; `prisma migrate dev` succeeds against Supabase Postgres
- [ ] Root layout has German meta + SessionProvider; dev server runs, home renders, `npm run check` green