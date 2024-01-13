const http = require("http");

const PUERTO = 8000;

const servidor = http.createServer((request, response) => {
  console.log("PROCESANDO LA PETICION, AGREGANDO CAMBIO****");
  response.end("Hola mi primera respuesta desde el servidor, V2");
});

servidor.listen(PUERTO, () => {
  console.log("SERVIDOR EJECUTANDOSE, V2");
});
