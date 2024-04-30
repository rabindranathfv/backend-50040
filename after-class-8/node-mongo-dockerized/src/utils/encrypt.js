const bcrypt = require("bcrypt");

const createHashValue = async (val) => {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hashSync(val, salt);
  console.log("🚀 ~ file: encrypt.js:6 ~ createHashValue ~ val:", hash);
  return await hash;
};

const isValidPasswd = async (psw, encryptedPsw) => {
  const validValue = await bcrypt.compareSync(psw, encryptedPsw);
  return validValue;
};

module.exports = {
  createHashValue,
  isValidPasswd,
};
