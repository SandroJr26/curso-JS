// Crie uma função que verifique
// corretamente o tipo de dado
function checkData(dado) {
  return Object.prototype.toString.call(dado);
}
Object.prototype.toString.call([]); // object Array

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

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

configuracao.width = 1000;
Object.freeze(configuracao);
configuracao.width = 2000;

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
Object.getOwnPropertyNames(Array.prototype);
Object.getOwnPropertyNames(String.prototype);
