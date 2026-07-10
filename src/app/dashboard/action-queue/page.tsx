import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { renderTemplate } from "@/lib/types";
import { ActionQueueClient } from "./ActionQueueClient";

export default async function ActionQueuePage() {
  const session = await getSession();
  const userId = session!.user.id;

  const [user, template, contacts] = await Promise.all([
    prisma.user.findUniqueOrThrow({ where: { id: userId } }),
    prisma.template.findFirst({ where: { userId, channel: "linkedin", isActive: true } }),
    prisma.contact.findMany({
      where: {
        status: "linkedin_manual_pending",
        watchlistItem: { userId },
        outreachEvents: {
          some: { channel: "linkedin", manualActionCompletedAt: null },
        },
      },
      orderBy: { lastStatusChangeAt: "asc" },
    }),
  ]);

  const items = contacts.map((c) => {
    const [firstName, ...rest] = c.fullName.trim().split(/\s+/);
    const note = template
      ? renderTemplate(template.body, {
          first_name: firstName,
          last_name: rest.join(" "),
          full_name: c.fullName,
          title: c.title ?? "",
          company: c.companyName,
          sender_name: user.displayName ?? user.email,
        })
      : null;
    return {
      id: c.id,
      fullName: c.fullName,
      title: c.title,
      companyName: c.companyName,
      linkedinUrl: c.linkedinUrl,
      note,
    };
  });

  return <ActionQueueClient initialItems={items} hasTemplate={!!template} />;
}
