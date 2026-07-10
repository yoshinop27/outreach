import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { InboxClient } from "./InboxClient";

export default async function InboxPage() {
  const session = await getSession();
  const contacts = await prisma.contact.findMany({
    where: { status: "replied", watchlistItem: { userId: session!.user.id } },
    orderBy: { lastStatusChangeAt: "asc" },
    include: { outreachEvents: { orderBy: { createdAt: "desc" }, take: 1 } },
  });

  const items = contacts.map((c) => ({
    id: c.id,
    fullName: c.fullName,
    title: c.title,
    companyName: c.companyName,
    email: c.email,
    channel: c.outreachEvents[0]?.channel ?? null,
    repliedAt: c.outreachEvents[0]?.repliedAt?.toISOString() ?? null,
  }));

  return <InboxClient initialItems={items} />;
}
