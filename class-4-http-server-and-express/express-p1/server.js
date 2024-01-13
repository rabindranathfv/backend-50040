const express = require("express");
const users = require("./users.json");

const PORT = 6500;

const app = express();

const genedersAllow = ["f", "m"];

app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
  res.send(`API ALIVE ${PORT}!!!!`);
});

app.get("/saludar/:nombre/:apellido/:square", (req, res) => {
  console.log("Parametros en el request", req.params);
  const { nombre, apellido, square } = req.params; // req.params.nombre, req.params.apellido y req.params.square
  res.send(`API ALIVE SAYING HELLO ${nombre} ${apellido} ${square}!!!!`);
});

app.get("/bienvenida", (req, res) => {
  res.send("<h1>HOLA SOY UNA PAGINA WEB<h1>");
});

//localhost:6500/usuario?sexo=masculino&edad=20&color=moreno
/* <nombre variable>=<value> */

app.get("/usuarios", (req, res) => {
  console.log("QUERY PARAMS", req.query);
  const { sexo, edad, color, hijos = "no" } = req.query;
  console.log("🚀 ~ http:app.get ~ hijos:", hijos);
  const usersList = users.usuarios;

  if (
    !sexo ||
    !genedersAllow.includes((!sexo ? "" : sexo).toLocaleLowerCase())
  ) {
    return res.json({
      message: "respondiendo un usuario",
      users: usersList,
    });
  }

  const usersFilter = usersList.filter(
    (u) => u.genero === sexo.toLocaleLowerCase()
  );
  return res.json({
    message: "respondiendo un usuario",
    users: usersFilter,
    sexo,
    edad,
    color,
    hijos,
  });
});

app.listen(PORT, () => {
  console.log("SERVER UP AND RUNING");
});
