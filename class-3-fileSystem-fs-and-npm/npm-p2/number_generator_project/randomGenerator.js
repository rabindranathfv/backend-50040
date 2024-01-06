function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ELEMENTOS = 100; // 10000

const randomArr = new Array(ELEMENTOS).fill(null).map(() => random(1, 20));
console.log("🚀 ~ file: randomGenerator.js:8 ~ randomArr:", randomArr);

// solucion 1
const result = {};

for (let index = 0; index < randomArr.length; index++) {
  const element = randomArr[index];
  result[element] = result[element] + 1 || 1;
}
console.log("🚀 ~ file: randomGenerator.js:11 ~ result:", result);

// solucion 2
const mappingRandom = randomArr.reduce(
  (acc, value) => (acc[value] ? (acc[value] += 1) : (acc[value] = 1), acc),
  {}
);
console.log(
  "🚀 ~ file: randomGenerator.js:23 ~ mappingRandom ~ mappingRandom:",
  mappingRandom
);
