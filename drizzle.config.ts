import { env } from "@/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema",
  driver: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
  out: "./drizzle",
} satisfies Config;
