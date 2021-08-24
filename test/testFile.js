const sumar = require("../index");
// Asserts (Frase logica que ayuda a describir algo a cualquier nivel) = Afirmaciónote
const assert = require("assert");
describe("Probar la suma de dos números", ()=>{
  //Afirmar que cinco + siete es 12
  it("5+7=12", ()=>{
    assert.equal(12, sumar(5,7));
  });
  // Afirmamos que cinco + siente no son 57
  it("5+7!=57", ()=>{
    assert.notEqual("57", sumar(5,7));
  });
});
