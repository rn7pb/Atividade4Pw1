# respostas - questões de array em javascript

## fase 1

Questão 1: b) 5 (o ´push(5)´ adiciona um elemento ao array, que passa a ter 5 elementos.)

Questão 2: c) `['maçã', 'banana']` (o `pop()` remove o último elemento do array, que era 'uva'.)

Questão 3: a) `[20, 30, 40]` (o `shift()` remove o primeiro elemento, que era `10`.)

Questão 4: b) `[0, 1, 2, 3]` (o `unshift(0)` adiciona o `0` no início do array.)

Questão 5: b) `[6, 7]` (o `slice(1)` cria um novo array começando pelo índice `1`.)

Questão 6: b) `[1, 4]` (o `splice(1, 2)` começa no índice `1` e remove dois elementos, `2` e `3`.)

Questão 7: c) 2 (o índice de `'c'` no array é `2`.)

Questão 8: b) `[2, 4, 6]` (o `map()` divide cada elemento por `2`.)

Questão 9: c) `[9, 12]` (o `filter()` mantém apenas os números maiores que `6`.)

Questão 10: d) 12 (o `reduce()` soma `2 + 4 + 6`, resultando em `12`.)

Questão 11: a) true (o `includes()` verifica se `'Lucas'` existe no array e retorna `true`.)

Questão 12: c) `'a-b-c'` (o `join('-')` junta os elementos usando `-` como separador.)

Questão 13: c) `[1, 2, 3, 4, 5]` (o `concat()` junta os dois arrays.)

Questão 14: b) `['z', 'y', 'x']` (o `reverse()` inverte a ordem dos elementos.)

Questão 15: c) 3 (o `find()` retorna o primeiro número que atende à condição `n > 2`.)

## fase 2

### questão 16

o código possui três métodos sendo executados em sequência: filter, map e reduce.

primeiro, o ´filter()´ verifica quais números do array são ímpares. os números ímpares são:

```javascript
[1, 3, 5];
```

depois, o `map()` multiplica cada número por 3:

```javascript
[3, 9, 15];
```

por último, o `reduce()` soma esses valores. como o valor inicial é `10`, a conta fica:

```text
10 + 3 + 9 + 15 = 37
```

portanto, o resultado impresso será `37`.

### questão 17

o código original usa `filter`, `map` e `reduce`. podemos fazer a mesma operação usando apenas um laço `for` e uma condição `if`.

```javascript
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

o `for` percorre todos os elementos do array.

o `if` verifica quais números são divisíveis por 3. nesse caso, são `15`, `45` e `60`.

depois, é calculada a metade de cada um:

```text
15 / 2 = 7.5
45 / 2 = 22.5
60 / 2 = 30
```

por fim, os valores são somados:

```text
7.5 + 22.5 + 30 = 60
```

portanto, o resultado é `60`.

### questão 18

o `splice()` modifica diretamente o array original. por isso, quando usamos:

```javascript
lista.splice(1, 2);
```

ele começa no índice `1` e remove dois elementos.

o array original é:

```text
[4, 8, 12, 16]
```

os elementos `8` e `12` são removidos.

então `lista` passa a ser:

```text
[4, 16]
```

e `r` recebe os elementos removidos:

```text
[8, 12]
```

uma forma de evitar a alteração do array original é criar uma cópia antes de usar `splice()`:

```javascript
const lista = [4, 8, 12, 16];

const copia = lista.slice();
const r = copia.splice(1, 2);
```

outra forma é utilizar `filter()`, que cria um novo array sem modificar o original.

### questão 19

podemos usar o `reduce()` para percorrer o array e separar as pessoas de acordo com a propriedade `cidade`.

```javascript
const grupos = pessoas.reduce((acc, pessoa) => {
  if (!acc[pessoa.cidade]) {
    acc[pessoa.cidade] = [];
  }

  acc[pessoa.cidade].push(pessoa);

  return acc;
}, {});
```

o `reduce()` começa com um objeto vazio.

para cada pessoa, verificamos se já existe um grupo para sua cidade. se não existir, criamos um novo grupo.

depois, a pessoa é adicionada ao grupo correspondente.

assim, as pessoas de `sp` ficam juntas, as pessoas de `rj` ficam juntas e as pessoas de `mg` ficam juntas.

o resultado será organizado por cidade, por exemplo:

```text
sp → ana, bruna
rj → lucas
mg → caio
```

### questão 20

os métodos `find`, `filter` e `some` verificam uma condição, mas possuem resultados diferentes.

`find` retorna o primeiro elemento que atende à condição. nesse caso, o primeiro `8`:

```text
a = 8
```

`filter` retorna todos os elementos que atendem à condição dentro de um novo array. como existem dois `8`:

```text
b = [8, 8]
```

`some` apenas verifica se existe pelo menos um elemento que atende à condição. como existe `8`, o resultado é:

```text
c = true
```

portanto, o resultado final é:

```text
8 [8, 8] true
```

de forma simples:

```text
find   → retorna o primeiro encontrado
filter → retorna todos os encontrados
some   → retorna true ou false
```
