import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import cors from "cors";
import usersRoutes from "./routes/user.routes.js";
import bussinesRoutes from "./routes/bussines.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import {
  DB_HOST,
  MODE,
  MONGO_URI,
  NODE_ENV,
  PERSISTENCE,
  PORT,
} from "./config/config.js";

const app = express();

const PORT_APP = Number(PORT) || 5000;
const DB_HOST_ENV = DB_HOST || "localhost";
const DB_PORT = 27017;
const DB_NAME = "MongoDBDockerizedKube";

const MONGO_URL =
  NODE_ENV === "production"
    ? `${MONGO_URI}`
    : `mongodb://${DB_HOST_ENV}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: `*`, // desde las IP Permitidas
    methods: ["GET", "PUT", "DELETE", "POST", "HEAD"],
  })
);

mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    console.log(
      `🚀 ~ file: app.js:45 ~ CONECT WITH MONGO URL: ${MONGO_URL} ****`
    );
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:49 ~ err:", err);
  });

app.use("/api/alive", (req, res) => {
  return res.json({ message: `API ALIVE....UPDATED` });
});
app.use("/api/users", usersRoutes);
app.use("/api/bussiness", bussinesRoutes);
app.use("/api/orders", ordersRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Runing enviroment ${NODE_ENV} and Listening on ${PORT_APP}`);
  console.log(`***** MODE: ${MODE}, ${PORT} ${PERSISTENCE} ******`);
});
