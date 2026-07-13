// Stand-in for the Gmail API (`users.messages.send`) and Google Calendar API
// (`events.insert`) (see spec Section 4, items 5 and 7). Real integration
// would call the Google APIs using the user's connected Google OAuth token;
// these functions keep the same call shape so the rest of the app (outreach
// dispatch, coffee-chat scheduling) doesn't need to change when that's wired
// up.

export interface MockSendEmailResult {
  sentAt: Date;
  bounced: boolean;
}

export async function mockSendEmail(_params: {
  fromUserEmail: string;
  to: string;
  subject: string;
  body: string;
}): Promise<MockSendEmailResult> {
  const bounced = Math.random() < 0.05;
  return { sentAt: new Date(), bounced };
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
