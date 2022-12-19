// console.log(window.alert("Aprendendo sobre o DOM"));
console.log(window.location.href);

const href = window.location.href;

console.log(`O href da pagina é ${href}`);

if (href === "http://127.0.0.1:5500/oq-e-o-dom/") {
  console.log("hahah");
} else {
  console.log("kkk");
}

const titulo = document.querySelector("h1");
console.log(titulo);

console.log(document.body);

// alert("Teste do Window"); // Não é necessario colocar window.alert('') pq o windown é um objeto global

const h1Class = titulo.classList;

console.log(h1Class);

function callbackh1() {
  console.log(`Clicou em `, titulo.innerHTML);
}

titulo.addEventListener("click", callbackh1);
