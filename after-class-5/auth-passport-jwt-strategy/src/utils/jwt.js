const jwt = require("jsonwebtoken");

const SECRET_JWT = "CLAVEs3p3rs3cr3t4S1s1"; // A futuro esto debe ir por variable de entorno

const generateJWT = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ user }, SECRET_JWT, { expiresIn: "30m" }, (err, token) => {
      if (err) {
        console.log("🚀 ~ file: jwt.js:9 ~ jwt.sign ~ err:", err);
        reject("can not generate jwt token");
      }
      resolve(token);
    });
  });
};

module.exports = {
  SECRET_JWT,
  generateJWT,
};
