class Persona {
  static especie = "humana";
  constructor(nombre, pais) {
    this.nombre = nombre;
    this.pais = pais;
    this.edad = 20;
  }

  saludo() {
    console.log(
      "🚀 ~ file: ej-05.js:6 ~ Persona ~ constructor ~ nombre:",
      this.nombre
    );
    return "hola, como estas?";
  }

  dondeVivo() {
    return `vivo en ${this.pais} y tengo ${this.edadMetodo()} anos`;
  }

  dondeVivoV2() {
    return `vivo en ${this.pais} y tengo ${this.edadMetodoV2()} anos`;
  }

  edadMetodo() {
    return this.edad;
  }

  edadMetodoV2 = () => this.edad;
}

const p1 = new Persona("rabin", "ESP");
console.log("🚀 ~ file: ej-05.js:7 ~ p1:", p1.nombre);
console.log("🚀 ~ file: ej-05.js:7 ~ p1:", p1.saludo());
console.log("🚀 ~ file: ej-05.js:7 ~ p1:", p1.dondeVivo());
console.log("🚀 ~ file: ej-05.js:7 ~ p1:", p1.dondeVivoV2());
