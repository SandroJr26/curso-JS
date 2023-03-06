// const Dom = {
//   selector: "li",
//   element() {
//     return document.querySelector(this.selector);
//   },
//   ativo() {
//     this.element().classList.add("ativo");
//   },
// };

// Dom.ativo();

// Dom.selector = "ul";
// Dom.ativo();

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function () {
    this.element().classList.add("ativar");
  };
}

const ul = new Dom("ul");
ul.ativar();

const li = new Dom("li");
li.ativar();

const liLastChild = new Dom("li:last-child");
liLastChild.ativar();
