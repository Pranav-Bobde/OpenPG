import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    KINDE_CLIENT_ID: z.string().min(1),
    KINDE_CLIENT_SECRET: z.string().min(1),
    KINDE_ISSUER_URL: z.string().url(),
    KINDE_SITE_URL: z.string().url(),
    KINDE_POST_LOGOUT_REDIRECT_URL: z.string().url(),
    KINDE_POST_LOGIN_REDIRECT_URL: z.string().url(),
    DATABASE_URL: z.string().url(),
    DATABASE_AUTH_TOKEN: z.string().min(1),
    AZURE_OPENAI_API_KEY: z.string().min(1),
    AZURE_OPENAI_BASE_URL: z.string().min(1),
    AZURE_OPENAI_API_VERSION: z.string().min(1),
    AZURE_OPENAI_MODEL: z.string().min(1),
  },
  experimental__runtimeEnv: {},
});
