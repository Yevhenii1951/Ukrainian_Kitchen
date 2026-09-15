# 03: Ingredient CRUD behind auth (implements FR-7, FR-10)

**What to build:** End-to-end ingredient management as in the reference: a
protected `/ingredients` page with a data table (name, category, unit,
price per unit, description) plus a create/edit modal form; Zod schemas
for create/update; server actions wired to Prisma (create/update/delete);
Zustand ingredient store and a reload event so the table and home page
reflect DB changes without a full reload. Categories and units come from
German-labeled select options; description is sanitized (dompurify) when
rendered.

**Verification scenario (one, plain-text GIVEN/WHEN/THEN):**
GIVEN an authenticated user on `/ingredients`
WHEN they create an ingredient, then edit its name and price, then delete
it
THEN the table shows the new ingredient, then the edited values, then the
row is gone; the change persists after a page reload; an unauthenticated
user cannot reach the page.

**Blocked by:** 02 (requires working auth session to access the page).

**Status:** ready-for-agent

- [ ] Zod schema for ingredient create/update with German errors
- [ ] Ingredient server actions (create/update/delete) with Prisma
- [ ] Protected `/ingredients` page with data table from DB
- [ ] Modal form (create/edit) with category + unit German select options
- [ ] Zustand ingredient store + reload event; description sanitized
- [ ] `npm run check` green