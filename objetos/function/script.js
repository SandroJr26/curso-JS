const paragraphs = document.querySelectorAll("p");

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const allCharacters = Array.prototype.reduce.call(
  paragraphs,
  (accumulator, item) => {
    return accumulator + item.innerText.length;
  },
  0
);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function createElement(tag, classe, content) {
  const element = document.createElement(tag);
  classe ? element.classList.add(classe) : "";
  content ? (element.innerHTML = content) : "";

  return element;
}
createElement("ul", "teste", "Esse é o conteudo");

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Title = createElement.bind(null, "h1", "titulo");
const cursoJS = h1Title("Cursos de JavaScript");
const cursoHTML = h1Title("Cursos de HTML");

console.log(cursoJS, cursoHTML);
