import express from "express";
import cookieParser from "cookie-parser";
import displayRoutes from "express-routemap";
import { dynamicLogger } from "./utils/logger.js";
// import { useLogger } from "./utils/logger-basic.js";
const app = express();

const PORT_APP = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use(useLogger);
app.use(dynamicLogger);

app.get("/:input", (req, res) => {
  const { input } = req.params;
  req.logger.info("Petición GET recibida");
  req.logger.info({ user: `rabin_USER`, input });
  res.send("¡Hola mundo!");
});

app.get("/logger", (req, res) => {
  return res.send("Loggers");
});

app.get("/warn", (req, res) => {
  req.logger.warn("Petición GET recibida en WARM 2");
  req.logger.warn("Petición GET recibida en WARM 2 NEW");
  res.send("¡Hola mundo WARN!");
});

app.get("/errors", (req, res) => {
  try {
    throw new Error(`EXPLOTO NUESTRA API`);
  } catch (error) {
    req.logger.error(`Peticion con error ${error.message}`);
    return res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}, enviroment: ${process.env.NODE_ENV}`);
});
