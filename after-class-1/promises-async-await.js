// calculo de area de rectangulo areaRect= base * altura

async function rectangulArea(base, high) {
  return new Promise((resolve, reject) => {
    if (typeof base !== "number" || typeof high !== "number") {
      reject("the parameters should be numbers");
    }

    if (base === 0 || high === 0) {
      reject("you can not calculate non valid area");
    }
    resolve(base * high);
  });
}

// calculo de area de un circulo area = PI.r**2

const circleArea = async (radious, PI = Math.PI) => {
  return new Promise((resolve, reject) => {
    if (typeof radious !== "number") {
      reject("the parameter should be number");
    }
    if (radious === 0) {
      reject("you can not calculate area circle with non valid parameters");
    }
    resolve(PI * Math.pow(radious, 2)); // Math.pow(3,2) ==> 3 ** 2
  });
};

// calculo de area de un triangulo area = (base * altura)/2

const triangulArea = async (base, high) => {
  return new Promise((resolve, reject) => {
    if (typeof base !== "number" || typeof high !== "number") {
      reject("the parameters should be numbers");
    }
    if (base === 0 || high === 0) {
      reject("you can not calculate triangel area");
    }
    resolve((base * high) / 2);
  });
};

// calculo de area del un cuadrado area = l**2

const squareArea = async (side) => {
  return new Promise((resolve, reject) => {
    if (typeof side !== "number") {
      reject("the parameter should be number");
    }
    if (side === 0) {
      reject("you can not calculate square area with non valid parameters");
    }
    resolve(side ** 2);
  });
};

const returnValues = async (side1, side2) => {
  return new Promise((resolve, reject) => {
    resolve({ solution: side1, solution2: side2 });
  });
};

const mainAsync = async () => {
  try {
    const rect = await rectangulArea(3, 2);
    console.log(
      "🚀 ~ file: promises-async-await.js:22 ~ mainAsync ~ rect:",
      rect
    );
    // TODO agregar llamadas con los casos de reject para practicar

    const circle = await circleArea(1);
    console.log(
      "🚀 ~ file: promises-async-await.js:43 ~ mainAsync ~ circle:",
      circle
    );
    // const tr1 = await triangulArea("0", 4); // Lanza un reject que es atrapado por el catch
    const tr2 = await triangulArea(3, 4);
    // const tr3 = await triangulArea(1, 0); // Lanza un reject que es atrapado por el catch
    console.log(
      "🚀 ~ file: promises-async-await.js:75 ~ mainAsync ~ tr3:",
      tr2
    );

    const cuadradoArea1 = await squareArea(2);
    // const cuadradoArea2 = await squareArea(0); // Lanza un reject que es atrapado por el catch
    // const cuadradoArea3 = await squareArea("4"); // Lanza un reject que es atrapado por el catch
    console.log(
      "🚀 ~ file: promises-async-await.js:82 ~ mainAsync ~ cuadradoArea2:",
      cuadradoArea1
    );
    const resp = await returnValues(2, 10);
    console.log(
      "🚀 ~ file: promises-async-await.js:94 ~ mainAsync ~ resp:",
      resp
    );
  } catch (error) {
    console.log(
      "🚀 ~ file: promises-async-await.js:88 ~ mainAsync ~ error:",
      error
    );
  }
};

mainAsync();
