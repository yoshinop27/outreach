import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { serializeStringArray } from "@/lib/types";

export async function GET() {
  try {
    const user = await requireSessionUser();
    const items = await prisma.watchlistItem.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { contacts: true } } },
    });
    return NextResponse.json({ items });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const createSchema = z.object({
  companyName: z.string().min(1),
  companyDomain: z.string().optional().nullable(),
  targetTitles: z.array(z.string()).default([]),
  location: z.string().optional().nullable(),
  seniority: z.array(z.string()).default([]),
});

export async function POST(req: Request) {
  try {
    const user = await requireSessionUser();
    const body = createSchema.parse(await req.json());
    const item = await prisma.watchlistItem.create({
      data: {
        userId: user.id,
        companyName: body.companyName,
        companyDomain: body.companyDomain,
        targetTitles: serializeStringArray(body.targetTitles),
        location: body.location,
        seniority: serializeStringArray(body.seniority),
      },
    });
    return NextResponse.json({ item }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
