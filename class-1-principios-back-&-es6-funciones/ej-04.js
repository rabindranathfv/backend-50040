function mostarLista(lista) {
  console.log("🚀 ~ file: ej-04.js:2 ~ mostarLista ~ lista:", lista);

  if (lista && lista.length === 0) {
    return "Lista Vacia";
  }

  for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log("🚀 ~ file: ej-04.js:10 ~ mostarLista ~ element:", element);
  }

  return `la lista contiene ${lista.length} elementos`;
}

const lenguajes = ["C", "Javascript", "C++", "PYTHON", "JAVA"];
console.log(
  "🚀 ~ file: ej-04.js:18 ~ mostarLista ~ mostarLista:",
  mostarLista(lenguajes)
);

console.log(
  "🚀 ~ file: ej-04.js:23 ~ mostarLista ~ mostarLista:",
  mostarLista([])
);

const personas = {
  name: "jose",
  edad: 21,
  pelicula: "AVATAR",
  salario: 201.43,
  fecha: new Date(),
};
console.log("🚀 ~ file: ej-04.js:34 ~ personas:", Object.keys(personas));
console.log("🚀 ~ file: ej-04.js:34 ~ personas:", Object.keys(personas).length);
console.log("🚀 ~ file: ej-04.js:34 ~ personas:", Object.values(personas));
console.log("🚀 ~ file: ej-04.js:34 ~ personas:", Object.entries(personas));
