// Operacion sobre archivos de forma asincrona con callbacks
const fs = require("fs");

fs.readFile(`${process.cwd()}/prueba.txt`, "utf-8", (err, content) => {
  if (err) {
    console.log("🚀 ~ file: fs-03.js:5 ~ fs.readFile ~ err:", err);
  } else {
    console.log("🚀 ~ file: fs-03.js:5 ~ fs.readFile ~ content:", content);
  }
});

fs.writeFile(
  `${process.cwd()}/prueba3.txt`,
  ` HOLA ESTOY ESCRIBIENDO EN UN ARCHIVO EL DIA ${new Date().toLocaleDateString()} V2`,
  (err) => {
    if (err) {
      console.log("🚀 ~ file: fs-03.js:16 ~ err:", err);
    }
  }
);
