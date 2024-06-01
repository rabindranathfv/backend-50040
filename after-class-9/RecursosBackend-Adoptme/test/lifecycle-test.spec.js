import { expect } from "chai";

describe("lifecycle testing - describe", () => {
  before(function () {
    console.log("Before****");
  });

  beforeEach(function () {
    console.log("before each TEST!!!");
    this.timeout(5000);
  });

  after(function () {
    console.log("AFTER");
  });

  afterEach(function () {
    console.log("after each TEST - F");
  });

  it("should be true", async function () {
    console.log("EJECUTANDO LA PRUEBA");
    // EJECUTANDO PRUEBA
  });

  it("should be true V2", async function () {
    console.log("EJECUTANDO LA PRUEBA 2");
  });
});
