import { getServerSession, type Session } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function getSession(): Promise<Session | null> {
  return getServerSession(authOptions);
}

export class UnauthorizedError extends Error {
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  constructor(message = "Forbidden") {
    super(message);
    this.name = "ForbiddenError";
  }
}

/** Throws in API route handlers when there's no signed-in, active user. */
export async function requireSessionUser() {
  const session = await getSession();
  if (!session?.user?.id) throw new UnauthorizedError();
  return session.user;
}

/** Throws unless the signed-in user has the `admin` role. */
export async function requireAdminUser() {
  const user = await requireSessionUser();
  if (user.role !== "admin") throw new ForbiddenError();
  return user;
}
