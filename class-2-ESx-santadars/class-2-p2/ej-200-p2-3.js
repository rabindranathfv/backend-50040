// TODO: convertir esta funcion usando promesa
const sumar = (param1, param2) => param1 + param2;
// TODO: convertir esta funcion usando promesa
const restar = (param1, param2) => {
  return param1 - param2;
};
// TODO: convertir esta funcion usando promesa
function multiplicar(param1, param2) {
  return param1 * param2;
}
function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (typeof dividendo !== "number" || typeof divisor !== "number") {
      reject("alguno de los parametros no son numeros");
    }

    if (divisor === 0) {
      reject("la division entre 0 no esta definida");
    }
    resolve(dividendo / divisor);
  });
}

// TODO: Llamar a los metodos de multiplicar, sumar y restar usando los metodos convertidos con promesas

dividir(12, 1)
  .then((resultado) => {
    console.log(
      "🚀 ~ file: ej-200-p2-3.js:36 ~ aplicarOperacion ~ resultado:",
      resultado
    );
  })
  .catch((error) => {
    console.log(
      "🚀 ~ file: ej-200-p2-3.js:38 ~ aplicarOperacion ~ error:",
      error
    );
  });
