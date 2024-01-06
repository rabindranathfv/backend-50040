const path = require("path");
const UserManager = require("./managerUsuarios");

const projectUsers = async () => {
  console.log("INICIANDO EL PROYECTO MANEJARDOR DE USUARIOS");
  try {
    const pathBase = path.join(`${__dirname}/db.json`);
    const manager = new UserManager(pathBase);

    let users = await manager.getUsers();
    console.log("🚀 ~ file: index.js:11 ~ projectUsers ~ users:", users);
    const addUser = {
      nombre: "Luis2",
      apellido: "Bravo2",
      nombreUsuario: "l2bravo2",
    };
    const newUser = await manager.createUser(addUser);
    console.log("🚀 ~ file: index.js:19 ~ projectUsers ~ newUser:", newUser);
    if (!newUser) {
      console.log("NO SE PUDO CREAR EL USUARIO, DATOS ERRADOS");
    }

    users = await manager.getUsers();
    console.log("🚀 ~ file: index.js:22 ~ projectUsers ~ users:", users);
  } catch (error) {
    console.log("🚀 ~ file: index.js:24 ~ projectUsers ~ error:", error);
  }
};

projectUsers();
