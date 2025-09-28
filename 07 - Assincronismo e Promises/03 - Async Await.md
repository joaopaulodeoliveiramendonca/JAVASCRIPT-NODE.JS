# Async/Await

## O que é Async/Await?
`async` e `await` são palavras-chave que permitem escrever código assíncrono de forma mais síncrona, ou seja, mais fácil de ler e entender.  
- **`async`** é usado para declarar funções que irão retornar `Promises`.  
- **`await`** é usado dentro de uma função `async` para esperar que a `Promise` seja resolvida.

## Exemplo básico de Async/Await

### Função assíncrona que retorna uma `Promise`:
```javascript
// Função assíncrona que retorna uma Promise
async function saudacaoAsync(nome) {
  if (nome) {
    // Se o nome for fornecido, retorna a saudação
    return `Olá, ${nome}`;
  } else {
    // Se não houver nome, lança um erro
    throw new Error('Nome não fornecido');
  }
}
```

### Função assíncrona que usa `await` para aguardar a resolução da saudacaoAsync:

```javascript
// Função assíncrona que usa await para aguardar a resolução da saudacaoAsync
async function executar() {
  try {
    // Usando await para aguardar a resolução da Promise retornada por saudacaoAsync
    const resultado = await saudacaoAsync('João');
    console.log(resultado);  // Saída: Olá, João
  } catch (erro) {
    // Captura qualquer erro que ocorra dentro do try
    console.error(erro);  // Saída: Nome não fornecido (caso o nome não seja fornecido)
  }
}

// Chamando a função executar para rodar o exemplo
executar();
```

## Explicação:
`async`: A palavra-chave async é usada para declarar funções que retornam uma Promise. Mesmo que você não retorne explicitamente uma Promise, o valor retornado por uma função async será automaticamente envolvido em uma Promise.

`await`: A palavra-chave await pode ser usada dentro de uma função async para esperar a resolução de uma Promise. Isso faz com que a execução do código "pause" até que a Promise seja resolvida ou rejeitada, mas sem bloquear o restante do programa.

**Função saudacaoAsync:** Essa função é assíncrona e retorna uma saudação se o nome for fornecido ou lança um erro se o nome estiver ausente. A função executar é marcada como async e usa await para esperar a resolução de `saudacaoAsync('João')`.

**Tratamento de erros:** Dentro da função executar, o `try...catch` é utilizado para capturar qualquer erro que possa ocorrer durante a execução da função assíncrona. Isso permite lidar com erros de forma mais controlada.

**Vantagens do Async/Await:** Legibilidade: O código fica mais fácil de entender e escrever, já que parece mais com código síncrono, mas ainda assim mantém o comportamento assíncrono.

**Controle de Fluxo:** Usar `await` faz com que o código pareça sequencial, sem a necessidade de encadeamento de `.then()` e `.catch()`.