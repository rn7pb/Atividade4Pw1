// questão 1
const usuario = { nome: "Ana", idade: 28, cidade: "SP" };
const { nome, ...resto } = usuario;
console.log(nome, resto);
//Ana { idade: 28, cidade: 'SP' }, alternativa a
