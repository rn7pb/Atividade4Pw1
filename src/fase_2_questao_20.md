### questão 20

os métodos find, filter e some verificam uma condição, mas possuem resultados diferentes.

find retorna o primeiro elemento que atende à condição. nesse caso, o primeiro 8:

```
a = 8
```

filter retorna todos os elementos que atendem à condição dentro de um novo array. como existem dois 8:

```
b = [8, 8]
```

some apenas verifica se existe pelo menos um elemento que atende à condição. como existe 8, o resultado é:

```
c = true
```

portanto, o resultado final é:

```
8 [8, 8] true
```

de forma simples:

```
find   → retorna o primeiro encontrado
filter → retorna todos os encontrados
some   → retorna true ou false
```
