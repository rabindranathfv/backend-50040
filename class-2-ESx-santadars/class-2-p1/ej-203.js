const mensage = " Hola, como estas     ";
console.log(
  "🚀 ~ file: ej-203.js:4 ~ mensage:",
  mensage.trim(),
  mensage.trim().length,
  mensage.length
);

let arrayCombinado = [
  123,
  51,
  2,
  5,
  6,
  [2, 7, 8, 31, 0, -22],
  [
    [25, 1],
    [-1, 4],
  ],
];

console.log(
  "🚀 ~ file: ej-203.js:21 ~ arrayCombinado:",
  arrayCombinado.flat(2)
);
