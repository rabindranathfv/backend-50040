const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const displayRoutes = require("express-routemap");
const sessionRoutes = require("./routes/session.routes");
const { faker } = require("@faker-js/faker");

const app = express();

faker.locale = "es";

const PORT = 5000;
// const DB_HOST = "localhost";
const DB_HOST = "mongo_db_after8";
const DB_PORT = 27017;
const DB_NAME = "mongoDBAfter8";

const MONGO_URL =
  process.env.MONGO_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

console.log("🚀 ~ file: app.js:19 ~ MONGO_URL:***********", MONGO_URL);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:26 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:29 ~ err:", err);
  });

app.use("/api/session", sessionRoutes);

app.use("/api/test/user", (req, res) => {
  let user = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  console.log("🚀 ~ file: app.js:44 ~ app.use ~ user:", user);

  return res.send(user);
});

app.use("/api/alive", (req, res) => {
  return res.json({ message: `alive`, body: req.body });
});

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT}, env: ${process.env.NODE_ENV}`);
});
