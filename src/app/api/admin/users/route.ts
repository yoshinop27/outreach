import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";
import { normalizeEmail } from "@/lib/auth";
import { USER_ROLES } from "@/lib/types";

export async function GET() {
  try {
    await requireAdminUser();
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        email: true,
        displayName: true,
        role: true,
        status: true,
        dailySendCapCurrent: true,
        outlookAccountConnected: true,
        createdAt: true,
        lastLoginAt: true,
        _count: { select: { watchlistItems: true } },
      },
    });
    return NextResponse.json({ users });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const inviteSchema = z.object({
  email: z.string().email(),
  displayName: z.string().optional().nullable(),
  role: z.enum(USER_ROLES).default("user"),
});

export async function POST(req: Request) {
  try {
    const admin = await requireAdminUser();
    const body = inviteSchema.parse(await req.json());
    const user = await prisma.user.create({
      data: {
        email: normalizeEmail(body.email),
        displayName: body.displayName,
        role: body.role,
        status: "invited",
        invitedByUserId: admin.id,
      },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
