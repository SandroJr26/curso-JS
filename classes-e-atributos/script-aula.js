const menu = document.querySelector(".menu");
menu.classList.add("ativo", "teste");
menu.classList.remove("azul");
menu.classList.toggle("amarelo");
menu.classList.toggle("verde");
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui");
}
// console.log(menu.classList);

// Modo antigo de adição de nova classes
menu.className = "ativo teste azul";
// console.log(menu.className);

const animais = document.querySelector(".animais");
// console.log(animais.attributes["data-texto"]);

const img = document.querySelector("img");
const srcImg = img.getAttribute("alt");
img.setAttribute("alt", "É uma raposa");
const possuiAlt = img.hasAttribute("alt", "É uma raposa");
if (possuiAlt) {
  console.log("Sim, possui");
} else {
  console.log("Não possui");
}
console.log(srcImg);

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}km`);
  },
};
console.log(carro.portas);
console.log(carro.andar(13));
carro.portas += 20;
console.log(carro.portas);
