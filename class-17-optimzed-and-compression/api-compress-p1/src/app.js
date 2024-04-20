import express from "express";
import displayRoutes from "express-routemap";
import compression from "express-compression";
import cookieParser from "cookie-parser";

const app = express();

const PORT_APP = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  compression({
    brotli: { enabled: true, zlib: {} },
  })
);

// app.use(compression());

app.use("/api/long-str", (req, res) => {
  let baseStr = `Hola coders`;
  for (let index = 0; index < 10e5; index++) {
    baseStr += `hola Coders, contatenando string forever`;
  }

  return res.send(baseStr);
});

app.use("/api/alive", (req, res) => {
  return res.send(`api alive`);
});

app.listen(PORT_APP, () => {
  displayRoutes(app);
  console.log(`Listening on ${PORT_APP}`);
});
