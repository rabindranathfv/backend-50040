const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("register", {
    style: "style",
    name: "test",
  });
});

module.exports = router;
