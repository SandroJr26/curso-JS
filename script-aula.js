const animais = document.getElementById("animais");

const gridSection = document.getElementsByClassName("grid-section");

const contato = document.querySelector("#contato");

const primeiraLi = document.querySelector("li");

const linksInternos = document.querySelector('[href^="#"]');

const animaisImg = document.querySelectorAll(".animais img");

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraLi.classList.add("grid-section");

gridSectionNode.forEach(function (item) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
// Transformar Array-like em Array

console.log(arrayGrid);

arrayGrid.pop();

console.log(arrayGrid);
arrayGrid.forEach(function (item) {
  console.log(item);
});
