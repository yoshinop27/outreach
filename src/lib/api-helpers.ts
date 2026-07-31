import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { UnauthorizedError, ForbiddenError } from "@/lib/session";
import { GoogleApiError } from "@/lib/mock-google";
import { ApolloApiError } from "@/lib/discover_contacts";

export function apiErrorResponse(err: unknown): NextResponse {
  if (err instanceof UnauthorizedError) {
    return NextResponse.json({ error: err.message }, { status: 401 });
  }
  if (err instanceof ForbiddenError) {
    return NextResponse.json({ error: err.message }, { status: 403 });
  }
  if (err instanceof ZodError) {
    return NextResponse.json({ error: "Invalid input", issues: err.issues }, { status: 400 });
  }
  if (err instanceof Error && err.message === "NOT_FOUND") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (err instanceof BadRequestError) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2002") {
    return NextResponse.json({ error: "A record with that value already exists" }, { status: 409 });
  }
  if (err instanceof GoogleApiError || err instanceof ApolloApiError) {
    return NextResponse.json({ error: err.message }, { status: 502 });
  }
  console.error(err);
  return NextResponse.json({ error: "Internal server error" }, { status: 500 });
}

export class NotFoundError extends Error {
  constructor() {
    super("NOT_FOUND");
  }
}

// User-facing 400s for well-understood validation failures (missing email,
// no active template) that aren't worth a Zod schema — thrown from lib code
// and translated here instead of collapsing to a generic 500.
export class BadRequestError extends Error {}
