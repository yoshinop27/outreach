import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { LoginClient } from "./LoginClient";

const ERROR_MESSAGES: Record<string, string> = {
  AccessDenied:
    "That account hasn't been invited (or has been disabled). Ask an admin to invite you first.",
  Configuration: "Sign-in isn't configured correctly. Check the server's Google OAuth env vars.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const session = await getSession();
  if (session?.user) redirect("/dashboard");

  const hasGoogleConfig = !!process.env.GOOGLE_CLIENT_ID && !!process.env.GOOGLE_CLIENT_SECRET;

  const devLoginEnabled = process.env.ENABLE_DEV_LOGIN === "true";
  const devUsers = devLoginEnabled
    ? await prisma.user.findMany({
        select: { id: true, email: true, displayName: true, status: true },
        orderBy: { createdAt: "asc" },
      })
    : [];

  const errorMessage = searchParams.error
    ? ERROR_MESSAGES[searchParams.error] ?? "Sign-in failed. Please try again."
    : null;

  return (
    <LoginClient hasGoogleConfig={hasGoogleConfig} devUsers={devUsers} errorMessage={errorMessage} />
  );
}
