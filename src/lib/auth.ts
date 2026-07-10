import type { NextAuthOptions, Profile } from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import type { UserRole, UserStatus } from "@/lib/types";

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Invite-only gate shared by every provider: a user can only ever sign in if
 * an admin already created a `User` row for their email (see the admin
 * invite endpoint). This looks up that row, rejects disabled accounts, and
 * flips a first-time `invited` account to `active`.
 */
async function syncUserOnSignIn(
  email: string,
  entraObjectId?: string | null,
): Promise<{ id: string; role: UserRole; status: UserStatus } | null> {
  const existing = await prisma.user.findUnique({ where: { email: normalizeEmail(email) } });
  if (!existing) return null;
  if (existing.status === "disabled") return null;

  const updated = await prisma.user.update({
    where: { id: existing.id },
    data: {
      status: existing.status === "invited" ? "active" : existing.status,
      lastLoginAt: new Date(),
      ...(entraObjectId ? { entraObjectId } : {}),
    },
  });

  return { id: updated.id, role: updated.role as UserRole, status: updated.status as UserStatus };
}

const providers: NextAuthOptions["providers"] = [];

const hasAzureAdConfig =
  !!process.env.AZURE_AD_CLIENT_ID &&
  !!process.env.AZURE_AD_CLIENT_SECRET &&
  !!process.env.AZURE_AD_TENANT_ID;

if (hasAzureAdConfig) {
  providers.push(
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  );
}

// Local-development-only escape hatch so the rest of the app can be built and
// tested without a real Azure AD app registration. Real login still goes
// through Entra ID above; this just bypasses OAuth for whichever seeded user
// you type in, and only exists when explicitly enabled.
if (process.env.ENABLE_DEV_LOGIN === "true") {
  providers.push(
    CredentialsProvider({
      id: "dev-login",
      name: "Dev Login (local only)",
      credentials: {
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        if (!email) return null;
        const user = await prisma.user.findUnique({ where: { email: normalizeEmail(email) } });
        if (!user || user.status === "disabled") return null;
        return { id: user.id, email: user.email, name: user.displayName ?? user.email };
      },
    }),
  );
}

export const authOptions: NextAuthOptions = {
  providers,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!account) return false;

      if (account.provider === "azure-ad") {
        const azureProfile = profile as (Profile & { oid?: string }) | undefined;
        const email = user.email ?? azureProfile?.email;
        if (!email) return false;
        const synced = await syncUserOnSignIn(email, azureProfile?.oid ?? account.providerAccountId);
        return synced !== null;
      }

      if (account.provider === "dev-login") {
        if (!user.email) return false;
        const synced = await syncUserOnSignIn(user.email);
        return synced !== null;
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        const dbUser = await prisma.user.findUnique({ where: { email: normalizeEmail(user.email) } });
        if (dbUser) {
          token.uid = dbUser.id;
          token.role = dbUser.role as UserRole;
          token.status = dbUser.status as UserStatus;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.uid ?? "";
        session.user.role = token.role ?? "user";
        session.user.status = token.status ?? "active";
      }
      return session;
    },
  },
};
