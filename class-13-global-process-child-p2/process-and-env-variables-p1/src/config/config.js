const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

console.log(`RUTA DE ENV**** .env.${process.env.NODE_ENV || "development"}`);

const { JWT_EXPIRE_IN, PORT, DB_HOST, DB_PORT, DB_NAME, NODE_ENV } =
  process.env;

module.exports = {
  JWT_EXPIRE_IN,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  NODE_ENV,
};
