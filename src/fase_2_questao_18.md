### questão 18

o `splice()` modifica diretamente o array original. por isso, quando usamos:

```js
lista.splice(1, 2);
```

ele começa no índice 1 e remove dois elementos.

o array original é:

```
[4, 8, 12, 16]
```

os elementos 8 e 12 são removidos.

então lista passa a ser:

```
[4, 16]
```

e 'r' recebe os elementos removidos:

```
[8, 12]
```

uma forma de evitar a alteração do array original é criar uma cópia antes de usar `splice()`:

```js
const lista = [4, 8, 12, 16];

const copia = lista.slice();
const r = copia.splice(1, 2);
```

outra forma é utilizar `filter()`, que cria um novo array sem modificar o original.
