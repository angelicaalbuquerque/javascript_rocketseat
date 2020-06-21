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
