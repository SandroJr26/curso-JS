const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;

const animaisTopo = listaAnimais.offsetTop;
const animaisEsquerda = listaAnimais.offsetLeft;
const raposaH2 = document.querySelector(".animais-descricao h2");
console.log(raposaH2.offsetLeft);
