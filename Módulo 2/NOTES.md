# Módulo 2: Manipulando a DOM

## Estrutura do app

A DOM é a árvore de elementos, ou seja, é composta por todos os elementos dispostos em tela. E o Javascript pode controlá-la.

Por exemplo, podemos manipular quando um botão é clidado,saber quando o usuário passou o mouse por cima ou quando digitou em um input.

```Javascript
  function mostraAlerta() {
    alert("Botão foi clicado");
  }
```

### Alert ao click do botão

```HTML
  <body>
    <div id="app">
      <button onclick="mostraAlerta()">Me pressione</button>
    </div>
```

A função _mostraAlerta()_ é ativado no _onclick_ do botão.

### Alert ao passar o mouse

```HTML
  <body>
    <div id="app">
      <button onmouseover="mostraAlerta()">Me pressione</button>
    </div>
```

A função _mostraAlerta()_ é ativado no _onmouseover_ do botão.

### Alert ao pressionar uma tecla

```HTML
  <body>
    <div id="app">
      <input type="text" onkeypress="mostraAlerta()" />
    </div>
```

A função _mostraAlerta()_ é ativado no _onkeypress_ do input.

Os eventos aprendidos nessa aula podem ser utilizados em qualquer outro elemento da DOM.
