const { Router } = require("express");
const userModel = require("../model/user.model");

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

    if (findUser.password !== password) {
      return res.json({ message: `wrong password` });
    }

    req.session.user = {
      // TODO: eliminar el password
      ...findUser,
    };

    return res.render("profile", {
      firstName: req.session?.user?.first_name || findUser.first_name,
      lastName: req.session?.user?.last_name || findUser.last_name,
      email: req.session?.user?.email || email,
      age: req.session?.user?.age || findUser.age,
    });
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
    const { first_name, last_name, email, age, password } = req.body;

    const addUser = {
      first_name,
      last_name,
      email,
      age,
      password,
    };
    // creando el usurio en mongo
    const newUser = await userModel.create(addUser); // promesa

    if (!newUser) {
      return res
        .status(500)
        .json({ message: `we have some issues register this user` });
    }

    // session del usuario
    req.session.user = { email, firstName: first_name, lastName: last_name };
    return res.redirect("/login");
  } catch (error) {
    // atrapa todos los reject de todas las promesas
    console.log(
      "🚀 ~ file: session.routes.js:41 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
