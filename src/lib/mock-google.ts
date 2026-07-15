// Stand-in for the Gmail API (`users.messages.send`) and Google Calendar API
// (`events.insert`) (see spec Section 4, items 5 and 7). Real integration
// would call the Google APIs using the user's connected Google OAuth token;
// these functions keep the same call shape so the rest of the app (outreach
// dispatch, coffee-chat scheduling) doesn't need to change when that's wired
// up.

import { google } from "googleapis";
import { prisma } from "@/lib/prisma";

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

export async function mockSendEmail(params: {
  userId?: string;
  fromUserEmail: string;
  to: string;
  subject: string;
  body: string;
}): Promise<MockSendEmailResult> {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Google OAuth is not configured on the server.");
  }

  const user = await prisma.user.findFirst({
    where: params.userId ? { id: params.userId } : { email: params.fromUserEmail.toLowerCase() },
    select: {
      id: true,
      googleAccessToken: true,
      googleRefreshToken: true,
      googleTokenExpiresAt: true,
    },
  });

  if (!user) {
    throw new Error("Signed-in user record not found for Gmail send.");
  }
  if (!user.googleRefreshToken && !user.googleAccessToken) {
    await prisma.user.update({ where: { id: user.id }, data: { googleAccountConnected: false } });
    throw new Error("Google Gmail send is not connected. Sign out and sign back in with Google.");
  }

  const oauth2 = new google.auth.OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
  oauth2.setCredentials({
    access_token: user.googleAccessToken ?? undefined,
    refresh_token: user.googleRefreshToken ?? undefined,
    expiry_date: user.googleTokenExpiresAt?.getTime(),
  });

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
    const status = parseGoogleErrorStatus(err);
    const reason = parseGoogleErrorReason(err);
    if (status === 429 || reason === "rateLimitExceeded" || reason === "userRateLimitExceeded") {
      throw new Error("Gmail send rate limit reached. Please retry in a few minutes.");
    }
    if (status === 401 || reason === "authError") {
      await prisma.user.update({ where: { id: user.id }, data: { googleAccountConnected: false } });
      throw new Error("Google authentication expired. Sign out and sign back in to reconnect Gmail send.");
    }
    if (status === 403 || reason === "insufficientPermissions") {
      throw new Error("Missing Gmail send permission. Reconnect Google and grant gmail.send scope.");
    }
    throw err;
  }

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

  return { sentAt: new Date(), bounced: false };
}

export interface MockCalendarEventResult {
  calendarEventId: string;
}

export async function mockCreateCalendarEvent(_params: {
  organizerEmail: string;
  attendeeEmail?: string | null;
  subject: string;
  start: Date;
  durationMinutes: number;
}): Promise<MockCalendarEventResult> {
  return { calendarEventId: `mock-evt-${Math.random().toString(36).slice(2, 10)}` };
}
