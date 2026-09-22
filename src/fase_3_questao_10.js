// questão 10
const obj1 = { a: 1, b: { x: 10 } };
const obj2 = { ...obj1 };

obj2.b.x = 99;

console.log(obj1.b.x);

//99, alternativa b
