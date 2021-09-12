import { superdeno } from "../../deps.ts";
import app from "../../src/app.ts";

Deno.test("when call /healthz, it should return 200", async () => {
  await superdeno(app.handle.bind(app))
    .get("/healthz")
    .expect(200);
});

Deno.test("when call /atk-report, it should return 302 and redirect to typeform", async () => {
  await superdeno(app.handle.bind(app))
    .get("/atk-report")
    .expect(302)
    .expect("location", "https://form.typeform.com/to/NifmjUcB");
});
