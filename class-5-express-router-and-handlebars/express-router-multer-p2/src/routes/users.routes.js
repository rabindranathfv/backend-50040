const { Router } = require("express");
const listaUsuarios = require("../users.json");

const router = Router();

// GET /api/users/
router.get(`/`, (req, res) => {
  return res.json({
    ok: true,
    usuarios: listaUsuarios.usuarios,
  });
});

// GET /api/users/:userId
router.get(`/:userId`, (req, res) => {
  console.log("PARAMS", req.params);
  const userId = req.params.userId;

  if (isNaN(userId)) {
    return res.status(400).json({
      ok: true,
      message: `no existe el usuario con el id ${userId}`,
      queryParams: req.query,
    });
  }

  const usuario = listaUsuarios.usuarios.find((u) => {
    return u.id === Number(userId);
  });

  if (!usuario) {
    return res.json({
      ok: true,
      message: `no existe el usuario con el id ${userId}`,
      usuario,
      queryParams: req.query,
    });
  }

  return res.json({ ok: true, message: `usuario id: ${userId}`, usuario });
});

// POST /api/users/
router.post(`/`, (req, res) => {
  const user = req.body;
  console.log("🚀 ~ router.post ~ user:", user);
  const lastId = listaUsuarios.usuarios[listaUsuarios.usuarios.length - 1].id;
  const newUser = {
    id: lastId,
    ...user,
  };
  res.json({ ok: true, message: `usuario creado`, usuario: newUser });
});

// PUT/api/users/:userId
router.put(`/:userId`, (req, res) => {});

// DELETE /api/users/:userId
router.delete(`/:userId`, (req, res) => {});

module.exports = router;
