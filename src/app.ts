import { Application, oakCors, Router } from "../deps.ts";
import configs from "./config/config.ts";

import router from "./routers/route.ts";

const app: Application = new Application();
app.use(oakCors());
await start(app);

async function start(app: Application) {
  setupRouter(app, router);
  await setupListener(
    app,
    configs.host,
    configs.port,
  );
}

function setupRouter(app: Application, router: Router) {
  app.use(router.routes());
  app.use(router.allowedMethods());
}

async function setupListener(
  app: Application,
  hostname: string,
  port: number,
) {
  if (import.meta.main) {
    await app.listen({ hostname, port });
  }
}

export default app;
