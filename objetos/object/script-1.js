// // criando objetos
// const person = {
//   name: "Sandro",
//   age: 26,
// };

// const person2 = new Object({
//   name: "Sandro",
// });

// const cars = {
//   rodas: 4,
//   init(valor) {
//     this.marca = valor;
//     return this;
//   },
//   speedUp() {
//     return this.marca + " acelerou";
//   },
//   honk() {
//     return this.marca + " buzinou";
//   },
// };

// const honda = Object.create(cars).init("Honda");

// const ferrari = Object.create(cars).init("Ferrari");

// ASSIGN adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

// const automotiveFunction = {
//   speedUp() {
//     return "acelerou";
//   },
//   honk() {
//     return "buzinou";
//   },
// };

// const motorbike = {
//   rodas: 2,
//   capacete: true,
// };

// const car = {
//   rodas: 4,
//   mala: true,
// };

// Object.assign(motorbike, automotiveFunction);
// Object.assign(car, automotiveFunction);

// const motorbike = {
//   capacete: true,
// };

// Object.defineProperties(motorbike, {
//   rodas: {
//     enumerable: true,
//     // value: 2,
//     // configurable: false, // permiti modificar o objeto
//     // writable: true, // permiti escrever por cima

//     // get e set não permiti ter value
//     get() {
//       return this._rodas;
//     },
//     set(valor) {
//       this._rodas = valor * 4 + " Total rodas";
//     },
//   },
// });

// // listar todos os metodos e propriedades de um objetos, com suas devidas configurações
// Object.getOwnPropertyDescriptors(motorbike);

// const innerHeightConfig = Object.getOwnPropertyDescriptors(
//   window,
//   "innerHeight"
// );

// Object.keys(motorbike); // (2) ['capacete', 'rodas']
// Object.entries(motorbike); // (2) [Array(2), Array(2)]

// Object.getOwnPropertyNames(Array); // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

// const frutas = ["Banana"];

// Object.getPrototypeOf(frutas);
// Array.prototype;

// const frutas1 = ["Banana", "Pêra"];
// const frutas2 = ["Banana", "Pêra"];

// const newfruit = frutas1;

// Object.is(frutas1, newfruit);

const car = {
  marca: "Gol",
  ano: 1995,
};

// congela o objeto pra edição
Object.freeze(); // impede qualquer mudanças nas propriedades
Object.seal(); // previne a adição de novas propriedades e impede que as atuais sejam deletadas
Object.preventExtensions(); // previne a adição de novas propriedades

// .constructor retorna a função construtora do objeto
const fruits = ["Banana", "Pêra"];
fruits.constructor;

const frase = "Essa frase";
frase.constructor;

// .HASOWNPROPERTY('PROP') && PROPERTYISENUMERABLE('PROP')
// Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
const frutas = ["Banana", "Uva"];

frutas.hasOwnProperty("map"); // false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

Array.prototype.isPrototypeOf(frutas); // true

const sum = function (a, b) {
  return a + b;
};

const cars = {
  marca: "Ford",
};

// toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(cars));
