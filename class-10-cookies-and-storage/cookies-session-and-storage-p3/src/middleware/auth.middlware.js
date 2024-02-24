function AuhMdw(req, res, next) {
  console.log("INFO SESSION", req.session);
  if (req.session?.user || req.session?.admin) {
    return next();
  }

  return res.status(401).json({
    message: "Unauthorized access",
  });
}

module.exports = AuhMdw;
