# 04: Recipe CRUD + home list behind auth (implements FR-1, FR-8, FR-10)

**What to build:** End-to-end recipe management as in the reference: a
protected `/recipes/new` create page with a form (name, description, image
URL, ingredient select with quantity) and Zod validation; a recipe detail
page `/recipes/[id]` rendering description, image and ingredient table;
delete control with confirmation; create/delete server actions; Zustand
recipe store firing a reload event so the home page reflects DB changes
without a full reload. Home page lists recipes from Prisma (server
component) with name, image and description.

**Verification scenario (one, plain-text GIVEN/WHEN/THEN):**
GIVEN an authenticated user with at least one ingredient in the DB
WHEN they create a recipe with that ingredient, view its detail page, then
delete it
THEN the recipe appears on the home page, the detail page shows its
ingredients, and after deletion the recipe is gone from the home page
without a full reload; an unauthenticated user cannot create a recipe.

**Blocked by:** 02 (auth), 03 (ingredients exist to attach to recipes).

**Status:** ready-for-agent

- [ ] Zod schema for recipe (name, description, imageUrl, ingredients+quantity)
- [ ] Recipe create + delete server actions with Prisma
- [ ] `/recipes/new` form with ingredient multi-select and quantities
- [ ] `/recipes/[id]` detail page (description, image, ingredients)
- [ ] Home list reads recipes from DB; reload event updates it without reload
- [ ] `npm run check` green