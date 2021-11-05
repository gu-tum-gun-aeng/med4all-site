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
  router.redirect("/otcresearch", "https://form.typeform.com/to/v3lCPFrj");

  router.get("/research/:id/:longform/:day", (context) => {
    const toRedirect =
      `https://form.typeform.com/to/aiBuprQ7#id_card=${context.params.id}&long_form=${context.params.longform}&day=${context.params.day}`;

    context.response.redirect(new URL(toRedirect));
  });
}

export default router;
