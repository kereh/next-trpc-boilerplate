import { router, procedure } from "../init";

export const app = router({
  example: procedure.query(() => {
    return { msg: "this message come from backend" };
  }),
});

export type App = typeof app;
