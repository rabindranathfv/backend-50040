// scope global
let i = 0;
function mifuncion() {
  // scope de la funcion mifuncion
  i = 1;

  let j = 2;

  if (true) {
    console.log("🚀 ~ file: ej-01.js:4 ~ i:", i);
    console.log("🚀 ~ file: ej-01.js:7 ~ j:", j);
  }
}

mifuncion();

function scopeFunction() {
  // scope de la funcion mifuncion
  let i = 0;

  if (true) {
    // scope del if
    let i = 1;
    console.log("🚀 ~ file: ej-01.js:24 ~ i:", i);
  }
  i = i + 2;
  console.log("🚀 ~ file: ej-01.js:27 ~ scopeFunction ~ i:", i);
}

scopeFunction();

function foo() {
  if (true) {
    let nombre = "rabin";
    console.log("🚀 ~ file: ej-01.js:35 ~ foo ~ nombre:", nombre);
  }
  console.log("🚀 ~ file: ej-01.js:87 ~ foo ~ nombre:", nombre);
}

foo();
