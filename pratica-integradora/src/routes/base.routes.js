const { Router } = require("express");

class BaseRoute {
  path = "/alive";
  router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  initBaseRoutes() {
    this.router.get(`${this.path}`, (req, res) => {
      return res
        .status(200)
        .json({ ok: true, message: `I AM AN API, UP AND RUNNING` });
    });
  }
}

module.exports = BaseRoute;
