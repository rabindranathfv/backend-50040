const cars = [
  {
    brand: "ferrari",
    price: 100,
    type: "deportivo",
  },
  {
    brand: "Toyota",
    price: 70,
    type: "todoTerreno",
  },
  {
    brand: "bmw",
    price: 93,
    type: "deportivo",
  },
  {
    brand: "Nisan",
    price: 50,
    type: "TodoTerreno",
  },
  {
    brand: "Ford",
    price: 5,
    type: "TodoTerreno",
  },
];

const carsType = cars.map((car) => car.type.toLocaleLowerCase());
console.log("🚀 ~ file: ej-200.js:25 ~ carsType:", carsType);

const typeSearch = "todoterreno";
if (carsType.includes(typeSearch)) {
  console.log(" Existen modelos deportivos");
} else {
  console.log(`No existe el modelo buscado `);
}

const carsPrices = cars.map((car) => car.price);
console.log("🚀 ~ file: ej-200.js:35 ~ carsPrices:", carsPrices);
console.log(
  "🚀 ~ file: ej-200.js:35 ~ Potence:",
  cars[3].price ** 2,
  carsPrices[3] ** 2,
  cars[4].price ** 4,
  2 ** 10,
  2 ** 3
);

console.log(
  "USING OBJECT.KEYS METHOD ***",
  Object.keys(cars),
  Object.keys(cars[0])
);
console.log(
  "USING OBJECT.VALUES METHOD ***",
  Object.values(cars),
  Object.values(cars[1])
);
console.log("USING OBJECT.ENTRIES METHOD ***", Object.entries(cars[3]));
console.log("USING OBJECT.ENTRIES METHOD ***", Object.entries(cars));

const carsIndexed = cars.reduce((accumulador, item, indice) => {
  return {
    ...accumulador, // spread operator
    [indice]: item,
  };
}, {});
console.log(
  "🚀 ~ file: ej-200.js:69 ~ carsIndexed ~ carsIndexed:",
  carsIndexed,
  carsIndexed["4"]
);
