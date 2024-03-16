console.log("HOLA");

const config = require("./config/config");
console.log("🚀 ~ file: app.js:4 ~ config:", config.PORT, typeof config.PORT);

const PORT = Number(config.PORT) || 5001;
console.log("🚀 ~ file: app.js:7 ~ PORT:", PORT);

console.log("🚀 ~ file: app.js:7 ~ NODE_ENV:", config.NODE_ENV);
console.log("🚀 ~ file: app.js:7 ~ EXPIRE IN:", config.JWT_EXPIRE_IN);
