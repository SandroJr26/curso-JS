// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

Pessoa.prototype.allName = function () {
  return `${this.name} ${this.lastName} tem ${this.age} anos`;
};

const sandro = new Pessoa("Sandro", "Júnior", 26);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList);
Object.getOwnPropertyNames(HTMLCollection);
Object.getOwnPropertyNames(Document);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; // HTMLLIElement
li.click; // Função
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
