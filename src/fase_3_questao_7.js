// questão 7
const config = { tema: "escuro", fonte: "Arial", tamanho: 14 };
const { tema: modo, ...opcoes } = config;
console.log(modo, opcoes.fonte);
//escuro Arial, alternativa a
