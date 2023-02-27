// const h1 = document.querySelector("h1");
// const animaisLista = document.querySelector(".animais-lista");

// h1.innerHTML = "<p>Novo Título</p>";

// const lista = document.querySelector(".animais-lista");
// // console.log(lista.parentElement);
// // console.log(lista.previousElementSibling);
// // console.log(lista.nextElementSibling);
// // console.log(lista.children);
// // console.log(lista.children[0]);

// // console.log(lista.children[lista.children.length - 1]);
// // console.log(lista.querySelector("li:last-child"));

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const tituloContato = contato.querySelector(".titulo");
// const mapa = document.querySelector(".mapa");

// // animais.appendChild(tituloContato); // Move o item entre () para o filho

// // contato.removeChild(tituloContato);

// // contato.replaceChild(lista, tituloContato);

// // contato.insertBefore(animais, mapa);

// const novoh1 = document.createElement("h1");
// novoh1.innerText = "H1 criada na JavaScript";
// novoh1.classList.add("titulo");

// mapa.appendChild(novoh1);

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneh1 = h1.cloneNode(true);

cloneh1.classList.add("azul");
faq.appendChild(cloneh1);
