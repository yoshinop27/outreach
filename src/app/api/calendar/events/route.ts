import { NextResponse } from "next/server";
import { z } from "zod";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { listCalendarEvents } from "@/lib/mock-google";

const schema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
});

// Real Google Calendar events for the signed-in user, within [start, end) —
// used by the Calendar page's month grid, separate from this app's own
// CoffeeChat records.
export async function GET(req: Request) {
  try {
    const user = await requireSessionUser();
    const { searchParams } = new URL(req.url);
    const { start, end } = schema.parse({
      start: searchParams.get("start"),
      end: searchParams.get("end"),
    });
    const events = await listCalendarEvents({
      userId: user.id,
      timeMin: new Date(start),
      timeMax: new Date(end),
    });
    return NextResponse.json({ events });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
