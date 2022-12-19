// Retorne no console todas as imagens do site
// const todasImgs = document.querySelectorAll("img");
// console.log(
//   todasImgs.forEach(function (item) {
//     console.log(item);
//   })
// );

// Retorne no console apenas as imagens que começaram com a palavra imagem
// const apenasGa = document.querySelectorAll('img[src^="./img/ga"]');

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector(".animais-descricao");
const primeiroH2 = animais.querySelector("h2");
console.log(animais);
console.log(primeiroH2);

// Selecione o último p do site
const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[paragrafo.length - 1]);
