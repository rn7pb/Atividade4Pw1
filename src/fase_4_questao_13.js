// questão 13
const dados = { a: 1, b: 2, c: 3 };

function processar({ a, ...resto }) {
  resto.c = 99;
  return [a, resto];
}

const r = processar(dados);
console.log(dados.c, r[1].c);
//3 99, alternativa a
