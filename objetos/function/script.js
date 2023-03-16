// function perimetro(lado) {
//   return lado * 4;
// }

// const perimetro2 = new Function("lado", "return lado * 4");

// function somar(n1, n2, n3, n4) {
//   return n1 + n2;
// }

// // somar() retorna um nmr
// // somar retorna a função
// somar.length;

// function darOi(nome) {
//   console.log("Oi, tudo bom? " + nome);
// }

// // darOi("Sandro");
// // darOi.call(null, "Sandro");

// function descriptionCar(velocidade) {
//   console.log(this);
//   console.log(this.marca + " " + this.ano + " " + velocidade);
// }

// // descriptionCar.call({ marca: "Honda", ano: 2022 }, 100);

// const cars = ["Honda", "Gol", "Voyagem"];
// const frutas = ["Banana", "Uva", "Pêra"];

// cars.forEach.call(frutas, (item) => {
//   // console.log(item);
// });

// function Dom(selector) {
//   this.element = document.querySelector(selector);
// }

// Dom.prototype.ativo = function (classe) {
//   console.log(this);
//   this.element.classList.toggle(classe);
// };

// const li = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(li, "ativo");

// const ul = new Dom("ul");

// ul.ativo("ativo");
// ul.ativo.call(li, "ativar");

const frutas = ["Banana", "Uva", "Pêra"];

Array.prototype.pop.call(frutas);
frutas.pop(); // exatamente a mesma coisa

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const filter = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});

console.log(filter);
