// Crie uma função que verifique
// corretamente o tipo de dado
function checkData(data) {
  return Object.prototype.toString.call(data);
}

checkData([]);

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const square = {};
Object.defineProperties(square, {
  lados: {
    value: 4,
    enumerable: true,
  },
});

square.lados = 10;

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

configuracao.width = 1000;

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

Object.getOwnPropertyNames(String.prototype);
Object.getOwnPropertyNames(Array.prototype);
