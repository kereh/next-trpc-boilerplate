import {app} from "../../../backend/routers/main"
import {createNextApiHandler} from "@trpc/server/adapters/next"

export default createNextApiHandler({
  router: app,
  createContext: () => ({})
})
