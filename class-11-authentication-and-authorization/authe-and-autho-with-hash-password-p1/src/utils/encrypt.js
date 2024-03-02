const bcrypt = require("bcrypt");

const createHash = async (psw) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hashSync(psw, salt);
};

const isValidPasswd = async (psw, encryptedPsw) => {
  const isValid = await bcrypt.compareSync(psw, encryptedPsw)
  return isValid
};

module.exports = {
  createHash,
  isValidPasswd,
};
