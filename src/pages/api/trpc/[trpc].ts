import { app } from "../../../backend/routers/main";
import { createContext } from "../../../backend/context";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export default createNextApiHandler({
  router: app,
  createContext: createContext,
});
