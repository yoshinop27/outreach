import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse } from "@/lib/api-helpers";

export async function GET() {
  try {
    const sessionUser = await requireSessionUser();
    const user = await prisma.user.findUniqueOrThrow({ where: { id: sessionUser.id } });
    return NextResponse.json({
      user: {
        email: user.email,
        displayName: user.displayName,
        dailySendCapCurrent: user.dailySendCapCurrent,
        apolloApiKey: user.apolloApiKey,
        outlookAccountConnected: user.outlookAccountConnected,
      },
    });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const updateSchema = z.object({
  dailySendCapCurrent: z.number().int().min(0).max(500).optional(),
  apolloApiKey: z.string().optional().nullable(),
  outlookAccountConnected: z.boolean().optional(),
});

export async function PATCH(req: Request) {
  try {
    const sessionUser = await requireSessionUser();
    const body = updateSchema.parse(await req.json());
    const user = await prisma.user.update({
      where: { id: sessionUser.id },
      data: body,
    });
    return NextResponse.json({
      user: {
        email: user.email,
        displayName: user.displayName,
        dailySendCapCurrent: user.dailySendCapCurrent,
        apolloApiKey: user.apolloApiKey,
        outlookAccountConnected: user.outlookAccountConnected,
      },
    });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
