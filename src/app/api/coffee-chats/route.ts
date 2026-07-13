import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSessionUser } from "@/lib/session";
import { apiErrorResponse, NotFoundError } from "@/lib/api-helpers";
import { mockCreateCalendarEvent } from "@/lib/mock-google";

export async function GET() {
  try {
    const user = await requireSessionUser();
    const coffeeChats = await prisma.coffeeChat.findMany({
      where: { contact: { watchlistItem: { userId: user.id } } },
      orderBy: { scheduledAt: "asc" },
      include: { contact: { select: { fullName: true, companyName: true, title: true, email: true } } },
    });
    return NextResponse.json({ coffeeChats });
  } catch (err) {
    return apiErrorResponse(err);
  }
}

const createSchema = z.object({
  contactId: z.string(),
  scheduledAt: z.string().datetime().or(z.string().min(1)),
  durationMinutes: z.number().int().positive().default(30),
  notes: z.string().optional().nullable(),
});

export async function POST(req: Request) {
  try {
    const user = await requireSessionUser();
    const body = createSchema.parse(await req.json());

    const contact = await prisma.contact.findFirst({
      where: { id: body.contactId, watchlistItem: { userId: user.id } },
    });
    if (!contact) throw new NotFoundError();

    const scheduledAt = new Date(body.scheduledAt);
    const { calendarEventId } = await mockCreateCalendarEvent({
      organizerEmail: user.email ?? "",
      attendeeEmail: contact.email,
      subject: `Coffee chat with ${contact.fullName}`,
      start: scheduledAt,
      durationMinutes: body.durationMinutes,
    });

    const [coffeeChat] = await prisma.$transaction([
      prisma.coffeeChat.create({
        data: {
          contactId: contact.id,
          scheduledAt,
          durationMinutes: body.durationMinutes,
          notes: body.notes,
          calendarEventId,
        },
      }),
      prisma.contact.update({
        where: { id: contact.id },
        data: { status: "meeting_booked", lastStatusChangeAt: new Date() },
      }),
    ]);

    return NextResponse.json({ coffeeChat }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err);
  }
}
