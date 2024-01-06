// Operacion sobre archivos de forma SINCRONA
const fs = require("fs"); // sincrona, callbacks o promesas
const path = require("path");

try {
  const pathFile = path.join(__dirname, "prueba2.txt");
  const contentFile = fs.readFileSync(pathFile, "utf-8");
  console.log("🚀 ~ file: fs-02.js:7 ~ contentFile:", contentFile);
} catch (error) {
  console.log("🚀 ~ file: fs-02.js:9 ~ error:", error);
}
