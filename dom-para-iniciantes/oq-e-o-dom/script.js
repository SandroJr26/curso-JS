// Retorne o url da página atual utilizando o objeto window
const href = location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const elementoAtivo = document.querySelectorAll(".ativo");
console.log(elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);

if (linguagem === "pt-BR") {
  console.log("PT-BT");
}

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura);
