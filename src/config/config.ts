import { dotenv, DotenvConfig } from "../../deps.ts";

const env: string = Deno.env.toObject().ENV;
const dotenvConfig = createDotenvFor(env);

const config: ({
  env: string;
  appName: string;
  logAppName: string;
  host: string;
  port: number;
  protocol: string;
}) = {
  env,
  appName: dotenvConfig.APP_NAME,
  logAppName: dotenvConfig.LOG_APP_NAME,
  host: dotenvConfig.HOST,
  port: +dotenvConfig.PORT,
  protocol: dotenvConfig.PROTOCOL,
};

function createDotenvFor(targetEnv: string): DotenvConfig {
  const envPath: string = `.env/.env.${targetEnv}`.toString();

  return dotenv({
    path: envPath,
  });
}

export default config;
