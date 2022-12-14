import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

// import prisma
import { prisma } from "../utils/prisma";

export async function createContext(opts: CreateNextContextOptions) {
  return {
    req: opts.req,
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
