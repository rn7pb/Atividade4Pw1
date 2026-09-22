// questão 11
const matriz = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const [, [, y], ...resto] = matriz;
console.log(y, resto);
//4 [ [ 5, 6 ] ], alternativa b
