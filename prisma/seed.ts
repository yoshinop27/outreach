import { PrismaClient } from "@prisma/client";
import { serializeStringArray } from "../src/lib/types";

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? "you@example.com";

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      displayName: "Admin",
      role: "admin",
      status: "active",
      dailySendCapCurrent: 20,
    },
  });

  console.log(`Seeded admin user: ${admin.email} (id ${admin.id})`);

  const existingWatchlist = await prisma.watchlistItem.findFirst({
    where: { userId: admin.id },
  });

  if (!existingWatchlist) {
    await prisma.watchlistItem.create({
      data: {
        userId: admin.id,
        companyName: "Acme Corp",
        companyDomain: "acme.com",
        targetTitles: serializeStringArray(["Software Engineer", "Technical Recruiter"]),
        location: "Remote",
        jobType: "full_time",
        seniority: serializeStringArray(["Mid", "Senior"]),
        active: true,
      },
    });
    await prisma.watchlistItem.create({
      data: {
        userId: admin.id,
        companyName: "Globex",
        companyDomain: "globex.com",
        targetTitles: serializeStringArray(["Recruiter"]),
        location: "New York, NY",
        jobType: "full_time",
        active: true,
      },
    });
    console.log("Seeded sample watchlist items.");
  }

  const existingTemplates = await prisma.template.findFirst({ where: { userId: admin.id } });
  if (!existingTemplates) {
    await prisma.template.create({
      data: {
        userId: admin.id,
        channel: "email",
        name: "Intro cold email",
        subject: "Quick question about {{company}}",
        body:
          "Hi {{first_name}},\n\n" +
          "I noticed you're a {{title}} at {{company}} — I'm exploring opportunities there " +
          "and would love a quick 15-minute chat if you're open to it.\n\n" +
          "Thanks,\n{{sender_name}}",
        isActive: true,
      },
    });
    await prisma.template.create({
      data: {
        userId: admin.id,
        channel: "linkedin",
        name: "LinkedIn connection note",
        subject: null,
        body:
          "Hi {{first_name}} — I'm interested in {{company}} and saw you're a {{title}} there. " +
          "Would love to connect and hear about your experience.",
        isActive: true,
      },
    });
    console.log("Seeded sample templates.");
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
