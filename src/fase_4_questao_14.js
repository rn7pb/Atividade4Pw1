// questão 14
const arr = [1, 2, 3];

const func = ([x, ...resto], y = [...resto, x]) => {
  return y;
};

console.log(func(arr));
//[ 2, 3, 1 ] alternativa a
