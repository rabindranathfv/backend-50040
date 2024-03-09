const { Router } = require("express");
const passport = require("passport");
const checkAuthJwt = require("../middleware/auth-jwt.middleware");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");
const { generateJWT } = require("../utils/jwt");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err)
      return res.status(500).json({ message: `error internal, logout` });
    return res.send({ message: `logout Error`, body: err });
  });
});

router.post("/register", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
    const { first_name, last_name, email, age, password, role } = req.body;

    const pswHashed = await createHashValue(password);

    const userAdd = {
      email,
      password,
      first_name,
      last_name,
      age,
      password: pswHashed,
      role,
    };
    const newUser = await userModel.create(userAdd);

    req.session.user = { email, role, id: newUser._id };
    return res.json({
      message: `usuario creado`,
      user: newUser,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:36 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });

    if (!findUser) {
      return res
        .status(401)
        .json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    if (!isValidComparePsw) {
      return res.status(401).json({ message: `credenciales invalidas` });
    }
    const token = await generateJWT({
      email,
      first_name: findUser.first_name,
      age: findUser.age,
    }); // GENERANDO EL JWT
    console.log(
      "🚀 ~ file: session.routes.js:64 ~ router.post ~ token:",
      token
    );

    req.session.user = {
      ...findUser,
    };

    return res
      .cookie("cookieToken", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true, // PROBAR quitando esta opcion y luego accediendo en el navegador en la consola al document.cookie
      })
      .send({ message: "login success" });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:23 ~ router.post ~ error:",
      error
    );
  }
});

router.get("/current", checkAuthJwt("jwt"), async (req, res) => {
  console.log(" VALIDANDO REQ", req.user, req.cookies);
  return res.json({ message: `jwt en las cookies` });
});

module.exports = router;
