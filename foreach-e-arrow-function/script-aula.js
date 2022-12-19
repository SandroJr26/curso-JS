const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);
console.log(titulos);

titulosArray.forEach(function (item, i, array) {
  console.log(item, i, array);
});

console.log(titulosArray);

const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, i, array) {
//   // console.log(item, i, array);
// });

imgs.forEach((item, index) => {
  console.log(item, index);
});

// Se no forEach ter somente 1 argumento, não é necessário colocar ()

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => console.log(i++));
