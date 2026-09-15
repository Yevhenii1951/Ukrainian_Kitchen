# 02: Auth (register, login modal, logout, protected layout) (implements FR-3, FR-4, FR-5, FR-6, FR-9)

**What to build:** End-to-end Credentials auth as in the reference:
Zod `signInSchema`; register server action (`bcryptjs` hash, unique email
in DB); NextAuth config (`Credentials`, JWT with maxAge 1 h) with
`api/auth/[...nextauth]/route.ts`; header shows login/registration modal
buttons when logged out and a logout control when logged in; `(protected)`
layout redirects unauthenticated users to the home/login state. German
labels on all form fields and error messages.

**Verification scenario (one, plain-text GIVEN/WHEN/THEN):**
GIVEN a visitor on the home page
WHEN they register a new account and then log in, and a second visitor
with the same email tries to register
THEN the first session is established, the header shows the logged-in
state, and registration with the duplicate email fails with a German error
message; logging out returns the header to the logged-out state and
accessing `/ingredients` redirects away.

**Blocked by:** 01 (needs Prisma models + root providers).

**Status:** ready-for-agent

- [ ] Zod schemas (signIn) with German error messages
- [ ] Register action: bcryptjs hash, unique email, error on duplicate
- [ ] NextAuth Credentials + JWT config, `[...nextauth]` route handler
- [ ] Zustand stores (auth) react to signIn/signOut events
- [ ] Header login/registration modals + logout control
- [ ] `(protected)` layout redirects unauthenticated users
- [ ] `npm run check` green