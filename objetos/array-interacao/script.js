// Método forEach é uma função que percorre todos os itens da array
// e retorna undefined

// const carros = ["Ford", "Fiat", "Honda"];
// carros.forEach(function (carro, index, array) {
//   return carro.toUpperCase();
// });

// carros.forEach((carro) => {
//   return carro.toUpperCase();
// });

// const li = document.querySelectorAll("ul li");
// const liArray = Array.from(li);

// function activeLi() {
//   liArray.forEach((li) => {
//     li.classList.remove("active");
//   });
//   this.classList.toggle("active");
// }

// liArray.forEach((li) => {
//   li.addEventListener("click", activeLi);
// });

// const retornoForEach = liArray.forEach((li) => {
//   li.addEventListener("click", activeLi);
// });
// console.log(retornoForEach);

// Map faz exatamente o mesmo que o forEach, pórem ele tem um retono com a variavel atualizada

// const carros = ["Ford", "Fiat", "Honda"];

// const retornoMap = carros.map((carro) => {
//   return carro.concat(li);
// });

// const numeros = [23, 123, 152, 235];
// const numerosMap = numeros.map((n) => n * 2);

// console.log(numerosMap);

// const classes = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const timeClasses = classes.map((item) => item.min);

// const nameClasses = (item) => item.nome;
// const nameClasses2 = function nameClasses2(item) {
//   return item.nome;
// };

// const arrayNameClass = classes.map(nameClasses2);

// .reduce(callback(acumulador, valorAtual, index, array),
// Possui o valor (acumulador), é o retorno da iteração anterior

const classes = [10, 25, 30];

const reduceClasses = classes.reduce((acumulador, item, index, array) => {
  return acumulador + item;
}, 0); // ({}, 0) valor inicial passado para o acumulador

const numbers = [10, 25, 60, 5, 35, 10];

const highestValue = numbers.reduce((previousValue, currentValue) => {
  return previousValue > currentValue ? previousValue : currentValue;
}, 0);
