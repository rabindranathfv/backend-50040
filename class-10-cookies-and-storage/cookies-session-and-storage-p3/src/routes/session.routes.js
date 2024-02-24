const { Router } = require("express");

const router = Router();

// router.get("/login", async (req, res) => {
//   const { username, password } = req.body;
//   console.log("🚀 ~ file: session.routes.js:7 ~ router.get ~ BODY:", req.body);

//   // si le preguntaramos en la BD si el usuario existe
//   if (username !== "rabin" && password !== "123456") {
//     return res.json({ message: `login fallido` });
//   }

//   req.session.user = username;
//   req.session.admin = true;
//   console.log(
//     "🚀 ~ file: session.routes.js:15 ~ router.get ~ req.session:",
//     req.session
//   );

//   return res.json({ message: "login success" });
// });

// router.get("/logout", async (req, res) => {
//   const name = req.session.user;
//   console.log("🚀 ~ file: session.routes.js:26 ~ router.get ~ name:", name);

//   req.session.destroy((error) => {
//     if (!error) return res.json({ message: `logout successfully` });
//     return res.send({ message: `loguut troubles`, body: error });
//   });
// });

router.get("/welcome", async (req, res) => {
  // /welcome?name=luis
  const { name } = req.query;
  console.log("🚀 ~ file: session.routes.js:8 ~ router.get ~ name:", name);

  const counter = req.session?.counter;
  console.log(
    "🚀 ~ file: session.routes.js:11 ~ router.get ~ counter:",
    counter
  );

  if (!counter) {
    req.session.counter = 1;
    req.session.user = name;
    req.session.admin = true;
    return res.send(`Bienvenido ${name} administrador`);
  }

  req.session.counter++;
  req.session.user = name;
  req.session.admin = true;
  return res.send(
    `visita numero ${req.session.counter} por el usuario ${name}`
  );
});

module.exports = router;
