// Listar 5 objetos nativos

Object;
Function;
String;
Array;
Number;
Boolean;
Date;

// Liste 5 objetos do browser

Window;
history;
HTMLCollection;
document;
scroll;
NodeList;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof window.Accelerometer !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe");
} else {
  console.log("Não existe");
}
