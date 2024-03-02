const { Router } = require("express");
const passport = require("passport");
const authMdw = require("../middleware/auth.middleware");

const router = Router();

// Login - GET
router.get("/login", async (req, res) => {
  res.render("login");
});

// Login - POST
router.post(
  "/login",
  passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/faillogin",
    failureFlash: true, // Display flash messages if needed
  })
);

router.get("/faillogin", async (req, res) => {
  res.send({ error: "login strategy failed" });
});

// Register - GET
router.get("/register", async (req, res) => {
  res.render("register");
});

// Register - POST
router.post(
  "/register",
  passport.authenticate("register", {
    successRedirect: "/",
    failureRedirect: "/failregister",
    failureFlash: true,
  })
);

router.get("/failregister", async (req, res) => {
  res.send({ error: "register strategy failed" });
});

router.get("/recover", async (req, res) => {
  res.render("recover");
});

router.get("/profile", authMdw, async (req, res) => {
  const user = req.user;
  console.log("🚀 ~ file: views.routes.js:20 ~ router.get ~ user:", user);

  res.render("profile", {
    user,
    carrito: {
      carritoId: "carrito-1",
      productos: [{ productoId: "1", nombre: "camisa" }],
    },
  });
});

module.exports = router;
