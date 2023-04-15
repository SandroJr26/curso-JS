const agora = new Date();
const futuro = new Date("Dec 24 2024 04:13:55 GMT-0300");

console.log(agora.getMonth());
console.log(futuro);

function transformarDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

const diasAgora = transformarDias(agora.getTime());
const diasFuturo = transformarDias(futuro.getTime());

console.log(diasFuturo - diasAgora);
