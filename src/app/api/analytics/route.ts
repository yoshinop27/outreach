import { NextResponse } from "next/server";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { getAnalytics } from "@/lib/analytics";

function parseDays(value: string | null): number {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return 30;
  return Math.min(n, 365);
}

export async function GET(req: Request) {
  try {
    const user = await requireSessionUser();
    const { searchParams } = new URL(req.url);
    const days = parseDays(searchParams.get("days"));
    const result = await getAnalytics(user.id, days);
    return NextResponse.json(result);
  } catch (err) {
    return apiErrorResponse(err);
  }
}
