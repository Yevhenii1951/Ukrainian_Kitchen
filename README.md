# Borschtsch & Pampuschky 🇺🇦

![Borschtsch & Pampuschky – Startseite](public/Screenshot%20from%202026-09-16%2020-49-38.png)

> Eine Web-App für Rezepte der ukrainischen Küche. Gebaut als Fullstack-Lernprojekt: Server Actions, Middleware, Client-State, Auth, Prisma, Supabase und Cloud-Deployment.

---

## Funktionen

- 📖 **Rezeptverwaltung** — Rezepte anlegen, bearbeiten und löschen (mit Server-Rendering + ISR)
- 🧅 **Zutatenverwaltung** — Kategorien, Einheiten, Preis pro Einheit, Lösch-Funktion
- 🔐 **Authentifizierung** — Registrierung, Anmeldung und Abmeldung (Passwörter mit `bcryptjs` gehasht)
- 🛡️ **Geschützte Routen** (`/ingredients`, `/recipes/new`, `[id]`) — nur für angemeldete Nutzer
- 🇩🇪 **Komplette Benutzeroberfläche auf Deutsch** (Zod-Fehlermeldungen, Formulare, Navigation)
- 📱 **Responsives, mobiles Layout** (HeroUI + Tailwind CSS v4)
- 🌻 **Design mit ukrainischer Identität** — Farben Borschtsch-Rot (`#8e2b2b`), Sonnenblumen-Gold (`#e8a33d`), Dill-Grün (`#4c6b3a`), Serif-Display `Fraunces`, warmes Weizen-Beige (`#FAF5EC`)
- ⚡ **Performance** — Server Components (`page.tsx`), `revalidate = 60`, `revalidatePath()` nach CRUD
- 🌱 **Seeding** — `npm run db:seed` erzeugt 6 klassische Rezepte (Borschtsch, Deruny, Holubtsi, Pampuschky, Varenyky, Kotelett nach Kiew) mit Zutaten

---

## Screenshots

| Seite | Bild |
|-------|------|
| Startseite (Rezeptliste) | `![Startseite](/public/Screenshot%20from%202026-09-16%2020-49-38.png)` |
| Details / Komponenten | `![Details](/public/Screenshot%20from%202026-09-16%2020-50-08.png)` |

---

## Technologie-Stack

| Bereich       | Technologie / Version                                  |
| ------------- | ------------------------------------------------------ |
| **Frontend**  | Next.js 15 (App Router), React 19, TypeScript 5         |
| **UI**        | HeroUI `@heroui/react` `^2.8.0-beta.10`, Tailwind CSS v4 (`@tailwindcss/postcss`) |
| **Fonts**     | Geist (UI), Fraunces (Display / Überschriften)         |
| **DB / ORM**  | PostgreSQL (Supabase, Transaction-Pooler `:6543`), Prisma `^6.10.1` |
| **Auth**      | NextAuth v5 (`@auth/next-auth` `^5.0.0-beta.29`), Credentials, JWT, `bcryptjs` |
| **State**     | Zustand (`zustand` `^5.0.6`)                           |
| **Validierung** | Zod (`^3.25.67`)                                      |
| **Sanitizing** | DOMPurify (`isomorphic-dompurify`), `html-react-parser` |
| **Migration** | Prisma Migrate (`prisma migrate dev`)                  |
| **Hosting**   | Vercel                                                |

---

## Voraussetzungen

- **Node.js 20+**
- **PostgreSQL-Host** (z. B. Supabase) — Transaction-Pooler Port `6543` empfohlen

---

## Erste Schritte

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen vorbereiten
cp .env.example .env.local
```

Bearbeite `.env.local`:

```env
DATABASE_URL="postgresql://postgres.oftvneomhjsopzkgascw:DEIN_PASSWORT@aws-0-eu-central-1.pooler.supabase.com:6543/postgres"
AUTH_SECRET="ein-langes-zufaelliges-secret"
```

> `AUTH_SECRET` erzeugen: `openssl rand -base64 32`

```bash
# 3. Datenbank-Schema anwenden
npx prisma migrate deploy

# 4. (Optional) Rezepte in DB seeden
npm run db:seed

