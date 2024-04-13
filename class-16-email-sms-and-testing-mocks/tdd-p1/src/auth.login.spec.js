const { login } = require("./auth.login");

describe("login function", () => {
  it("No se proporciona el usuario entonces deberia retornar No se ha proporcionado un usuario", () => {
    //condiciones iniciales de la prueba
    console.log = jest.fn();
    const result = login("", "123");

    // pasos intermedios en la prueba

    // condiciones que deben cumplir
    expect(result).toBe(null);
    expect(result).toBeFalsy(); // null, undefined, false
    expect(console.log).toHaveBeenCalledWith(
      "No se ha proporcionado un usuario"
    );
  });

  it("should log an error message if no password is provided", () => {
    //condiciones iniciales de la prueba
    console.log = jest.fn();
    const result = login("coderUser", "");

    // pasos intermedios en la prueba

    // condiciones que deben cumplir
    expect(result).toBe(undefined);
    expect(result).toBeFalsy(); // null, undefined, false
    expect(console.log).toHaveBeenCalledWith(
      "No se ha proporcionado un paswword"
    );
  });

  it("should log an error message if the user is incorrect", () => {
    console.log = jest.fn();
    const result = login("wrongUser", "123");
    expect(console.log).toHaveBeenCalledWith("Credenciales incorrectas");
    expect(result).toBe(false);
  });

  it("should log an error message if the password is incorrect", () => {
    console.log = jest.fn();
    const result = login("coderUser", "wrongPassword");
    expect(console.log).toHaveBeenCalledWith("Contraseña incorrecta");
    expect(result).toBe(false);
  });

  it("should log a success message if the user and password are correct", () => {
    console.log = jest.fn();
    const result = login("coderUser", "123");
    expect(console.log).toHaveBeenCalledWith("logueado");
    expect(result).toBe(true);
  });
});
