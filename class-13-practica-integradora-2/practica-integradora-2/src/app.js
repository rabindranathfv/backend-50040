const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const displayRoutes = require("express-routemap");
const passport = require("passport");

// Internal imports
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const notesRoutes = require("./routes/notes.routes");
const initializePassport = require("./config/pasport.config");

const app = express();

const PORT = 5000;
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoPracticaIntegradora2";

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// TODO: add passport function with strategies
initializePassport();
app.use(passport.initialize());

// Base Routes
app.use("/api/authentication", authRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/notes/", notesRoutes);

mongoose
  .connect(MONGO_URL)
  .then((con) => {
    console.log("🚀 ~ file: app.js:25 ~ mongoose.connect - OK");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:30 ~ err:", err);
  });

app.listen(PORT, () => {
  displayRoutes(app);
  console.log("🚀 ~ file: app.js:35 ~ app.listen ~ PORT:", PORT);
});
