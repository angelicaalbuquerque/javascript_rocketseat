# Módulo 1 - Introdução

## Variáveis e Dados

Javascript não possui tipagem estática e sim dinâmica, conseguimos atribuir valores de diferentes formatos para a mesma variável.

Os principais tipos de variáveis que usamos no JavaScript são: string, int, float, boolean; posso também incluir vetores, objetos (variáveis que guardam mais de um valor).

## Operações Matemáticas

Se somarmos uma string com número, ela resultará em uma string e não na soma propriamente desejada. Por exemplo "10" + 5 não seria 15, mas sim "105".

Podemos fazer todas as operações normais: soma, divisão, multiplicação, redução e também a operação de módulo, que retorna o resto de uma divisão, muito útil para verificar números pares, por exemplo.

Podemos incrementar um valor do seguinte modo, evitando a repetição da variável:

```Javascript
  var x = 10,
      x += 3; //x = x + 3

  console.log(x) // 13
```

Eu posso, inclusive, utilizar outras variáveis, por exemplo:

```Javascript
  var x = 10,
      y = 5;

      x *= y;
      console.log(x); //50
```

## Funções

Para criarmos uma função, precisamos definir a palavra-chave <strong>function</strong>, definir o nome da função e adicionar parênteses (e, dentro dos mesmos, definir os parâmetros que vamos receber, se for o caso) e abrir/fechar chaves para inserir o corpo da função e o que ela vai executar quando for chamada.

```Javascript
 function soma(numero1, numero2) {
   var resultado = numero1 + numero2

   return resultado;
 }

  var resultado = soma(5, 10);
   console.log(resultado);
```

o <strong>var resultado</strong> foi definido em dois locais porque se eu apenas mostrar <strong>console.log(resultado)</strong>, mesmo chamando <strong>soma</strong>, a mensagem de retorno será "<strong>resultado não foi definido</strong>".

Quando definimos uma variável utilizando o <strong>var</strong>, ela é visível somente dentro da função <strong>soma</strong> e não fora dela; então podemos definir o nome da mesma variável fora da função para termos o resultado.
