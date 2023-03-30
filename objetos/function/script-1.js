function squareArea(lado) {
  return lado * 4;
}

const squarePerimeter = new Function("lado", "return lado * 4");

function sum(n1, n2) {
  return n1 + n2 + "Teste";
}

sum(2, 4).charAt(2); // e
sum.length; // 2 - total de argumentos
sum.name.toUpperCase(); // SUM

// CALL executa a função, sendo possível passarmos uma nova referência ao this da mesma.
// call(null, 'bla bla bla') null quando não houver troca

function hello(name) {
  console.log("Hello " + name);
}

// hello("Sandro");
// hello.call(null, "Rafael");

// errado se fazer, somente demonstração
// window.marca = "Volkswagem";
// window.age = 2021;

function descriptionCar(speed) {
  console.log(this.marca + " " + this.age + " " + speed);
}

// descriptionCar.call({ marca: "Honda", age: 2020 }, 100);

const cars1 = ["Ford", "Fiat", "Vw"];
const cars2 = ["Maverik", "Gol", "Impala"];

// metodo call substitiu
cars1.forEach.call(cars2, (item) => {
  // console.log(item);
});

function Dom(selector) {
  this.element = document.querySelectorAll(selector);
}

const ul = new Dom("ul");
// const li = new Dom("li");
const li = {
  element: document.querySelectorAll("li"),
};

Dom.prototype.ativo = function (classe) {
  this.element.forEach((item) => {
    item.classList.toggle(classe);
  });
};

// ul.ativo("ativo");
// ul.ativo.call(li, "ativo");

// chamar a função direto do prototipo
Dom.prototype.ativo.call(ul, "ativo");

const fruits = ["Banana", "Maça", "Pêra"];

Array.prototype.pop.call(fruits);
fruits.pop();

// const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  3: "Item 4",
  4: "Item 5",
  length: 5,
};

// const filter1 = Array.prototype.filter.call(li, (item) => {
//   return item.classList.contains("ativo");
// });

// const filter2 = arrayLi.filter((item) => {
//   return item.classList.contains("ativo");
// });

// Apply a diferença entre o call é que os argumentos da função são passadas através de uma array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

Math.max.call(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
Math.max.apply(null, numbers);

// Bind não irá retornar a função mas sim retornar a função com o novo contexto de this
const filter1 = Array.prototype.filter.bind(li, (item) => {
  return item.classList.contains("ativo");
});

const $ = document.querySelectorAll.bind(document);

$("li");

const car = {
  marca: "Ford",
  age: 2020,
  speedUp: function (acceleration, time) {
    return `${this.marca} acelerou ${acceleration}Km em ${time} minutos!`;
  },
};

const honda = {
  marca: "Honda",
};

const accelerationHonda = car.speedUp.bind(honda);

car.speedUp(140, 30);
accelerationHonda(150, 40);

function imc(altura, peso) {
  return peso / (altura * altura);
}
const imc183 = imc.bind(null, 1.83);

imc(1.83, 79);
imc183(79);
