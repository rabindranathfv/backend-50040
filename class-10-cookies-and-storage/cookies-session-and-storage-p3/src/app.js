const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const handlebars = require("express-handlebars");
const session = require("express-session");
const displayRoutes = require("express-routemap");
const sessionRoutes = require("./routes/session.routes");
const mongoStore = require("connect-mongo");
const authMdw = require("./middleware/auth.middlware");

const app = express();

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoSessionDB";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const SECRET_SESSION = "secretSession";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    store: mongoStore.create({
      mongoUrl: MONGO_URL,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 5, // tiempo de vida de la session
    }),
    secret: SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
  })
);

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

mongoose
  .connect(MONGO_URL)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:46 ~ CONECTADO!:");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:49 ~ err:", err);
  });

app.use("/api/session/", sessionRoutes);
app.use("/api/private/", authMdw, (req, res) => {
  const username = req.session.user;
  console.log("🚀 ~ file: app.js:56 ~ app.use ~ username:", username);
  return res.json({
    message: `route protected, you are welcome user ${username}`,
  });
});

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT}`);
});
