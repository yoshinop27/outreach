# Outreach Dashboard (MVP)

A job-outreach CRM: watchlists of target companies → discovered contacts →
cold email / LinkedIn outreach → reply triage → coffee-chat scheduling →
analytics. Built from `outreach-dashboard-spec.md`.

## What's real vs. mocked in this build

Per the spec's own compliance notes and phasing, three integrations need
credentials/accounts this build doesn't assume you have yet:

| Piece | This build | Real spec version |
|---|---|---|
| **Login** | Real Google OAuth via NextAuth, invite-only | Same |
| **Contact discovery** | `src/lib/mock-apollo.ts` generates plausible fake contacts | Apollo.io People Search API |
| **Email send / reply detection** | `src/lib/mock-google.ts` simulates sending, logs an `OutreachEvent` | Gmail API send + push notifications |
| **Calendar** | Same mock file simulates creating an event | Google Calendar API |
| **Discovery + dispatch trigger** | Manual "Run discovery" button | Scheduled cron/queue job (same underlying function, `src/lib/outreach.ts`) |

Every mocked piece is isolated behind a small function with the same shape a
real API call would have (`discoverContacts`, `mockSendEmail`,
`mockCreateCalendarEvent`) — swap the implementation, not the callers, when
you're ready to go live. Adaptive send-volume (spec Section 6.2, Phase 4) and
Postgres/GraphQL (spec's suggested stack) are intentionally out of scope for
this MVP — see "Deviations from the spec" below.

## Getting started

```bash
npm install
cp .env.example .env        # then edit ADMIN_EMAIL and NEXTAUTH_SECRET at least
npx prisma db push          # creates prisma/dev.db (SQLite)
npm run db:seed             # seeds an admin user + sample watchlist/templates
npm run dev                 # http://localhost:3000
```

Generate a real `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

### Logging in without Google OAuth (dev login)

With `ENABLE_DEV_LOGIN="true"` in `.env` (the default), the login page shows
a "Dev Login" panel that signs you in as any seeded user by email — no OAuth
required. This is gated to local development only; never enable it in a
deployed environment. Use it to explore the app immediately.

### Setting up real Google login

1. In the [Google Cloud Console](https://console.cloud.google.com), create
   (or pick) a project, then go to **APIs & Services → OAuth consent
   screen** and configure it (Internal if you're on Google Workspace and
   want to restrict to your org, External + Testing otherwise).
2. Go to **APIs & Services → Credentials → Create Credentials → OAuth
   client ID**, application type **Web application**.
3. Add an authorized redirect URI:
   `http://localhost:3000/api/auth/callback/google`
4. After creation, copy the **Client ID** and **Client secret**.
5. Put these into `.env`:
   ```
   GOOGLE_CLIENT_ID="<client id>"
   GOOGLE_CLIENT_SECRET="<client secret>"
   ```
6. Restart `npm run dev`. The "Sign in with Google" button on `/login` will
   now be enabled.
7. **Invite-only**: signing in only succeeds for emails an admin has already
   invited (see the Admin panel) — anyone else gets an `AccessDenied` error
   by design (spec Section 2: "Invite-only: accounts are created by an
   admin, not open self-signup"). Make sure `ADMIN_EMAIL` in `.env` matches
   the Google account you'll sign in with first, since the seed script
   grants that email an active admin account.
8. This build only requests default OpenID Connect scopes (login only) — no
   extra setup is needed to make login itself work. To send real mail and
   create real calendar events, see "Wiring up the mocked APIs" below.

## Wiring up the mocked APIs

Two pieces are mocked and need their own account/credentials before this is
a real, working outreach tool. Neither is required to run or demo the app —
only to make discovery and outreach actually hit the outside world.

### Apollo.io (contact discovery — `src/lib/mock-apollo.ts`)

1. Sign up at [apollo.io](https://www.apollo.io) and pick a plan with **API
   access** to People Search — the free tier does not include API access,
   so you need a paid plan.
2. Get an API key: **Settings → Integrations → API**.
3. Add it to `.env`, e.g. `APOLLO_API_KEY="<key>"` (there's no entry for
   this in `.env.example` yet — add one when you wire it up).
4. Rewrite `discoverContacts` in `src/lib/mock-apollo.ts` to call Apollo's
   People Search endpoint (`POST https://api.apollo.io/v1/mixed_people/search`
   with `organization_domains`, `person_titles`, and your API key) instead
   of generating fake data, mapping the response into the same
   `MockDiscoveredContact` shape callers already expect. There's no official
   Node SDK — plain `fetch` is enough.
5. Note: Apollo's People Search only returns verified emails when you
   consume enrichment credits per contact, which are metered by plan — this
   affects how big a "Run discovery" batch you can afford to run.

### Gmail + Google Calendar (email + calendar — `src/lib/mock-google.ts`)

This is more involved than Apollo because email/calendar actions happen
*as the signed-in user* (delegated OAuth scopes), not with a single app-wide
API key — so it builds on the Google OAuth client above rather than being a
separate account.

1. In the same Google Cloud project used for login, go to **APIs & Services
   → Library** and enable the **Gmail API** and **Google Calendar API**.
2. If your OAuth consent screen uses restricted/sensitive scopes (Gmail send
   scopes are considered sensitive), you'll need to add the scopes on the
   **OAuth consent screen → Scopes** page, and — for an External app used
   outside a Google Workspace org — submit it for **verification** before
   it can be used by anyone besides the test users you've explicitly added.
   Internal (Workspace-only) apps skip verification.
3. Update the `GoogleProvider` config in `src/lib/auth.ts` to actually
   request those scopes at sign-in, e.g.:
   ```ts
   authorization: {
     params: {
       scope:
         "openid profile email " +
         "https://www.googleapis.com/auth/gmail.send " +
         "https://www.googleapis.com/auth/calendar.events",
       access_type: "offline",
       prompt: "consent",
     },
   }
   ```
   (`access_type: "offline"` is what gets you a refresh token — Google only
   returns one on the *first* consent, hence `prompt: "consent"` to force it.)
4. Capture and persist the OAuth access token and refresh token that
   NextAuth receives in the `jwt` callback's `account` param — Gmail/
   Calendar calls need a valid per-user bearer token, and Google access
   tokens expire in about an hour, so you'll need to refresh them (via the
   refresh token) rather than just store the first one.
5. Add `googleapis` (Google's official Node client) and call
   `gmail.users.messages.send` and `calendar.events.insert` using that
   per-user token, in place of the fake logic in `mockSendEmail` and
   `mockCreateCalendarEvent`.
6. Reply detection (the "Real spec version" of email in the table above)
   needs Gmail push notifications (a `users.watch` subscription via Google
   Cloud Pub/Sub) — out of scope for a first pass; the **Simulate reply**
   button in Pipeline stands in for this until it's built.

## Project layout

```
prisma/schema.prisma       Data model (see header comment on SQLite enum handling)
prisma/seed.ts             Seeds an admin user + sample watchlist/templates
src/lib/auth.ts            NextAuth config: Google + dev-login providers, invite-only gate
src/lib/outreach.ts        Discovery + dispatch logic (caps, dedupe, template rendering)
src/lib/mock-apollo.ts     Fake contact generator — swap for a real Apollo.io call
src/lib/mock-google.ts     Fake email/calendar actions — swap for real Gmail/Calendar API calls
src/lib/analytics.ts       Shared analytics query, used by both the API route and SSR pages
src/app/api/**             REST endpoints, all scoped to the signed-in user (except /admin/**)
src/app/dashboard/**       The actual UI: watchlist, pipeline, action queue, inbox,
                           templates, calendar, analytics, settings, admin
```



