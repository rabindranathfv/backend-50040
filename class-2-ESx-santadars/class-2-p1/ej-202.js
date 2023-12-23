const canasta = [
  {
    manzanas: 2,
    peras: 4,
    carnes: 2,
    dulces: 10,
  },
  {
    manzanas: 8,
    peras: 2,
    carnes: 11,
    dulces: 2,
  },
  {
    manzanas: 1,
    peras: 2,
    carnes: 11,
    dulces: 2,
  },
];

console.log(" cantidad de manzanas", canasta[0].manzanas + canasta[1].manzanas);
const canastaManzanas = canasta.map((canasta) => canasta.manzanas);
console.log("🚀 ~ file: ej-202.js:24 ~ canastaManzanas:", canastaManzanas);
console.log(
  "🚀 ~ file: ej-202.js:25 ~ canastaManzanas:",
  Object.values(canasta)
);

// EJEMPLO DE ELIZER
const contarManzanas = canasta.reduce((acc, item) => {
  return (acc += item.manzanas);
}, 0);
console.log(
  "🚀 ~ file: ej-202.js:34 ~ contarManzanas ~ contarManzanas:",
  contarManzanas
);

// TAREA 1 LOGRAR UN ARREGLO CON LAS CANTIDADES DE MANZANAS
// TAREA 2 SUMAR LAS CANTIDADES TOTALES DE MANZAS
// codigo de Pablo
const result3 = canasta.map((obj) => {
  return obj.manzanas;
});

let nuse = 0;

for (let i = 0; i < result3.length; i++) {
  nuse += result3[i]; // nuse = result[i] + nuse
}

console.log("🚀 ~ file: ej-202.js:53 ~ resp Pablo:", nuse);

// codigo lucia
const soloManzanas = canasta.map((lista) => Object.values(lista)[0]);
console.log("🚀 ~ file: ej-202.js:56 ~ soloManzanas:", soloManzanas);

let sumaManzanas = 0;

soloManzanas.forEach((element) => {
  //console.log(element);
  sumaManzanas += element;
});

console.log(
  "🚀 ~ file: ej-202.js:66 ~ sumaManzanas codigo Lucia:",
  sumaManzanas
);
