import { router, procedure } from "../init";

export const app = router({
  example: procedure.query(() => {
    return { msg: "Hi from tRPC" };
  }),
  withPrisma: procedure.query(async ({ ctx }) => {
    const count = await ctx.prisma.example.count();
    return {
      count
    };
  }),
});

export type App = typeof app;
