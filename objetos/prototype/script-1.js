function Person(name, age) {
  this.name = name;
  this.age = age;
  this.abracar = function () {
    return `${name} abraçou o seu amigo.`;
  };
}

Person.prototype.andar = function () {
  return `${this.name} andou.`;
};

Person.prototype.nadar = function () {
  return `${this.name} nadou.`;
};

Person.prototype.idade = function () {
  return `${this.name} tem ${this.age} anos de idade.`;
};

Person.prototype.correr = function () {
  return `${this.name} correu.`;
};

const sandro = new Person("Sandro", 26);

// console.log(Person.prototype); // "Person" is a constructor
// console.log(sandro.prototype); // "sandro" is a object

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = [
  "Gato",
  "Cachorro",
  "Rinoceronte",
  "Galinha",
  "Zebra",
  "Coelho",
];

const listaItens1 = document.querySelectorAll("li");
const listaItens2 = document.querySelectorAll("li");

const listaArray1 = Array.prototype.slice.call(listaItens1);
const listaArray2 = Array.from(listaItens2);

const Carro = {
  marca: "Ford",
  preco: '45000',
  andar() {
    return true;
  },
};
