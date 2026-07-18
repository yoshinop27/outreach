import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { CalendarClient } from "./CalendarClient";

export default async function CalendarPage({
  searchParams,
}: {
  searchParams: { contactId?: string };
}) {
  const session = await getSession();
  const userId = session!.user.id;

  const [coffeeChats, eligibleContacts] = await Promise.all([
    prisma.coffeeChat.findMany({
      where: { contact: { watchlistItem: { userId } } },
      orderBy: { scheduledAt: "asc" },
      include: { contact: { select: { fullName: true, companyName: true, title: true } } },
    }),
    prisma.contact.findMany({
      where: {
        watchlistItem: { userId },
        status: { in: ["sent", "booked"] },
      },
      select: { id: true, fullName: true, companyName: true },
    }),
  ]);

  const chats = coffeeChats.map((c) => ({
    id: c.id,
    scheduledAt: c.scheduledAt.toISOString(),
    durationMinutes: c.durationMinutes,
    notes: c.notes,
    outcome: c.outcome,
    contactName: c.contact.fullName,
    companyName: c.contact.companyName,
  }));

  return (
    <CalendarClient
      initialChats={chats}
      eligibleContacts={eligibleContacts}
      preselectedContactId={searchParams.contactId ?? null}
    />
  );
}
