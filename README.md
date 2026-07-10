# Outreach Dashboard (MVP)

A job-outreach CRM: watchlists of target companies → discovered contacts →
cold email / LinkedIn outreach → reply triage → coffee-chat scheduling →
analytics. Built from `outreach-dashboard-spec.md`.

## What's real vs. mocked in this build

Per the spec's own compliance notes and phasing, three integrations need
credentials/accounts this build doesn't assume you have yet:

| Piece | This build | Real spec version |
|---|---|---|
| **Login** | Real Microsoft Entra ID (Azure AD) via NextAuth, invite-only | Same |
| **Contact discovery** | `src/lib/mock-apollo.ts` generates plausible fake contacts | Apollo.io People Search API |
| **Email send / reply detection** | `src/lib/mock-graph.ts` simulates sending, logs an `OutreachEvent` | Microsoft Graph `Mail.Send` + change notifications |
| **Calendar** | Same mock file simulates creating an event | Microsoft Graph `Calendars.ReadWrite` |
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

### Logging in without Azure AD (dev login)

With `ENABLE_DEV_LOGIN="true"` in `.env` (the default), the login page shows
a "Dev Login" panel that signs you in as any seeded user by email — no OAuth
required. This is gated to local development only; never enable it in a
deployed environment. Use it to explore the app immediately.

### Setting up real Entra ID login

1. In the [Azure Portal](https://portal.azure.com), go to **Microsoft Entra
   ID → App registrations → New registration**.
2. Name it (e.g. "Outreach Dashboard"), leave account type as your default,
   and set the redirect URI to **Web**:
   `http://localhost:3000/api/auth/callback/azure-ad`
3. After creation, copy the **Application (client) ID** and **Directory
   (tenant) ID** from the Overview page.
4. Go to **Certificates & secrets → New client secret**, create one, and
   copy its value immediately (it's only shown once).
5. Put these into `.env`:
   ```
   AZURE_AD_CLIENT_ID="<application client id>"
   AZURE_AD_CLIENT_SECRET="<client secret value>"
   AZURE_AD_TENANT_ID="<directory tenant id>"
   ```
6. Restart `npm run dev`. The "Sign in with Microsoft" button on `/login`
   will now be enabled.
7. **Invite-only**: signing in only succeeds for emails an admin has already
   invited (see the Admin panel) — anyone else gets an `AccessDenied` error
   by design (spec Section 2: "Invite-only: accounts are created by an
   admin, not open self-signup"). Make sure `ADMIN_EMAIL` in `.env` matches
   the Microsoft account you'll sign in with first, since the seed script
   grants that email an active admin account.
8. This build only requests default OpenID Connect scopes (login only). Add
   `Mail.Send` and `Calendars.ReadWrite` delegated permissions to the app
   registration when you wire up real Graph calls in `src/lib/mock-graph.ts`.

## Project layout

```
prisma/schema.prisma       Data model (see header comment on SQLite enum handling)
prisma/seed.ts             Seeds an admin user + sample watchlist/templates
src/lib/auth.ts            NextAuth config: Entra ID + dev-login providers, invite-only gate
src/lib/outreach.ts        Discovery + dispatch logic (caps, dedupe, template rendering)
src/lib/mock-apollo.ts     Fake contact generator — swap for a real Apollo.io call
src/lib/mock-graph.ts      Fake email/calendar actions — swap for real Microsoft Graph calls
src/lib/analytics.ts       Shared analytics query, used by both the API route and SSR pages
src/app/api/**             REST endpoints, all scoped to the signed-in user (except /admin/**)
src/app/dashboard/**       The actual UI: watchlist, pipeline, action queue, inbox,
                           templates, calendar, analytics, settings, admin
```

## Everyday usage

1. Sign in (dev login or Entra ID).
2. **Watchlist** → add a company + target titles/location. Click **Run
   discovery for all active** to generate contacts (mocked Apollo) and
   dispatch outreach against your active templates and daily/per-company
   caps.
3. **Pipeline** shows every contact on a kanban board; you can also manually
   override any contact's status here.
4. **Action Queue** is the LinkedIn fallback — copy the pre-filled note,
   open the (fake) LinkedIn profile, and click "Mark sent" once you've
   actually done it by hand.
5. Since there's no real inbox connected, contacts you emailed have a
   **Simulate reply** button on the Pipeline board — a stand-in for the
   Microsoft Graph mail-change notification the real system would use.
6. Replies land in **Reply Inbox** for manual triage (meeting booked / not
   interested / no response).
7. **Calendar** lets you manually schedule a coffee chat for any replied
   contact.
8. **Analytics** rolls all of this up over 7/30/90-day windows.
9. **Admin** (only visible to admin-role users) invites new users by email
   and manages daily send caps / disabling accounts.

## Deviations from the spec (and why)

- **REST, not GraphQL.** The spec suggests a GraphQL API; this build uses
  plain Next.js route handlers to keep the MVP's moving parts down. The
  per-user scoping and resolver-level enforcement the spec calls for is
  still there — it's just done in REST handlers instead of GraphQL
  resolvers.
- **SQLite, not Postgres.** Zero setup, single file, no external service to
  install. The schema mirrors the spec's tables field-for-field; the header
  comment in `prisma/schema.prisma` explains the two places SQLite's lack of
  enum/array types required a workaround (stored as validated strings/JSON,
  see `src/lib/types.ts`). Postgres row-level security from the spec isn't
  applicable to SQLite — scoping is enforced in the API layer instead
  (every query filters by the signed-in `user_id`).
- **Manual trigger, not a scheduled worker.** Discovery + dispatch run when
  you click a button rather than on a cron. The function they call
  (`runDiscoveryAndDispatch` in `src/lib/outreach.ts`) is exactly what a
  scheduled job would call per watchlist item — wire up a cron (e.g.
  Vercel Cron, or a `node-cron`/BullMQ worker) calling that function to get
  the spec's actual Phase 1 behavior.
- **No adaptive send volume.** Spec Section 6.2/Phase 4's reply-rate-driven
  cap adjustment isn't built — `dailySendCapCurrent` is only ever
  manually/admin-set, which matches the spec's own Phase 1–3 scope.
- **"Opened" isn't tracked.** As the spec's own Section 11 open question
  flags, Microsoft Graph doesn't report opens without a tracking pixel.
  Analytics shows reply rate and bounce rate; open rate is displayed as "—"
  with a note rather than a fabricated number.
