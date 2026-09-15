# Architecture — Ukrainian Kitchen

Faithful reproduction of the Tatar Kitchen reference. Folder structure,
components, data flow and Prisma schema mirror the reference 1:1; only the
content/theme is Ukrainian/German.

## Folder Structure

```
Ukrainian_Kitchen/
├── prisma/
│   └── schema.prisma            # DB models (as reference)
├── public/
│   ├── *.jpg                    # Dish photos, hero
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/route.ts
│   │   ├── (protected)/
│   │   │   ├── ingredients/page.tsx   # Ingredient CRUD table
│   │   │   ├── recipes/
│   │   │   │   ├── new/page.tsx       # Create recipe
│   │   │   │   └── [id]/page.tsx      # Recipe detail
│   │   │   └── layout.tsx             # Auth guard
│   │   ├── (public)/
│   │   │   └── about/page.tsx         # About (Ukrainian cuisine)
│   │   ├── page.tsx                   # Home: recipe list
│   │   ├── error/page.tsx             # Error page
│   │   └── layout.tsx                 # Root layout, providers
│   ├── components/
│   │   ├── common/               # modal, page-content, recipe-card
│   │   └── UI/
│   │       ├── layout/           # header, title
│   │       ├── modals/           # login.modal, registration.modal
│   │       └── tables/           # Ingredients table
│   ├── actions/
│   │   ├── ingredient.ts         # create/update/delete ingredient
│   │   ├── recipe.ts             # create recipe, home revalidation
│   │   ├── register.ts           # signUp
│   │   ├── sign-in.ts            # signIn
│   │   └── sign-out.ts           # signOut
│   ├── auth/auth.ts              # NextAuth config (Credentials, JWT)
│   ├── config/                   # site.config, layout.config
│   ├── constants/                # CATEGORY_OPTIONS, UNIT_OPTIONS (German)
│   ├── forms/                    # ingredient.form, recipe.form, login.form, registration.form
│   ├── hoc/app-loader.tsx        # Auth state bootstrap
│   ├── providers/provider.tsx    # SessionProvider (NextAuth)
│   ├── schema/zod.ts             # signInSchema, ingredient/recipe schemas
│   ├── store/                    # auth.store, ingredient.store, recipe.store (Zustand)
│   ├── types/                    # form-data, ingredient, recipe, user
│   ├── utils/                    # password, prisma, user
│   ├── generated/prisma/         # Prisma client output
│   └── ...
├── .env.local                   # DATABASE_URL, AUTH_SECRET
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Data Flow

1. **Read path (home)**: Home page is a server-rendered recipe list from
   Prisma; after recipe create/delete a server action revalidates the page
   so the DB state appears without a reload.
2. **Write path (Server Actions)**: Authenticated user submits a form
   (Zod-validated on server) → Prisma write → revalidate => page refresh.
3. **Event flows (independent, from Provider)**: auth event (session
   state/signIn/signOut, sign out component → signOut event), reload event
   (recipe/store after create or delete), all persisted in Zustand stores.
4. **Auth flow**: NextAuth Credentials provider; bcryptjs comparison in
   `authorize()`; JWT session (1 h); protected group layout checks session
   and redirects to login.

## Database Schema (Prisma)

Identical models/enums to the reference:

- **User**: id (uuid), email (unique), password (hashed), timestamps
- **Account / Session / VerificationToken**: NextAuth adapter tables
- **Ingredient**: id, name, category (Category enum), unit (Unit enum),
  pricePerUnit (Float?), description, timestamps
- **Recipe**: id, name, description, imageUrl?, ingredients (M2M)
- **RecipeIngredient**: recipeId, ingredientId, quantity

### Enums

- Category: `VEGETABLES, FRUITS, MEAT, DAIRY, SPICES, OTHER`
- Unit: `GRAMS, KILOGRAMS, LITERS, MILLILITERS, PIECES`

## Security Boundaries

- All form inputs validated with Zod on the server before Prisma calls.
- Auth session checked in the protected-route layout; unauthenticated
  users redirected to the login modal/route.
- Prisma calls only from server-side code (server actions, server
  components). No Prisma client in client components.
- User content sanitized with dompurify before rendering.
- Environment variables (DATABASE_URL, AUTH_SECRET) in `.env.local` only,
  never committed.