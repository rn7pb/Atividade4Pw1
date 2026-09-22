### questão 17

o código original usa filter, map e reduce. podemos fazer a mesma operação usando apenas um laço for e uma condição if.

```js
const arr = [10, 15, 22, 34, 45, 60];

let processado = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    const obj = {
      original: arr[i],
      metade: arr[i] / 2,
    };

    processado += obj.metade;
  }
}

console.log(processado);
```

o for percorre todos os elementos do array.

o if verifica quais números são divisíveis por 3. nesse caso, são 15, 45 e 60.

depois, é calculada a metade de cada um:

```
15 / 2 = 7.5
45 / 2 = 22.5
60 / 2 = 30
```

por fim, os valores são somados:

```
7.5 + 22.5 + 30 = 60
```

portanto, o resultado é 60.
