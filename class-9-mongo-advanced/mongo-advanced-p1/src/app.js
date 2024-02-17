const express = require("express");
const mongoose = require("mongoose");
const studentsRoutes = require("./routes/students.routes");
const coursesRoutes = require("./routes/courses.routes");

const app = express();
const PORT = 5000;
const API_PREFIX = "api";
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoStudentDB";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/static`, express.static(__dirname + "/public"));

const connection = mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:20 ~ CONNECTED TO MONGO, WELCOME!!!");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:22 ~ .then ~ ERROR CONNECTION!!!", err);
  });
// USERS ROUTES
// /api/students
app.use(`/${API_PREFIX}/v1/students`, studentsRoutes);
app.use(`/${API_PREFIX}/v1/courses`, coursesRoutes);

app.listen(PORT, () => {
  console.log(`UP AND RUNNING ON PORT: ${PORT}`);
});
