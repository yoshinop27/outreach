// Manual, single-prospect send for the Vivvy Pie sponsorship panel — modeled
// directly on sendEmailToContact in outreach.ts, but targets a company's own
// email address (SponsorProspect.companyEmail) rather than an individual
// Contact, and uses the separate SponsorTemplate library.

import { prisma } from "@/lib/prisma";
import { mockSendEmail } from "@/lib/mock-google";
import { renderTemplate } from "@/lib/types";
import { NotFoundError, BadRequestError } from "@/lib/api-helpers";

export async function sendEmailToSponsorProspect(prospectId: string, userId: string) {
  const prospect = await prisma.sponsorProspect.findFirst({ where: { id: prospectId, userId } });
  if (!prospect) throw new NotFoundError();
  if (!prospect.companyEmail) {
    throw new BadRequestError("Add a company email before sending.");
  }

  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
  const template = await prisma.sponsorTemplate.findFirst({ where: { userId, isActive: true } });
  if (!template) {
    throw new BadRequestError("No active sponsor template. Add one above.");
  }

  const ctx = { company: prospect.companyName };
  const subject = renderTemplate(template.subject ?? "", ctx);
  const body = renderTemplate(template.body, ctx);
  const result = await mockSendEmail({
    userId: user.id,
    fromUserEmail: user.email,
    to: prospect.companyEmail,
    subject,
    body,
  });

  return prisma.sponsorProspect.update({
    where: { id: prospectId },
    data: { status: "sent", dateSent: result.sentAt },
  });
}
