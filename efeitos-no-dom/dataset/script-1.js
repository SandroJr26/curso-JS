let div = document.querySelector("div");
div = document.querySelector("[data-cor]");
div = document.querySelector("[data-cor='azul']");
div.dataset.height = 1000;
delete div.dataset.width;

// Object.prototype.toString.call(h1);

// div.dataset.cor;

div.dataset.totalHeigth = 2000;

console.log(div.dataset);
