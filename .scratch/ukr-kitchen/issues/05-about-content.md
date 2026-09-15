# 05: About page + error page + German content (implements FR-2, FR-3, UX1, UX2)

**What to build:** The public About page (`/ueber-uns`) describing
Ukrainian cuisine in German with the five featured dishes (Borschtsch,
Deruny, Holubtsi, Pampuschky, Kotelett nach Kiew) using their real photos
from `public/`; structured content (parsed via react-markdown /
html-react-parser, sanitized with dompurify). Root layout loads the Hermes
font; header feeds nav (Home/Ingredients/About) from a German site config
with the site name; a user-friendly error page renders on uncaught
exceptions. Home page content copy (placeholder recipe list intro) in
German.

**Verification scenario (one, plain-text GIVEN/WHEN/THEN):**
GIVEN a visitor on the home page
WHEN they click "Über uns" in the header
THEN they reach the About page showing the Ukrainian cuisine description
and at least the five featured dish photos with German names, in ≤ 2
clicks; the site name in the header is German.

**Blocked by:** 01 (layout, providers, fonts in place).

**Status:** ready-for-agent

- [ ] German site config (name + nav labels)
- [ ] About page with German content + five dish photos from `public/`
- [ ] Header uses German labels; hero/home intro German
- [ ] Root error page renders human-friendly
- [ ] `npm run check` green