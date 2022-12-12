import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import type { App } from "../backend/routers/main";

function url() {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<App>({
  config({ ctx }) {
    return {
      links: [
        httpBatchLink({
          url: `${url()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
