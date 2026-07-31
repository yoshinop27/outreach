// Gmail send (`users.messages.send`) and Google Calendar
// (`events.list` / `events.insert`) are both real, per-user Google API calls
// using the signed-in user's connected OAuth token (see spec Section 4,
// items 5 and 7). Function names kept as `mock*` for historical reasons —
// nothing here is actually mocked anymore.

import { google, type calendar_v3 } from "googleapis";
import { prisma } from "@/lib/prisma";

// Derived from googleapis's own re-export rather than importing
// "google-auth-library" directly — the package tree has two separate
// installs of it, which produces a nominal type mismatch otherwise.
type OAuth2Client = InstanceType<typeof google.auth.OAuth2>;

// Distinguishes user-facing Google connectivity errors (not configured, not
// connected, expired, rate-limited) from unexpected bugs, so apiErrorResponse
// can surface the message instead of collapsing it to a generic 500.
export class GoogleApiError extends Error {}

export interface MockSendEmailResult {
  sentAt: Date;
  bounced: boolean;
}

function encodeEmailBody(raw: string): string {
  return Buffer.from(raw, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function parseGoogleErrorStatus(err: unknown): number | undefined {
  if (typeof err !== "object" || !err) return undefined;
  const maybeErr = err as {
    code?: number;
    status?: number;
    response?: { status?: number; data?: { error?: { errors?: Array<{ reason?: string }> } } };
  };
  return maybeErr.response?.status ?? maybeErr.status ?? maybeErr.code;
}

function parseGoogleErrorReason(err: unknown): string | undefined {
  if (typeof err !== "object" || !err) return undefined;
  const maybeErr = err as {
    response?: { data?: { error?: { errors?: Array<{ reason?: string }> } } };
  };
  return maybeErr.response?.data?.error?.errors?.[0]?.reason;
}

interface GoogleUserRecord {
  id: string;
  googleAccessToken: string | null;
  googleRefreshToken: string | null;
  googleTokenExpiresAt: Date | null;
}

// Shared by every Google API call in this file: loads the signed-in user's
// stored tokens and builds an authenticated client. `googleapis` refreshes
// the access token in-place on `oauth2.credentials` when it's expired, using
// the refresh token — `persistGoogleTokens` below writes that back.
async function getGoogleClientForUser(params: {
  userId?: string;
  fromUserEmail?: string;
}): Promise<{ oauth2: OAuth2Client; user: GoogleUserRecord }> {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new GoogleApiError("Google OAuth is not configured on the server.");
  }

  const user = await prisma.user.findFirst({
    where: params.userId ? { id: params.userId } : { email: params.fromUserEmail!.toLowerCase() },
    select: {
      id: true,
      googleAccessToken: true,
      googleRefreshToken: true,
      googleTokenExpiresAt: true,
    },
  });

  if (!user) {
    throw new GoogleApiError("Signed-in user record not found for Google API call.");
  }
  if (!user.googleRefreshToken && !user.googleAccessToken) {
    await prisma.user.update({ where: { id: user.id }, data: { googleAccountConnected: false } });
    throw new GoogleApiError("Google account is not connected. Sign out and sign back in with Google.");
  }

  const oauth2 = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
  oauth2.setCredentials({
    access_token: user.googleAccessToken ?? undefined,
    refresh_token: user.googleRefreshToken ?? undefined,
    expiry_date: user.googleTokenExpiresAt?.getTime(),
  });

  return { oauth2, user };
}

async function persistGoogleTokens(oauth2: OAuth2Client, user: GoogleUserRecord): Promise<void> {
  const nextCreds = oauth2.credentials;
  await prisma.user.update({
    where: { id: user.id },
    data: {
      googleAccountConnected: true,
      googleAccessToken: nextCreds.access_token ?? user.googleAccessToken,
      googleRefreshToken: nextCreds.refresh_token ?? user.googleRefreshToken,
      googleTokenExpiresAt:
        typeof nextCreds.expiry_date === "number" ? new Date(nextCreds.expiry_date) : user.googleTokenExpiresAt,
    },
  });
}

// Normalizes Gmail/Calendar API errors into messages the UI can show
// directly, and flags the account as disconnected on an auth failure.
async function throwGoogleApiError(err: unknown, userId: string, action: string): Promise<never> {
  const status = parseGoogleErrorStatus(err);
  const reason = parseGoogleErrorReason(err);
  if (status === 429 || reason === "rateLimitExceeded" || reason === "userRateLimitExceeded") {
    throw new GoogleApiError(`Google ${action} rate limit reached. Please retry in a few minutes.`);
  }
  if (status === 401 || reason === "authError") {
    await prisma.user.update({ where: { id: userId }, data: { googleAccountConnected: false } });
    throw new GoogleApiError("Google authentication expired. Sign out and sign back in to reconnect.");
  }
  // Distinct from a scope problem: the underlying API just isn't turned on
  // for this Google Cloud project. Re-authing does nothing here — it's a
  // one-time console.cloud.google.com setup step, so say that instead of
  // sending the user in a sign-out/sign-in loop that can't fix it.
  if (reason === "accessNotConfigured") {
    throw new GoogleApiError(
      `${action} failed because the underlying Google API isn't enabled for this project yet. ` +
        "Enable it in the Google Cloud Console (APIs & Services → Library), then retry in a minute or two.",
    );
  }
  if (status === 403 || reason === "insufficientPermissions") {
    throw new GoogleApiError(
      `Missing permission for ${action}. Sign out and sign back in with Google, and accept all requested scopes.`,
    );
  }
  throw err instanceof Error ? err : new Error(`Google ${action} failed.`);
}

export async function mockSendEmail(params: {
  userId?: string;
  fromUserEmail: string;
  to: string;
  subject: string;
  body: string;
}): Promise<MockSendEmailResult> {
  const { oauth2, user } = await getGoogleClientForUser({ userId: params.userId, fromUserEmail: params.fromUserEmail });
  const gmail = google.gmail({ version: "v1", auth: oauth2 });

  const rawMessage = [
    `From: ${params.fromUserEmail}`,
    `To: ${params.to}`,
    `Subject: ${params.subject}`,
    "Content-Type: text/plain; charset=UTF-8",
    "MIME-Version: 1.0",
    "",
    params.body,
  ].join("\r\n");

  try {
    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: encodeEmailBody(rawMessage) },
    });
  } catch (err) {
    await throwGoogleApiError(err, user.id, "Gmail send");
  }

  await persistGoogleTokens(oauth2, user);
  return { sentAt: new Date(), bounced: false };
}

