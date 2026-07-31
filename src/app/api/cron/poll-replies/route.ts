import { NextResponse } from "next/server";
import { pollRepliesForAllUsers } from "@/lib/outreach";

// Scheduled by vercel.json every ~2 hours. Not session-scoped — Vercel Cron
// hits this with no signed-in user, so it checks every connected account in
// one pass (see pollRepliesForAllUsers). Locally, where cron never fires,
// trigger it by hand:
//   curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/poll-replies
export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const summary = await pollRepliesForAllUsers();
  return NextResponse.json({ summary });
}
