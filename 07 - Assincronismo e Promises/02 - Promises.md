# Promises

## O que são Promises?
Uma **Promise** (promessa) é uma abstração para lidar com operações assíncronas.  
Ela pode estar em um dos três estados:
1. **Pendente**: Quando a operação ainda está em andamento.
2. **Cumprida (Resolved)**: Quando a operação foi concluída com sucesso.
3. **Rejeitada (Rejected)**: Quando a operação falhou.

## Como criar uma Promise?
Uma Promise é criada usando o construtor `Promise()`, onde você fornece uma função que contém o código assíncrono.  
Essa função recebe dois parâmetros: `resolve` e `reject`.

### Exemplo de criação de uma Promise:

```javascript
function saudacaoAsync(nome) {
  return new Promise((resolve, reject) => {
    if (nome) {
      // Se o nome for fornecido, a Promise é cumprida
      resolve(`Olá, ${nome}`);
    } else {
      // Se não houver nome, a Promise é rejeitada
      reject('Nome não fornecido');
    }
  });
}

//Exemplo de uso de Promise:
saudacaoAsync('João')
  .then((resultado) => {
    // Se a Promise for cumprida, o valor retornado é passado para o .then()
    console.log(resultado); // Saída: Olá, João
  })
  .catch((erro) => {
    // Se a Promise for rejeitada, o erro é passado para o .catch()
    console.error(erro); // Saída: Nome não fornecido
  });
```

## Encadeamento de Promises
Quando você tem várias operações assíncronas que dependem umas das outras, pode encadear `.then()` para passar o resultado de uma Promise para a próxima.

```javascript
saudacaoAsync('João')
  .then((resultado) => {
    console.log(resultado); // Saída: Olá, João
    return saudacaoAsync('Maria'); // Retorna uma nova Promise
  })
  .then((resultado2) => {
    console.log(resultado2); // Saída: Olá, Maria
  })
  .catch((erro) => {
    console.error(erro); // Caso algum erro aconteça
  });
```

## Métodos de Promises
`then()`: Usado para tratar o resultado quando a Promise for cumprida.
`catch()`: Usado para tratar erros ou rejeições da Promise.
`finally()`: Executa um bloco de código independentemente de a Promise ser resolvida ou rejeitada.

## Exemplo com métodos `.then()`, `.catch()` e `.finally()`:

```javascript
saudacaoAsync('Carlos')
  .then((resultado) => {
    console.log(resultado); // Saída: Olá, Carlos
  })
  .catch((erro) => {
    console.error(erro); // Caso erro, exibe a mensagem de erro
  })
  .finally(() => {
    // O código dentro do finally será executado sempre, independentemente do sucesso ou falha da Promise
    console.log('Operação concluída!'); // Saída: Operação concluída!
  });
```

## Explicação:
**Criação de uma Promise:** A função saudacaoAsync retorna uma Promise. Se o nome for fornecido, a Promise é cumprida `resolve()`, caso contrário, ela é rejeitada `reject()`.

## Métodos de Promises:

`.then()`: Usado para tratar o resultado de uma Promise quando ela é cumprida. O valor resolvido é passado como argumento para a função dentro do `.then()`.

`.catch()`: Usado para tratar erros ou rejeições da Promise. Se a Promise for rejeitada, o erro é capturado aqui.

`.finally()`: Executado independentemente de a Promise ser cumprida ou rejeitada. Pode ser útil para fazer limpezas ou outras ações, como exibir mensagens de conclusão.

**Encadeamento de Promises:** Quando uma Promise é cumprida, você pode retornar outra Promise dentro de um `.then()`, permitindo que múltiplas operações assíncronas sejam encadeadas de forma sequencial.
