function AuhMdw(req, res, next) {
  console.log("INFO SESSION", req.session);
  if (req.session?.user === "rabin" || req.session.admin) {
    return next();
  }

  return res
    .status(401)
    .send(`error en la autorizacion, no tiene suficientes privilegios`);
}

module.exports = AuhMdw;
