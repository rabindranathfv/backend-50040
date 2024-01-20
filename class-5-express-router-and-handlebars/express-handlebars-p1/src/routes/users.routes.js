const { Router } = require("express");
const router = Router();

// GET /api/users/
router.get(`/`, (req, res) => {
  return res.json({
    ok: true,
    // usuarios: listaUsuarios.usuarios,
  });
});

module.exports = router;
