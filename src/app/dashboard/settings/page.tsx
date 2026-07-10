import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { SettingsClient } from "./SettingsClient";

export default async function SettingsPage() {
  const session = await getSession();
  const user = await prisma.user.findUniqueOrThrow({ where: { id: session!.user.id } });

  return (
    <SettingsClient
      initial={{
        email: user.email,
        displayName: user.displayName,
        dailySendCapCurrent: user.dailySendCapCurrent,
        apolloApiKey: user.apolloApiKey,
        outlookAccountConnected: user.outlookAccountConnected,
      }}
    />
  );
}
