// questão 9
const usuario = {
  nome: "Carlos",
  habilidades: ["JS", "Python", "SQL"],
};

const {
  habilidades: [h1, , h3],
} = usuario;
console.log(h1, h3);
//JS SQL, alternativa a
