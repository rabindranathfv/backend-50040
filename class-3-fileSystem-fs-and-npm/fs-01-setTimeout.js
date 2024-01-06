const saludar = () => {
  console.log("🚀 ~ file: fs-01.js:2 ~ saludar:");
};

const comoEstas = (nombre) => {
  console.log("🚀 ~ file: fs-01.js:6 ~ comoEstas: ", nombre);
};

const NOMBRE = "FAUSTO";

// CODIGO SINCRONO - BLOQUEANTE
// saludar();
// comoEstas(NOMBRE);

// CODIGO ASINCRONO - NO BLOQUEANTE
const esperar = (timer, callback) => {
  setTimeout(() => {
    callback();
  }, timer);
};

comoEstas(NOMBRE);
esperar(3000, saludar);
esperar(2000, () => console.log("callback version arrow function"));
console.log("TERMINE LA EJECUCION");
