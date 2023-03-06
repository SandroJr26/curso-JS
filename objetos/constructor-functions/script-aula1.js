function Carro() {
  this.marca = "Marca";
  this.modelo = "Modelo";
  this.ano = 2000;
  this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.modelo = "Classic";
honda.ano = 2004;
honda.preco = 12000;

function Carro2(marca, modelo, ano, preco) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = preco;
}

const chevrolet = new Carro2("Chevrolet", "Longo", 2018, 45000);

function Carro3(marca, modelo, ano, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = precoFinal;
}

const hyundai = new Carro3("Hyundai", "Luxo", 2020, 40000);
const Maverik = new Carro3("Maverik", "Stand", 1979, 50000);
