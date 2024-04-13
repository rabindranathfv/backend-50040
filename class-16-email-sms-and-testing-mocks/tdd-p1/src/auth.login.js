export const login = (username, password) => {
  if (!username) {
    console.log("No se ha proporcionado un usuario");
    return null;
  }

  if (!password) {
    console.log("No se ha proporcionado un paswword");
    return undefined;
  }

  if (username !== "coderUser") {
    console.log("Credenciales incorrectas");
    return false;
  }

  if (password !== "123") {
    console.log("Contraseña incorrecta");
    return false;
  }

  console.log("logueado");
  return true;
};
