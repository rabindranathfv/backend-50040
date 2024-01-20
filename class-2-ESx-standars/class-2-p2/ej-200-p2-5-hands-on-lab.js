const sumar = async (param1, param2) => {
  return new Promise((resolve, reject) => {
    if (param1 === 0 || param2 === 0) {
      reject("Operacion innecesaria");
    }

    resolve(param1 + param2);
  });
};

// TODO: hacer funcion de resta y multiplicar

async function dividir(dividendo, divisor) {
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

const callAsyncFunction = async () => {
  try {
    let result = await dividir(12, 1);
    console.log(
      "🚀 ~ file: ej-200-p2-4-async-await.js:35 ~ callAsyncFunction ~ result:",
      result
    );

    let resultSum = await sumar(1, 2);
    console.log(
      "🚀 ~ file: ej-200-p2-5-hands-on-lab.js:30 ~ callAsyncFunction ~ resultSum:",
      resultSum
    );

    let resultSum2 = await sumar(100, 50);
    console.log(
      "🚀 ~ file: ej-200-p2-5-hands-on-lab.js:30 ~ callAsyncFunction ~ resultSum:",
      resultSum2
    );
  } catch (error) {
    // TODO: todo lo q sea error o un reject
    console.log("🚀 ~ file: ej-200-p2-4-async-await.js:41 ~ error:", error);
  } finally {
    console.log("termine de ejecutar mi promesa con async-await");
  }
};

callAsyncFunction();
