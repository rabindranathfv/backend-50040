const express = require("express");
const displayRoutes = require("express-routemap");
const handlebars = require("express-handlebars");
const { mongoDBconnection } = require("./db/mongo.config");

const API_VERSION = "v1";

class App {
  App;
  env;
  port;
  server;

  constructor(routes) {
    this.app = express();
    this.env = "development";
    this.port = 5000;

    this.connectToDataBase();
    this.initilizeMiddlewares();
    this.initializeRoutes(routes);
    this.initHandlerbars();
  }

  getServer() {
    return this.app;
  }

  closeServer() {
    this.server = this.app.listen(this.port, () => {
      done();
    });
  }

  async connectToDataBase() {
    // TODO: Inicializar la conexion
    await mongoDBconnection();
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  initilizeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/static", express.static(`${__dirname}/public`));
  }

  initHandlerbars() {
    this.app.engine("handlebars", handlebars.engine());
    this.app.set("views", __dirname + "/views");
    this.app.set("view engine", "handlebars");
  }

  listen() {
    this.app.listen(this.port, () => {
      displayRoutes(this.app);
      console.log(`=================================`);
      console.log(`==== ENV: ${this.env}`);
      console.log(`==== PORT: ${this.port}`);
      console.log(`=================================`);
    });
  }
}

module.exports = App;
