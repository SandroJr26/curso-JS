// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar() {
//     console.log(this.nome + ' andou');
//   }
// }

function Pessoa(nome, idade) {
  (this.nome = nome),
    (this.idade = idade),
    (this.andou = function () {
      console.log(this.nome + " andou");
    });
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("Jõao", "20");
const maria = new Pessoa("Maria", "30");
const bruno = new Pessoa("Bruno", "15");

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(select) {
  const elementList = document.querySelectorAll(select);
  this.elementList = elementList;
  this.addClass = (classe) => {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = (classe) => {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const li = new Dom("li");

li.addClass("desativado");

li.removeClass("ativado");
