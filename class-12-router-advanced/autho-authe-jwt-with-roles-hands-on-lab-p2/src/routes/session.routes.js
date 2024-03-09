const { Router } = require("express");
const userModel = require("../model/user.model");
const { createHash, isValidPasswd } = require("../utils/encrypt");
const { generateJWT } = require("../utils/jwt");
const { handlePolicies } = require("../middleware/handle-policies.middleware");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.redirect("/login");
    return res.send({ message: `logout Error`, body: err });
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const session = req.session;
    console.log(
      "🚀 ~ file: session.routes.js:17 ~ router.post ~ session:",
      session
    );

    const findUser = await userModel.findOne({ email });

    if (!findUser) return res.json({ message: `user not register` });

    const isValidComparePsw = await isValidPasswd(password, findUser.password);

    if (!isValidComparePsw) {
      return res.json({ message: `wrong password` });
    }

    const signUser = {
      email,
      role: findUser.role,
      id: findUser._id,
    };

    const token = await generateJWT({ ...signUser });

    req.session.user = {
      ...signUser,
    };

    return res.json({ message: `welcome $${email},login success`, token });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:42 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("BODY REGISTER***", req.body);
    const { first_name, last_name, email, age, password, role } = req.body;

    const pswHashed = await createHash(password);

    const addUser = {
      first_name,
      last_name,
      email,
      age,
      password: pswHashed,
      role,
    };
    // creando el usurio en mongo
    const newUser = await userModel.create(addUser); // promesa

    if (!newUser) {
      return res
        .status(500)
        .json({ message: `we have some issues register this user` });
    }

    // session del usuario
    req.session.user = { email, role, id: newUser._id };
    return res.json({
      message: `usuario creado`,
      user: newUser,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:86 ~ router.post ~ error:",
      error
    );
  }
});

// ENDPOINT EN DESUSO
router.post("/recover-psw", async (req, res) => {
  try {
    const { new_password, email } = req.body;
    console.log(
      "🚀 ~ file: session.routes.js:93 ~ router.post ~ req.body:",
      req.body
    );

    const newPswHash = await createHash(new_password);
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: `credenciales invalidas o erroneas` });
    }

    const updateUser = await userModel.findByIdAndUpdate(user._id, {
      password: newPswHash,
    });

    if (!updateUser) {
      return res.json({ message: "problemas actualizando la contrasena" });
    }

    return res.render("login");
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:114 ~ router.post ~ error:",
      error
    );
  }
});

router.get("/current", handlePolicies(["PUBLIC"]), async (req, res) => {
  console.log(" VALIDANDO REQ", req.user);
  console.log(" HEADERS", req.headers);
  return res.json({ message: `jwt en las los headers` });
});

router.get(
  "/private",
  handlePolicies(["ADMIN", "USER_PREMIUM"]),
  async (req, res) => {
    console.log(" VALIDANDO REQ", req.user);
    console.log(" HEADERS", req.headers);
    return res.json({ message: `jwt en las los headers` });
  }
);

router.get("/private2", handlePolicies(["USER_PREMIUM"]), async (req, res) => {
  console.log(" VALIDANDO REQ", req.user);
  console.log(" HEADERS", req.headers);
  return res.json({ message: `jwt en las los headers` });
});

module.exports = router;
