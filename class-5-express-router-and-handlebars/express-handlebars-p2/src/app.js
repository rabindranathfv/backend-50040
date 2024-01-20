const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const usersRoutes = require("./routes/users.routes");
const petsRoutes = require("./routes/pets.routes");
const viewsRoutes = require("./routes/views.routes");

const app = express();
const PORT = 5000;
const API_PREFIX = "api";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "jose",
    lastName: "Espinoza",
    age: 26,
    phone: "5541231355",
    email: "jespinoza@correo.com",
  },
  {
    name: "Marisol",
    lastName: "gardel",
    age: 23,
    phone: "15431231355",
    email: "mgardel@correo.com",
  },
  {
    name: "leonel",
    lastName: "Velez",
    age: 28,
    phone: "4331234155",
    email: "lvelez@correo.com",
  },
  {
    name: "Carlos",
    lastName: "Costa",
    age: 18,
    phone: "1233315451",
    email: "ccosta@correo.com",
  },
  {
    name: "Valeria",
    lastName: "Duarte",
    age: 45,
    phone: "66521233",
    email: "vduarte@correo.com",
  },
];

// config handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", path.join(`${__dirname}/views`));
app.set("view engine", "handlebars");

app.use(`/static`, express.static(__dirname + "/public"));

// USERS ROUTES
// /api/users
app.use(`/${API_PREFIX}/users`, usersRoutes);

// PETS ROUTES
// /api/pets
app.use(`/${API_PREFIX}/pets`, petsRoutes);

// VIEWS ROUTES
app.use("/", viewsRoutes);

// views handlebars engine
app.get("/saludar", (req, res) => {
  const randomUser = Math.ceil(Math.random() * users.length);
  const userRender = users[randomUser];

  res.render("index", { name: userRender.name });
});

app.get("/user", (req, res) => {
  const randomUser = Math.ceil(Math.random() * users.length);
  const userRender = users[randomUser];
  console.log("🚀 ~ app.get ~ userRender:", userRender);

  res.render("users", { user: userRender });
});

app.listen(PORT, () => {
  console.log(`UP AND RUNNING ON PORT: ${PORT}`);
});
