const { Router } = require("express");

const router = Router();

// setCookie
router.post(`/setCookie`, (req, res) => {
  const body = req.body;
  console.log("🚀 ~ file: cookies.routes.js:8 ~ router.post ~ body:", body);

  return res
    .cookie(
      "cookieUser",
      { user: `${body.email}` },
      { maxAge: 10000 }
      // { maxAge: 20000, signed: true }
    )
    .send();
});

// getCookie
router.get(`/`, (req, res) => {
  console.log("INFO DE LAS COOKIES", req.cookies, req.signedCookies);

  // req.cookies cookies sin firma
  // req.signedCookies cookies con firma
  return res.json({ cookie: req.cookies, signedCookies: req.signedCookies });
});

// deleteCookie

module.exports = router;
