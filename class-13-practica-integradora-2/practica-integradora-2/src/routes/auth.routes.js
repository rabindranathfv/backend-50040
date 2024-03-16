const { Router } = require("express");

const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");
const { generateJWT } = require("../utils/jwt");

const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });
    console.log(
      "🚀 ~ file: auth.routes.js:13 ~ router.post ~ findUser:",
      findUser
    );

    if (!findUser) {
      return res
        .status(401)
        .json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    if (!isValidComparePsw) {
      return res.status(401).json({ message: `credenciales invalidas` });
    }
    const {
      password: passwordFromDB,
      first_name,
      last_name,
      email: emailDb,
      age,
      role,
      notes,
    } = findUser;

    const token = await generateJWT({
      first_name,
      last_name,
      email: emailDb,
      age,
      role,
      notes,
      id: findUser._id,
    });

    return res.json({ message: `welcome $${email}, login success`, token });
  } catch (error) {
    console.log("🚀 ~ file: auth.routes.js:29 ~ router.post ~ error:", error);
  }
});

// TODO: Crear una local strategy para el registro
router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, age, password, role } = req.body;
    // TODO: Validar todos los campos del body
    const pswHashed = await createHashValue(password);

    const newUser = await userModel.create({
      first_name,
      last_name,
      email,
      age,
      role,
      password: pswHashed,
    });

    // TODO: Validar que se creo correctamente
    if (!newUser) {
      // Manejar el error
    }

    return res.json({ message: `usuario creado`, user: newUser });
  } catch (error) {
    console.log("🚀 ~ file: auth.routes.js:55 ~ router.post ~ error:", error);
  }
});

module.exports = router;
