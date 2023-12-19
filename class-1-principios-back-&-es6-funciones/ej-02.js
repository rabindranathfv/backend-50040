const pi = 3.1416;

// pi = pi + 1;

function foo() {
  if (true) {
    const nombre = "rabin";
    // nombre = nombre + "ferreira";
    console.log("🚀 ~ file: ej-01.js:8 ~ foo ~ nombre:", nombre);
  }
  // console.log("🚀 ~ file: ej-01.js:10 ~ foo ~ nombre:", nombre);
}

foo();

const numeros = [1, 2, 3, 4];
console.log("🚀 ~ file: ej-02.js:17 ~ numeros:", numeros);

numeros[3] = 100;
console.log("🚀 ~ file: ej-02.js:20 ~ numeros:", numeros);

const personas = [
  {
    name: "jose",
    edad: 21,
    pelicula: "AVATAR",
    salario: 201.43,
    fecha: new Date(),
  },
  { name: "maria", edad: 18, pelicula: "AVATAR 2", salario: 10.3 },
  { name: "Sergio", edad: 30, pelicula: "REY LEON", salario: 400.67 },
  { name: "Valeria", edad: 28, pelicula: "SPIDERMAN", salario: 150.11 },
];

personas[1].name = "Maria Victoria";
console.log("🚀 ~ file: ej-02.js:36 ~ personas:", personas);
