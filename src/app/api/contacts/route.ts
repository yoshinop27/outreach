import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";

export async function GET(req: Request) {
  try {
    const user = await requireSessionUser();
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const contacts = await prisma.contact.findMany({
      where: {
        watchlistItem: { userId: user.id },
        ...(status ? { status } : {}),
      },
      orderBy: { lastStatusChangeAt: "desc" },
      include: {
        watchlistItem: { select: { id: true, companyName: true } },
        outreachEvents: { orderBy: { createdAt: "desc" }, take: 1 },
        coffeeChats: { orderBy: { scheduledAt: "desc" }, take: 1 },
      },
    });
    return NextResponse.json({ contacts });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
