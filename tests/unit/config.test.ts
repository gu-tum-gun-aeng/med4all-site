import { assertEquals } from "../../deps.ts";
import config from "../../src/config/config.ts";

Deno.test("config should be able to get related config from env file when called", () => {
    assertEquals(config.appName, "med4all-site-test");
    assertEquals(config.protocol, "http");
    assertEquals(config.host, "localhost");
    assertEquals(config.port, 8000);
});