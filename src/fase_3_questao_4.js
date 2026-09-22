// questão 4
const base = { a: 1, b: 2 };
const extra = { b: 3, c: 4 };
const combinado = { ...base, ...extra };
console.log(combinado);
//{ a: 1, b: 3, c: 4 }, alternativa b
