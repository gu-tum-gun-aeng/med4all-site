import { Router, Status } from "../../deps.ts";
import type { RouterContext } from "../../deps.ts";

const router = new Router();
setRoute(router);

function setRoute(router: Router) {
  router.get(
    "/healthz",
    ({ response }: RouterContext) => {
      response.status = Status.OK;
      response.body = "Ok";
    },
  );

  router.redirect("/atk-report", "https://form.typeform.com/to/NifmjUcB");
}

export default router;
