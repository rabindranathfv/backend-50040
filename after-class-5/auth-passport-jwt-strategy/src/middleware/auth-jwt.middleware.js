const passport = require("passport");

const checkAuthJwt = (strategy) => {
  return async (req, res, next) => {
    passport.authenticate(strategy, (err, user, info) => {
      console.log(
        "🚀 ~ file: auth-jwt.middleware.js:5 ~ passport.authenticate ~ info:",
        info,
      );

      if (err) return next(err);
      if (!user) {
        return res
          .status(401)
          .json({ messaage: info.messaage ? info.messaage : info.toString() });
      }
      req.user = user;
      next();
    })(req, res, next);
  };
};

module.exports = checkAuthJwt;
