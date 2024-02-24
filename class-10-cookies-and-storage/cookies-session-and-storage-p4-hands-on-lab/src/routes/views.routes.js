const { Router } = require("express");
const authMdw = require("../middleware/auth.middleware");

const router = Router();

router.get(`/login`, async (req, res) => {
  res.render("login");
});

router.get(`/register`, async (req, res) => {
  res.render("register");
});

// TODO: Crear u usar middleware de autorizacion
router.get(`/profile`, authMdw, async (req, res) => {
  const user = req.session.user;

  res.render("profile", {
    user,
  });
});

module.exports = router;
