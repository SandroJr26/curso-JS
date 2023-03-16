// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const courses = document.querySelectorAll(".curso");
const arrayCouses = Array.from(courses);

const objectCouses = arrayCouses.map((course) => {
  const title = course.querySelector("h1").innerText;
  const description = course.querySelector("p").innerText;
  const classes = course.querySelector(".aulas").innerText;
  const hour = course.querySelector(".horas").innerText;
  return {
    title,
    description,
    classes,
    hour,
  };
});

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const numberGreat100 = numeros.filter((number) => {
  return number > 100;
});

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const includeBaixo = instrumentos.some((instrumento) => {
  return instrumento === "Baixo";
});
console.log(includeBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const allPrice = compras.reduce((acumulator, item) => {
  const priceFormated = +item.preco.replace("R$", "").replace(",", ".");
  return acumulator + priceFormated;
}, 0);

console.log(allPrice);
