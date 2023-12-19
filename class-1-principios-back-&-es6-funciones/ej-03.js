function hola() {
  console.log("hola hola");
  return "hola";
}

const saludar = hola();
console.log("🚀 ~ file: ej-03.js:6 ~ saludar:", saludar);

function saludo(nombre) {
  return "hola " + nombre + " como estas?";
}

const saludoLuis = saludo("Luis");
console.log("🚀 ~ file: ej-03.js:14 ~ saludoLuis:", saludoLuis);

const saludoV2 = (nombre) => {
  return "hola " + nombre + " como estas?";
};

const saludoLuisV2 = saludoV2("Gabriel");
console.log("🚀 ~ file: ej-03.js:21 ~ saludoLuis:", saludoLuisV2);

const saludoV3 = (nombre) => "hola " + nombre + " como estas?";

const saludoLuisV3 = saludoV3("Fausto");
console.log("🚀 ~ file: ej-03.js:26 ~ saludoLuis:", saludoLuisV3);

const persona = () => ({ nombre: "Fausto", edad: 20 });

const personaV2 = () => {
  return { nombre: "Fausto", edad: 20 };
};
const nuevaPersona = persona();
console.log("🚀 ~ file: ej-03.js:31 ~ nuevaPersona:", nuevaPersona);

const nuevaPersonaV2 = personaV2();
console.log("🚀 ~ file: ej-03.js:37 ~ nuevaPersonaV2:", nuevaPersonaV2);
