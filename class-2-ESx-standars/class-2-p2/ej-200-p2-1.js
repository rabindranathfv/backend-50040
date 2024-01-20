const numers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 190, 19, 10];

const numerosPares = numers.filter((num) => num % 2 === 0);
console.log("🚀 ~ file: ej-200-p2-1.js:4 ~ numerosPares:", numerosPares);

const isOdd = (num) => num % 2 === 0;

const numerosParesParametrosImplicitos = numers.filter(isOdd);
console.log(
  "🚀 ~ file: ej-200-p2-1.js:9 ~ numerosParesParametrosImplicitos:",
  numerosParesParametrosImplicitos
);

// ESTE LLAMADO DEL CALLBACK ES UN ERROR
// const numerosParesParametrosExplicitos = numers.filter(isOdd(num));
// console.log(
//   "🚀 ~ file: ej-200-p2-1.js:15 ~ numerosParesParametrosExplicitos:",
//   numerosParesParametrosExplicitos
// );

const numerosParesParametrosExplicitos2 = numers.filter((num) => isOdd(num));
console.log(
  "🚀 ~ file: ej-200-p2-1.js:21 ~ numerosParesParametrosExplicitos2:",
  numerosParesParametrosExplicitos2
);

const newNumers = numers.map((x) => x + 1);
