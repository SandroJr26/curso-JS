const contato = document.querySelector("#contato");
const texto = document.querySelector(".texto");
const dados = {};

contato;
document.forms[0];

document.forms[0].mensagem;

function handleChange(event) {
  // formulario
  // const target = event.target;
  //  const span = document.querySelector(".erro");
  // if (!target.checkValidity()) {
  //   target.classList.add("invalido");
  //   contato.nome.setCustomValidity("Nome é necessário!");
  //   contato.email.setCustomValidity(
  //     "Necessário um email válido: contato@email.com"
  //   );
  //   target.nextElementSibling.innerText = target.validationMessage;
  // }
  // console.log(target.checkValidity());
  // texto.innerText = target.value;
  // select
  // document.body.style.backgroundColor = event.target.value;
  // types of input
  // event.target.value;
  // checkbox
  // if (event.target.checked) {
  //   console.log(event.target.value);
  // }

  // dica para selecionar todos de uma vez
  dados[event.target.name] = event.target.value;

  console.log(dados);
}

("keyup"); // digito de tecla
contato.addEventListener("change", handleChange);
