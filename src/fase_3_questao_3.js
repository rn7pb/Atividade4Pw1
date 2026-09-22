// questão 3
const pessoa = {
  nome: "Lucas",
  endereco: {
    cidade: "RJ",
    cep: "12345",
  },
};

const {
  endereco: { cidade },
} = pessoa;
console.log(cidade);
//RJ, alternativa a
