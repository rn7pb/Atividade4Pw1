### questão 19

podemos usar o `reduce()` para percorrer o array e separar as pessoas de acordo com a propriedade cidade.

```js
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

assim, as pessoas de sp ficam juntas, as pessoas de rj ficam juntas e as pessoas de mg ficam juntas.

o resultado será organizado por cidade, por exemplo:

```
sp → ana, bruna
rj → lucas
mg → caio
```
