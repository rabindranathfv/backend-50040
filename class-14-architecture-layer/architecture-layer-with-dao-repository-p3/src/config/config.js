import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { NODE_ENV, PORT, PERSISTENCE, DB_HOST, DB_NAME, DB_PORT } =
  process.env;
