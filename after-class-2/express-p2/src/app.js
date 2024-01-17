const express = require("express");
const animalsRoutes = require("./routes/animals.routes");
const palabrasRoutes = require("./routes/palabras.routes");

const PORT = 3000;
const API_BASE_PATH = "/api";

const app = express();

app.use(express.urlencoded({ extends: true }));
app.use(express.json()); // middleware global

// DEFINICION DE RUTAS
// /api/animals
app.use(`${API_BASE_PATH}/animals`, animalsRoutes);

// api
app.use(`${API_BASE_PATH}`, palabrasRoutes);

app.listen(PORT, () => {
  console.log(`API RUNNING, PORT: ${PORT}`);
});
