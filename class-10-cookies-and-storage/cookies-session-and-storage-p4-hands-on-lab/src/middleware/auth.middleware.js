function authMdw(req, res, next) {
  console.log("****AUTH MDW*********");
  if (req.session?.user) {
    return next();
  }

  return res.redirect("/login");
}

module.exports = authMdw;
