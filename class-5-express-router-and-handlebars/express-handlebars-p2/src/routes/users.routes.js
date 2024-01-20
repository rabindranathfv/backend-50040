const { Router, application } = require("express");
const router = Router();

let users = [
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

// GET /api/users/
router.get(`/`, (req, res) => {
  return res.json({
    ok: true,
    usuarios: users,
  });
});

router.post("/", (req, res) => {
  const userBody = req.body;
  console.log("🚀 ~ router.post ~ userBody:", userBody);

  const newUser = {
    ...userBody,
  };

  users.push(newUser);

  res.json({ ok: true, usuario: newUser });
});

module.exports = router;
