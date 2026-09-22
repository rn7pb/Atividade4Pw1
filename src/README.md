# ArrayListJs

Tutorial sobre como manipular listas em Javascript usando map, filter e reduce.

## O que sao listas

Listas em Javascript sao chamadas de arrays. Elas podem guardar varios valores em uma unica variavel.

Exemplo:

```javascript
const frutas = ["maca", "banana", "laranja"];

console.log(frutas);
```

Podemos acessar um valor usando sua posicao.

```javascript
const frutas = ["maca", "banana", "laranja"];

console.log(frutas[0]);
```

Resultado:

```javascript
maca;
```

## Map

O map e usado para passar por todos os valores de uma lista e criar uma nova lista com os valores modificados.

Exemplo:

```javascript
const numeros = [1, 2, 3, 4];

const dobro = numeros.map((numero) => numero * 2);

console.log(dobro);
```

Resultado:

```javascript
[2, 4, 6, 8];
```

Neste exemplo o map pegou cada numero da lista e multiplicou por 2.

Outro exemplo:

```javascript
const nomes = ["ana", "joao", "carlos"];

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());

console.log(nomesMaiusculos);
```

Resultado:

```javascript
["ANA", "JOAO", "CARLOS"];
```

## Filter

O filter e usado para selecionar valores de uma lista que atendem a uma condicao.

Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);
```

Resultado:

```javascript
[2, 4, 6];
```

Neste exemplo o filter selecionou somente os numeros pares.

Outro exemplo:

```javascript
const numeros = [5, 10, 15, 20, 25];

const maiores = numeros.filter((numero) => numero > 15);

console.log(maiores);
```

Resultado:

```javascript
[20, 25];
```

## Reduce

O reduce e usado para juntar os valores de uma lista e gerar um unico resultado.

Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((total, numero) => total + numero, 0);

console.log(soma);
```

Resultado:

```javascript
15;
```

Neste exemplo o reduce somou todos os numeros da lista.

Outro exemplo:

```javascript
const numeros = [10, 20, 30];

const soma = numeros.reduce((total, numero) => total + numero, 0);

console.log(soma);
```

Resultado:

```javascript
60;
```

## Usando map filter e reduce

Os tres metodos tambem podem ser usados juntos.

Exemplo:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros
  .filter((numero) => numero % 2 === 0)
  .map((numero) => numero * 2)
  .reduce((total, numero) => total + numero, 0);

console.log(resultado);
```

Resultado:

```javascript
24;
```

Neste exemplo:

O filter pega os numeros pares.

O map multiplica os numeros por 2.

O reduce soma os resultados.

## Resumo

map

Usado para modificar os valores de uma lista.

filter

Usado para selecionar valores de uma lista.

reduce

Usado para juntar os valores de uma lista e gerar um resultado.

## Conclusao

Os metodos map, filter e reduce facilitam o trabalho com listas em Javascript.

Eles podem ser usados separadamente ou juntos para realizar diferentes operacoes com os dados de uma lista.
