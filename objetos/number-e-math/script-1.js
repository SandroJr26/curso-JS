const number = 26;
const numberObject = Number(27);

Number.isNaN(NaN);

Number.isInteger(number);

const numberString = "1209.234212.00";

parseFloat(numberString);
Number.parseFloat(numberString);
Number.parseInt(numberString);

parseInt(numberString, 10);

let numberFormated = parseFloat(numberString);

+numberFormated.toFixed(2); // toFixed retorna string, "+" tranforma em numero

numberFormated = numberFormated.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

Math.PI.toFixed(2);
Math.abs(-5); // 5 .abd retorna o mesmo valor porem positivo
Math.ceil(2.78); // 3 .ceil arredonda para cima
Math.floor(4.9); // 4 .floor arredonda para baixo
Math.round(4.8); // 5 .round arredenda para o nmr mais proximo
Math.max(0, 18, 23, 16, 123, 152); // 152 .max retorna o maior nmr
Math.min(0, 18, 23, 16, 123, 152); // 0 .max retorna o menor nmr
Math.random() * 10;

const numberRandom = Math.floor(Math.random() * 100);

const numberRandom0a26 = Math.floor(Math.random() * (26 - 0 + 1)) + 0;
console.log(numberRandom0a26);
