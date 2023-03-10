


// Metodos que modificam a array
const intrumentos = [
  "Guitarra",
  "Violão",
  "Cavaquinho",
  "Bateria",
  "Baixo",
  "Flauta",
];

intrumentos.pop();
intrumentos.shift();
intrumentos.push("Guitarra");

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

dados[2]("Sandro Jr");

const carros = new Array("Mustang", "Ferrari", "Saveiro", "Gol", "Parati");

carros.length;

if (carros[4] === "Parati") {
  carros.pop();
}

carros.length;

const li = document.querySelectorAll("li");
const liArray = Array.from(li);

const obj = {
  0: "Sandro",
  1: "Junior",
  2: "Teste",
  length: 4,
};

obj[3] = "HAHA";
const objArray = Array.from(obj);

Array.of(10);
Array(10);

const frutas = ["Banana", "Maça", "Pera", ["Uva roxa", "Uva Verde"]];

frutas[3][1]; // Uva roxa

frutas.sort(); // ordem alfabetica
frutas.unshift("Melancia"); // adiciona ao inicio
frutas.push("Morango", "Tomate"); // adiciona ao final
frutas.pop(); // retira o ultimo item da array
frutas.shift(); // retira o 1° item
frutas.reverse(); // inverte a ordem da array

const carros2 = ["Ford", "Maverik", "Impala", "Gol", "Opala"];

carros2.splice(4, 0, "D20", "Mustang"); // .splice(a partir, remove, itens add)
carros2.splice(0, 1, "S10", "Jaguá");

carros2;

const itens = [
  "Item1",
  "Item2",
  "Item3",
  "Item 4",
  "Item5",
  "Item6",
  "Item7",
  "Item8",
];

itens;
itens.copyWithin(2, 0, 6); // .copyWithin(a partir, remove, passa novamente X itens da array)

itens.fill("Mandioca", 6, 7); // .fill(add ' ' na array, a partir, para de add)

itens.push(carros2);

itens[8][3]; // Impala

// Metodos que não modificam a array
const transport1 = ["Barco", "Avião"];
const transport2 = ["Carro", "Moto"];
const transport3 = [].concat(transport1, transport2, "Bicicleta");
const transport = transport1.concat(transport2);

let linguagens = ["html", "csS", "js", "pHp", "phytOn"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false retorna booleano
linguagens.indexOf("phyton"); // 4
linguagens.indexOf("laraval"); // retorna -1 em item que não existe
linguagens.indexOf("js"); // 2 retorna o primeiro index
linguagens.lastIndexOf("js"); // retorna o index do ultimo

linguagens.join(); // juntar todo array (' ')
linguagens.join(" | "); // 'html | css | js | php | phyton | js'

linguagens.join(" | ").toUpperCase(); // 'HTML | CSS | JS | PHP | PHYTON | JS'

let htmlString = "<h2>Título principal</h2>";
htmlString = htmlString.split("h2"); // remove o h2
htmlString = htmlString.join("h1"); // add o h1

linguagens.slice(2); // ['js', 'pHp', 'phytOn'] // retorna a array a partir do index ,  até o index
linguagens.slice(1, 3); // ['csS']

const cloneLinguagens = linguagens.slice(); // .slice() usado para clone
