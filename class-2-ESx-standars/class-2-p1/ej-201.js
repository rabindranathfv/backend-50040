const ferrari = {
  brand: "ferrari",
  price: 200,
  type: "deportivo",
};

const toyota = {
  brand: "Toyota",
  price: 70,
  type: "todoTerreno",
};

const nisan = {
  brand: "bmw",
  price: 93,
  type: "deportivo",
  color: "black",
  tuning: true,
  transmition: "manual",
};

const cars = [ferrari, toyota, nisan];
console.log("🚀 ~ file: ej-201.js:20 ~ cars:", cars);

const { brand, price, type, color, ...nisanValues } = nisan;
console.log("🚀 ~ file: ej-201.js:26 ~ destructuring:", brand, price, type);
console.log("🚀 ~ file: ej-201.js:27 ~ nisanValues:", nisanValues);
console.log(
  "🚀 ~ file: ej-201.js:29 ~ destructuring:",
  nisan.brand,
  nisan.price,
  nisan.type
);

const persona = {
  name: "luis",
  age: 29,
};

const { name, age, ...personValues } = persona;
console.log("🚀 ~ file: ej-201.js:41 ~ personValues:", personValues);

const carsSpread = [{ ...ferrari }, { ...toyota }, { ...nisan }];
console.log("🚀 ~ file: ej-201.js:44 ~ carsSpread:", carsSpread);

const team = {
  name: "real madrid",
  year: 1900,
};
console.log("🚀 ~ file: ej-201.js:50 ~ team:", team);

const team2 = { ...team };

team2.name = "Milan";
console.log("🚀 ~ file: ej-201.js:52 ~ team2:", team2);

const team3 = team;
console.log("🚀 ~ file: ej-201.js:58 ~ team3:", team3);
team3.year = 2000;

console.log("🚀 ~ file: ej-201.js:60 ~ team:", team);
