// Retorne um número aleatório
// entre 1050 e 2000
const random = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
random;

// Retorne o maior número da lista abaixo
const number = "R$4, 5, 20, 8, 9";
const arrayNumber = number.split(", ");
const numberMax = Math.max(...arrayNumber); // ... spread que passa por casa item da array
// console.log(...arrayNumber);
numberMax;

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listPrice = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(price) {
  price = +price.toUpperCase().replace("R$ ", "").trim().replace(",", ".");
  price = +price.toFixed(2);
  return price;
}

let sum = 0;
listPrice.forEach((item) => {
  sum += limparPreco(item);
});

let sumFormated = sum.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
limparPreco(listPrice[0]);

console.log(sumFormated);
