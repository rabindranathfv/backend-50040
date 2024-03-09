const passport = require("passport");

// arreglo de politicas/roles
function handlePolicies(policies) {
  return (req, res, next) => {
    // Verificar si la única política es "PUBLIC"
    if (policies.length === 1 && policies[0] === "PUBLIC") {
      return next();
    }

    // { session: false }
    passport.authenticate("jwt", (err, userJWT, info) => {
      console.log(
        "🚀 ~ file: handle-policies.middleware.js:12 ~ passport.authenticate ~ userJWT:",
        userJWT
      );
      if (err) return next(err);

      if (!userJWT) {
        return res
          .status(401)
          .json({ message: "Acceso denegado. Token inválido o expirado." });
      }

      const currentRole = userJWT.user.role;
      if (!policies.includes(currentRole)) {
        return res
          .status(403)
          .send({ message: "Acceso denegado. Rol del usuario no autorizado." });
      }

      req.user = userJWT.user;
      next();
    })(req, res, next);
  };
}

module.exports = {
  handlePolicies,
};
