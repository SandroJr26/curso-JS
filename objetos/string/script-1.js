const food = "Pizza";
const liquid = new String("Agua");
const year = new String(2018);
const frase = "A melhor linguagem é: ";
const linguagem = "JavaScript ";

food[0];
food[1];
food[2];
food[3];
food[4];
food.length;
frase[frase.length - 1];

year.charAt(0);
year.charAt(year.length - 1);

const fraseFinal = frase.concat(linguagem, year);

fraseFinal;

const fruta = "Maça";
const listaFrutas = "Melancia, Banana, Laranja, Maça, Pera";

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

listaFrutas.includes(fruta, 27); // true

fruta.startsWith("Ma"); // true
fruta.endsWith("ças"); // false

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

transacao1.slice(0, 5); // Depós
transacao2.slice(0, 7); // Depósit
transacao3.slice(0, 6); // Taxa d
transacao3.slice(0, -4); // Taxa de cam
transacao3.slice(-4); // isas

listaFrutas.indexOf("a"); // 3

listaFrutas.lastIndexOf("a"); // 36

const preco = "R$ 99,00";

preco.padStart(20, "."); // '............R$ 99,00'
preco.padEnd(20, "."); // 'R$ 99,00............'

const listaPrecos = ["R$ 99,99", "R$ 199,20", "R$ 299,70"];

listaPrecos.forEach((item) => {
  item.padStart(20, "-");
});

const palavra = "Ok";

palavra.repeat(6); // OkOkOkOkOkOk

let listaItens = "Camisas Calças Blusas Sapatos";
listaItens = listaItens.replace(/[ ]+/g, ", ");

let precoEdit = "R$ 299,90";

precoEdit = precoEdit.replace(",", ".");

const arrayList = listaItens.split("s, ");

const htmlText = "<div> O melhor Item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div"); // tira a tag div do html
const novoHtml = htmlArray.join("section"); // inclui a tag section no html

const frutasArray = ["Banana", "Melancia", "Maça"];
frutasArray.join(", ");

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

sexo1.toLowerCase() === "feminino"; // true
sexo1.toUpperCase() === "FEMININO"; // true

const valor = " R$ 60,00 ";
valor.trim(); // "R$ 60,00"
valor.trimStart(); // "R$ 60,00 "
valor.trimEnd(); // " R$ 60,00"