export interface MockCalendarEventResult {
  calendarEventId: string;
}

export async function mockCreateCalendarEvent(params: {
  userId?: string;
  organizerEmail: string;
  attendeeEmail?: string | null;
  subject: string;
  start: Date;
  durationMinutes: number;
}): Promise<MockCalendarEventResult> {
  const { oauth2, user } = await getGoogleClientForUser({ userId: params.userId, fromUserEmail: params.organizerEmail });
  const calendar = google.calendar({ version: "v3", auth: oauth2 });
  const end = new Date(params.start.getTime() + params.durationMinutes * 60_000);

  let eventId: string | null | undefined;
  try {
    const res = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary: params.subject,
        start: { dateTime: params.start.toISOString() },
        end: { dateTime: end.toISOString() },
        attendees: params.attendeeEmail ? [{ email: params.attendeeEmail }] : undefined,
      },
    });
    eventId = res.data.id;
  } catch (err) {
    await throwGoogleApiError(err, user.id, "Calendar event creation");
  }

  await persistGoogleTokens(oauth2, user);
  return { calendarEventId: eventId ?? "" };
}

export interface GoogleCalendarEventView {
  id: string;
  summary: string;
  start: string;
  end: string;
  htmlLink: string | null;
}

export async function listCalendarEvents(params: {
  userId: string;
  timeMin: Date;
  timeMax: Date;
}): Promise<GoogleCalendarEventView[]> {
  const { oauth2, user } = await getGoogleClientForUser({ userId: params.userId });
  const calendar = google.calendar({ version: "v3", auth: oauth2 });

  let items: calendar_v3.Schema$Event[] = [];
  try {
    const res = await calendar.events.list({
      calendarId: "primary",
      timeMin: params.timeMin.toISOString(),
      timeMax: params.timeMax.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
      maxResults: 250,
    });
    items = res.data.items ?? [];
  } catch (err) {
    await throwGoogleApiError(err, user.id, "Calendar read");
  }

  await persistGoogleTokens(oauth2, user);

  return items
    .filter((e) => e.id && (e.start?.dateTime || e.start?.date))
    .map((e) => ({
      id: e.id!,
      summary: e.summary ?? "(No title)",
      start: e.start!.dateTime ?? e.start!.date!,
      end: e.end?.dateTime ?? e.end?.date ?? e.start!.dateTime ?? e.start!.date!,
      htmlLink: e.htmlLink ?? null,
    }));
}
