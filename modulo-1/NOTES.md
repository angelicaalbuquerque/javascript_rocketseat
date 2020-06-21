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

## Condicionais

### if

```Javascript
      function retornaSexo(sexo) {
        //M, F; Masculino, Feminino

        if (sexo === "F") {
          return "Feminino";
        } else {
          return "Masculino";
        }
      }

      var resultado = retornaSexo("F");
      console.log(resultado);
```

Vale ressaltar que "===" verifica se o tipo E o valor das comparações são exatamente iguais.

Abaixo, na primeira vez, comparo se o valor 1 é igual a 1, independente do primeiro ter sido escrito como number e o segundo escrito como string. Como o valor 1 é igual a 1, então é true.

Já na segunda condição, o number pode ter o mesmo valor que a string, porém os tipos são diferentes e por isso é falso.

```Javascript
 1 == "1"; //true
 1 === "1"; //false
```

### else if

```Javascript
      function retornaSexo(sexo) {
        //M, F; Masculino, Feminino

        if (sexo === "F") {
          return "Feminino";
        } else if (sexo === "M") {
          return "Masculino";
        } else {
          return "Outro";
        }
      }

      var resultado = retornaSexo("F");
      console.log(resultado);
```

### switch case

Verificar a igualdade de valores de uma mesma variável múltiplas vezes.

```Javascript
      function retornaSexo(sexo) {
        switch (sexo) {
          case 'M':
            return 'Masculino';
          case 'F':
            return 'Feminino';
          default:
            return 'Outro';
        }
      }
      var resultado = retornaSexo("F");
      console.log(resultado);
```

### Operadores Lógicos

_and_

```Javascript
 var sexo = 'M', idade = 23;
   if ( sexo === 'M' && idade >= 18) {
    console.log('OK');
   }
```

_or_

```Javascript
 var sexo = 'M', idade = 10;
   if ( sexo === 'M' || idade >= 18) {
    console.log('OK');
   }
```

_not_

```Javascript
  if (sexo !== "F") {
    console.log("OK");
  }
```

_Armazenando o valor da condição em uma variável:_

```Javascript
  var sexo = "M";

  var masculino;

      if (sexo === "M") {
        masculino = true;
      } else {
        masculino = false;
      }

  console.log(masculino);
```

Diminuindo o código acima, uma vez que a nossa condição sempre retorna um _true_ e um _false_ e eu estou, nesse caso, fazendo apenas uma condição:

```Javascript
  var sexo = "M";

  var masculino = (sexo === "M");

  console.log(masculino);
```

## Condição ternária

O conceito se aplica quando temos, simplesmente, um _if_ e, logo depois, um _else_; ou seja, quando só temos duas verificações dentro do _if_: se ele está validando ou não uma condição.

```Javascript
  var sexo = "M";

  var retorno = sexo === "M" ? "Masculino" : "Feminino";

  console.log(retorno);
```

## Estruturas de repetição

### for

No _for_, cria-se um intervalo. Por exemplo, intervalo do número 0 até o número 100:

Defino o valor inicial da variável como 0, aplico a condição (enquanto o i for menor que 100) e faço a soma da unidade a mais na variável inicial.

```Javascript
   for (var i = 0; i <= 100; i++) {
      console.log(i);
  }
```

### while

Para criar um _while_, fazemos deste modo: iniciamos a variável contadora, escrevemos _while_ e passamos nossa condição dentro de parênteses. Já dentro do corpo da função, aplicamos o incremento.

```Javascript
      var j = 0;
      while (j <= 100) {
        console.log(j);

        j++;
      }
```

### Quando devo utilizar _for_ e _while_?

É recomendável utilizar _for_ sempre que souber o tamanho do intervalo. Já o _while_ é utilizado, normalmente, quando não sabemos quantas vezes o fluxo será utilizado.

Por exemplo, você consegue adivinhar quantas vezes o código abaixo será executado para que _j_, dividido por 5, chegue a um número menor que 50? Acredito que não. Por isso, é recomendado o _while_.

```Javascript
      var j = 219345872;
      while (j > 50) {
        console.log(j);

        j /= 5;
      }
```

## Intervalo e timeout

### setInterval()

Um intervalo, dentro do JS, é alguma função que executa várias vezes dentro de um intervalo.

Defino um intervalo com _setInterval()_. Dentro dos parênteses passo a função e o valor do intervalo que quero executá-la.

Por exemplo, exibo algo a cada 1s:

```Javascript
  function exibeAlgo() {
    console.log('Hello, World!');
  }

  setInterval(exibeAlgo, 1000);
```

Atenção: se eu abrisse e fechasse parênteses em _exibeAlgo_ dentro do _setInterval_, estaria executando a função e não faria a referência da função. Quando, então, quero passar a função como parâmentro para alguma coisa, eu não utilizo parênteses.

### setTimeOut()

Em vez de executar várias vezes o script, ele vai executar apenas uma vez, porém, aplicará um delay (tempo de espera) de x segundos antes de executar essa função.

Se eu quero que o script execute algo 5s depois:

```Javascript
  function exibeAlgo() {
    console.log('Hello, World!');
  }

  setTimeout(exibeAlgo, 5000);
```
