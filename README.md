# Borschtsch & Pampuschky 🇺🇦

Eine Web-App mit Rezepten der ukrainischen Küche. Gebaut mit **Next.js 15** (App Router), **HeroUI**, **Prisma**, **PostgreSQL (Supabase)**, **NextAuth v5** (Credentials), **Zustand**, **Zod** und **Tailwind CSS v4**.

Dies ist ein Lernprojekt zum Nachbau des vollständigen Fullstack-Kanon: Server Actions, Middleware, Client-State, Formulare mit Zod-Validierung, Authentifizierung und Cloud-Deployment.

## Funktionen

- 📖 Rezeptverwaltung: Rezepte anlegen, bearbeiten und löschen
- 🧅 Zutatenverwaltung: Kategorien, Einheiten, Preis pro Einheit
- 🔐 Registrierung, Anmeldung und Abmeldung (Passwörter mit bcryptjs gehasht)
- 🛡️ Geschützte Routen (`/ingredients`, `/recipes`) — nur für angemeldete Nutzer
- 🇩🇪 Komplette Benutzeroberfläche auf Deutsch
- 📱 Responsive, mobiltaugliches Layout

## Technologie-Stack

| Bereich        | Technologie                                    |
| -------------- | ---------------------------------------------- |
| Frontend       | Next.js 15, React 19, Tailwind CSS v4, HeroUI  |
| Datenbank      | PostgreSQL (Supabase), Prisma ORM              |
| Auth           | NextAuth v5 (Credentials, JWT, bcryptjs)       |
| State          | Zustand                                        |
| Validierung    | Zod                                            |
| Sanitizing     | DOMPurify, html-react-parser, react-markdown   |

## Voraussetzungen

- Node.js 20+
- Ein PostgreSQL-Host (z. B. Supabase) für die Datenbank

## Erste Schritte

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen vorbereiten
cp .env.example .env.local

# 3. Datenbank-Schema anwenden (Migrationen)
npx prisma migrate dev

# 4. Entwicklungsserver starten
npm run dev
```

### Umgebungsvariablen (`.env.local`)

```env
DATABASE_URL="postgresql://USER:PASSWORT@HOST:PORT/postgres"
AUTH_SECRET="ein-langes-zufaelliges-secret"
```

- `DATABASE_URL` — Verbindungs-String deiner PostgreSQL/Supabase-Datenbank.
- `AUTH_SECRET` — Secret für die JWT-Signierung von NextAuth. Erzeugen z. B. mit `openssl rand -base64 32`.

## Projektstruktur

```
src/
├── app/
│   ├── (protected)/          # Geschützte Seiten (Zutaten, Rezepte)
│   ├── (public)/about/       # Öffentliche Über-uns-Seite
│   ├── api/auth/             # NextAuth-Route-Handler
│   ├── error/                # Fehlerseite
│   ├── page.tsx              # Startseite (Rezeptliste, ISR)
│   └── layout.tsx            # Root-Layout, Providers, SessionProvider
├── actions/                  # Server Actions (CRUD, Auth)
├── auth/                     # NextAuth-Konfiguration
├── components/               # UI-Komponenten, Modals, Tabellen
├── config/                   # Site- und Layout-Konfiguration
├── constants/                # Kategorie- und Einheiten-Optionen
├── forms/                    # Formulare (Login, Registrierung, Zutaten, Rezepte)
├── providers/                # React-Providers
├── schema/                   # Zod-Schemas
├── store/                    # Zustand-Stores (auth, ingredient, recipe)
├── types/                    # TypeScript-Typen
└── utils/                    # Prisma-Client, Passwort-Hashing, User-Helfer
```

Zur ausführlichen Architektur- und Spezifikationsbeschreibung siehe [`docs/sdd/`](docs/sdd/).

## Skripte

| Befehl            | Beschreibung                              |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Entwicklungsserver (Turbopack) starten    |
| `npm run build`   | Produktions-Build erstellen               |
| `npm run start`   | Produktionsserver starten                 |
| `npm run lint`    | ESLint ausführen                          |
| `npm run check`   | Lint + Typecheck (kein Fehler erlaubt)    |

## Migration der Datenbank

Bei Änderungen am Prisma-Schema:

```bash
npx prisma migrate dev --name beschreibung
```

Dokumentation: https://www.prisma.io/docs

## Lizenz

Dieses Projekt ist ein Lernprojekt und steht unter der MIT-Lizenz.