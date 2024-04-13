import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import emailRoutes from "./routes/email.routes.js";
import smsRoutes from './routes/sms.routes.js'

const app = express();

const PORT_APP = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "email_sms";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/static", express.static(`${process.cwd()}/public`));
app.use(`/api/email`, emailRoutes);
app.use("/api/sms", smsRoutes);

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`api up and runing on port ${PORT_APP}`);
});
