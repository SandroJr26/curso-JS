// const cars = ["Ford", "Fiat", "Honda"];

// cars.forEach((car, index, array) => {
//   // array[index] = ["Error Array"];
//   // console.log(car.toUpperCase());
// });

// const li = document.querySelectorAll("li");

// li.forEach((itemLi) => itemLi.classList.add("active"));
// desativado;

// li.forEach((itemLi) => {
//   itemLi.classList.add("disabled");
// });

// const retornoForEach = li.forEach(function (itemLi) {
//   itemLi.classList.add("Desativado");
// }); // ForEach retorna sempre undefined

// MAP
// const newArray = cars.map((car, index) => {
//   return car.toUpperCase() + " " + index;
// });

// const numbers = [12, 42, 15, 61];

// const numbersX2 = numbers.map((n) => {
//   return n * 2;
// });

// const aulas = [
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

// const timeClasses = aulas.map((item) => console.log(item.min));

// const nameClasses = function (aula) {
//   return aula.nome;
// };

// const nameClasses2 = (aula) => aula.nome;

// const arrayNameClasses = aulas.map(nameClasses2);

// REDUCE

// const aulas = [10, 25, 30];

// const reduceAulas = aulas.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 0);

// // 1
// aulas.reduce((0, 10) => {
//   return 0 + 10;
// }, 0); // retorna 10

// // 2
// aulas.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

// const numbers = [23, 14, 265, 235, 267, 236, 34, 1233];

// const higherNumber = numbers.reduce((previous, current) => {
//   if (previous > current) {
//     return previous;
//   } else {
//     return current;
//   }
//   // return previous > current ? previous : current;
// });

// const aulas = [
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

// let acumulador = {};
// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   // console.log(aula.nome);
//   acumulador[index] = aula.nome;
//   // console.log(acumulador);
//   return acumulador;
// }, {});

// // 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// // 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// // 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// // 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})

// const fruits = ["Banana", "", "Pear", "Grape"];

// // some retorna true caso tenha um verdadeiro
// const haveGrape = fruits.some((item) => {
//   return item === "Grape";
// });

// // every retorna false caso tenha um falso
// const every = fruits.every((item) => {
//   return item;
// });

// const indexUva = fruits.findIndex((item) => {
//   return item === "Grape";
// });

// const numbers = [23, 14, 265, 235, 267, 236, 34, 1233];

// const maiorQue3 = numbers.every((n) => n >= 14);

// const fruitsFalse = ["Banana", "Maçã", null, undefined, 0, "", "Tomate"];
// const arrayClean = fruitsFalse.filter((fruit) => {
//   return fruit;
// });

// console.log(arrayClean);

// const numbers2 = [23, 53, 61, 12, 66, 12, 2, 421, 32, 14];
// const numberGreat26 = numbers2.filter((number) => {
//   return number > 26;
// });

// const aulas = [
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

// const great15Min = aulas.filter((number) => {
//   return number.min > 15;
// });
