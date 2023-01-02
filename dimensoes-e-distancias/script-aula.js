const listaAnimais = document.querySelector(".animais-lista");
const animaisTop = listaAnimais.offsetTop;
const primeiroH2 = document.querySelector("h2");
const h2Left = primeiroH2.offsetLeft;
const h2rect = primeiroH2.getBoundingClientRect();
console.log(h2rect.top);
if (h2rect.top < 0) {
  console.log("Passou do elemento");
}
console.log(
  window.innerWidth,
  innerHeight,
  outerWidth,
  outerHeight,
  pageYOffset
);

const small = matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário Mobile");
} else {
  console.log("Usuário Desktop");
}
