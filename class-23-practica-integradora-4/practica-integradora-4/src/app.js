import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import cors from "cors";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import {
  DB_HOST,
  MODE,
  MONGO_URI,
  NODE_ENV,
  PERSISTENCE,
  PORT,
} from "./config/config.js";
import { swaggerOpts } from "./config/swagger.config.js";
import booksRoutes from "./routes/book.routes.js";
import libraryRoutes from "./routes/library.routes.js";

const app = express();

const PORT_APP = Number(PORT) || 5000;
const DB_HOST_ENV = DB_HOST || "localhost";
const DB_PORT = 27017;
const DB_NAME = "MongoDBPractice";

export const MONGO_URL =
  NODE_ENV === "production"
    ? `${MONGO_URI}${DB_NAME}`
    : `mongodb://${DB_HOST_ENV}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "DELETE", "POST", "OPTIONS", "HEAD", "PATCH"],
  })
);

mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    console.log(`🚀 ~ file: app.js:35 ~ CONECT WITH MONGO URL`);
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:38 ~ err:", err);
  });

const specs = swaggerJSDoc(swaggerOpts);

// healt check
app.use("/api/alive", (req, res) => {
  return res.json({ message: `API ALIVE....` });
});
app.use("/api/books", booksRoutes);
app.use("/api/libraries", libraryRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Runing enviroment ${NODE_ENV} and Listening on ${PORT_APP}`);
  console.log(`***** MODE: ${MODE}, ${PORT} ${PERSISTENCE} ******`);
});