# 5. Entwicklungsserver starten
npm run dev
```

---

## Datenbank-Seed (`npm run db:seed`)

Der Seed (`prisma/seed.ts`) legt idempotent an:

- **Zutaten** (upsert nach Name): Rote Bete, Kartoffeln, Kohl, Zwiebeln, Karotten, Knoblauch, Dill, Sauerrahm, Hühnerfleisch, Rindfleisch, Hackfleisch, Reis, Mehl, Hefeteig, Butter, Hühnereier, Hüttenkäse, Brotkrumen
- **6 Rezepte** (mit Bild-URLs aus `public/`):
  - `Borschtsch` (`/1borsch.jpg`)
  - `Deruny` (`/deruni1.jpg`)
  - `Holubtsi` (`/golubtsi1.jpg`)
  - `Pampuschky` (`/pampushki1.jpg`)
  - `Varenyky mit Hüttenkäse` (`/vareniki1.jpg`)
  - `Kotelett nach Kiew` (`/kotleta_po_Kievski1.jpg`)

---

## Projektstruktur

```
src/
├── app/
│   ├── (protected)/          # Geschützte Seiten (Zutaten, Rezepte)
│   ├── (public)/about/       # Über-uns-Seite (deutscher Text über Küche)
│   ├── api/auth/[...nextauth]/ # NextAuth-Route
│   ├── error/page.tsx         # Fehlerseite mit "Zurück zur Startseite"
│   ├── not-found.tsx          # 404 mit Serif-Akzent
│   ├── page.tsx               # Startseite (ISR 60s, Server Component)
│   └── layout.tsx             # Root-Layout (Fraunces, lang="de", Theme)
├── actions/                  # Server Actions (CRUD Rezepte, Auth)
├── auth/                     # NextAuth-Konfiguration
├── components/               # UI (Navbar, Title, Cards, Tables)
├── config/                   # Site- und Layout-Konfiguration
├── constants/                # Optionen (Kategorien, Einheiten)
├── forms/                    # Formulare (Login, Registrierung, Rezept, Zutat)
├── providers/                # React-Providers
├── schema/                   # Zod-Schemas
├── store/                    # Zustand-Stores (auth, ingredient, recipe)
├── types/                    # TypeScript-Typen
├── utils/                    # Prisma-Client, Hashing, Helper
prisma/
├── schema.prisma             # DB-Schema (Recipe, Ingredient, RecipeIngredient, User, ...)
├── migrations/               # Migrationen (inkl. createdAt/updatedAt)
└── seed.ts                   # Seed-Skript
public/
├── 1borsch.jpg, pampushki1.jpg, deruni1.jpg, ...  # Rezeptbilder
└── hero_...                  # Hero-Bilder
```

> Detaillierte Architektur und Spezifikation siehe `docs/sdd/` (lokal, nicht im Git-Repo für den öffentlichen Teil).

---

## Skripte

| Befehl            | Beschreibung                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Entwicklungsserver (Turbopack) starten            |
| `npm run build`   | Produktions-Build erstellen                       |
| `npm run start`   | Produktionsserver starten                         |
| `npm run lint`    | ESLint ausführen                                  |
| `npm run check`   | Lint + Typecheck (`tsc --noEmit`)                 |
| `npm run db:seed` | Rezepte und Zutaten in Supabase seeden            |

---

## Migrationen

Bei Änderungen am Schema:

```bash
npx prisma migrate dev --name beschreibung
npx prisma generate
```

---

## Design-Entscheidungen

- **Farben**: Borschtsch-Rot (`#8e2b2b`) als Primär-Akzent, Sonnenblumen-Gold (`#e8a33d`) als Sekundär, Dill-Grün (`#4c6b3a`) als tertiär, Weizen-Beige (`#FAF5EC`) als Hintergrund, Kaschmier-Schwarz (`#2A2018`) als Text.
- **Typografie**: Serif-Display `Fraunces` (Überschriften, Brand, Rezeptnamen) + Sans `Geist` (UI-Text).
- **Struktur**: Keine generischen "SaaS-Karten"; sanfter Hover-Lift, warme `border-soft`, kein hartes Schwarz-Weiß-Kontrast-Design, sondern wohnliches, gastfreundliches Gefühl.
- **Accessibility**: `focus-visible` mit Borschtsch-Rahmen, `prefers-reduced-motion` respektiert, `selection` in Primärfarbe.

---

## Lizenz

Dieses Projekt ist ein Lernprojekt und steht unter der MIT-Lizenz.
