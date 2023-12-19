class Contador {
  static contadorInstances = 0;
  constructor(nombre) {
    this.nombre = nombre;
    this.valor = 0;
    Contador.contadorInstances = Contador.contadorInstances + 1;
  }

  getContador = () => {
    return this.valor;
  };

  setContador(valor) {
    this.valor = valor;
  }

  getResponsable() {
    return this.nombre;
  }

  getCuentaIndividual() {
    return this.valor;
  }

  getCuentaGlobal = () => {
    return Contador.contadorInstances;
  };
}

console.log("ATRIBUTO ESTATICO", Contador.contadorInstances);

const primerContador = new Contador("Rabin");
console.log(
  `el contador de ${primerContador.getResponsable()} tiene un valor de ${primerContador.getContador()}`
);

primerContador.setContador(10);
console.log(
  "ATRIBUTO ESTATICO",
  Contador.contadorInstances,
  primerContador.getContador()
);

const contador2 = new Contador("Fernando");

console.log(
  "ATRIBUTO ESTATICO",
  Contador.contadorInstances,
  contador2.setContador(200),
  contador2.getContador()
);

const contador3 = new Contador("JOSE");
const contador4 = new Contador("ESTUDIANTES");

console.log(
  "NUMEROS DE INSTANCIAS DE CONTADOR***",
  Contador.contadorInstances,
  contador4.getCuentaGlobal()
);
