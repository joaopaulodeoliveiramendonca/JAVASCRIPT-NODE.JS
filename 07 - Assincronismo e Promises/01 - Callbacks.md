# Callbacks

## O que são Callbacks?
Um callback é uma função passada como argumento para outra função. Essa função é executada quando a tarefa assíncrona é concluída.  
Em JavaScript, o callback é muito utilizado em operações assíncronas, como leitura de arquivos, requisições HTTP, etc.

### Exemplo de callback:

```javascript
// Função que recebe um nome e um callback
function saudacao(nome, callback) {
  console.log(`Olá, ${nome}`);  // Exibe a saudação
  callback();  // Chama o callback passado como argumento
}


// Função de despedida
function despedida() {
  console.log('Até logo!');  // Exibe a despedida
}

// Chamando a função saudacao e passando a função despedida como callback
saudacao('João', despedida);  
// Saída:
// Olá, João
// Até logo!
```

## Problemas com Callbacks (Callback Hell)
Quando você tem muitas operações assíncronas encadeadas com callbacks, o código pode se tornar difícil de ler e manter. Isso é chamado de Callback Hell (inferno dos callbacks).

### Exemplo de Callback Hell:

```javascript
const fs = require('fs');

fs.readFile('arquivo1.txt', (err, data1) => {  // Primeira operação assíncrona
  if (err) throw err;
  fs.readFile('arquivo2.txt', (err, data2) => {  // Segunda operação assíncrona
    if (err) throw err;
    fs.readFile('arquivo3.txt', (err, data3) => {  // Terceira operação assíncrona
      if (err) throw err;
      // Continuar processando os dados...
    });
  });
});
```

## Explicação:
**Callback:** A função saudacao recebe uma função callback como argumento e a executa após exibir uma saudação. A função despedida é passada como o callback e é executada depois que a saudação é mostrada.

**Callback Hell:** O exemplo de Callback Hell mostra como o código pode ficar difícil de ler e manter quando muitas operações assíncronas (como a leitura de arquivos) são encadeadas com callbacks. Cada nova operação adiciona uma nova camada de indentação, o que torna o código cada vez mais complexo e propenso a erros.

## Solução para Callback Hell
Para resolver o problema de Callback Hell, você pode usar Promises ou async/await, que ajudam a melhorar a legibilidade e o controle de fluxo do código assíncrono.
