import { defineConfig } from "drizzle-kit";
import { connectionString } from "./db/index";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db",

  dbCredentials: {
    url: connectionString,
  }
});