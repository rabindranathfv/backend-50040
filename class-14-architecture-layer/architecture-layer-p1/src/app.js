const express = require("express");
const mongoose = require("mongoose");
const studentsRoutes = require("./routes/students.routes");

const app = express();
const PORT = 5000;
const API_PREFIX = "api";
const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "mongoStudentDBLayerArchitecture";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then((conn) => {
    console.log("🚀 ~ file: app.js:20 ~ CONNECTED TO MONGO, WELCOME!!!");
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js:22 ~ .then ~ ERROR CONNECTION!!!", err);
  });

// /api/students
app.use(`/${API_PREFIX}/students`, studentsRoutes);

app.listen(PORT, () => {
  console.log(`UP AND RUNNING ON PORT: ${PORT}`);
});
