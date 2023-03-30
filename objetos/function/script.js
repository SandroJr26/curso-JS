// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll("p");
const allCharacters = Array.prototype.reduce.call(
  paragraphs,
  (accumulator, item) => {
    return accumulator + item.innerText.length;
  },
  0
);
allCharacters;

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function createElement(tag, classe, content) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : null;
  content ? (element.innerHTML = content) : null;
  return element;
}

// console.log(createElement("div", "ativo", "Esse é o conteudo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1title = createElement.bind(null, "h1", "titulo");

const cursosJs = h1title("Cursos de JavaScript");
const cursosHTML = h1title("Cursos de HTML");
console.log(cursosJs, cursosHTML);
