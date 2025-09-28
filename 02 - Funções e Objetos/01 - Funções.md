# Funções em JavaScript

## Definição e chamada de funções
Funções são blocos de código que realizam uma tarefa específica. Você pode chamá-las sempre que precisar.

### Exemplo de função simples:
```javascript
function saudacao() {
    console.log("Olá, Mundo!");
}

saudacao(); // Chamando a função
```

### Parâmetros e Retorno de Funções

Funções podem receber parâmetros e retornar valores. Exemplo:
```javascript
function soma(a, b) {
    return a + b; // Retorna a soma de a e b
}

let resultado = soma(3, 4); // Chamando a função com parâmetros 3 e 4
console.log(resultado); // 7
```

### Funções anônimas e expressões de função
Funções podem ser atribuídas a variáveis como expressões. Essas funções são chamadas de "anônimas" porque não têm um nome. Exemplo:
```javascript
const saudacao = function(nome) {
    console.log(`Olá, ${nome}!`);
};
saudacao("João"); // Olá, João!
```

### Arrow Functions (() => {})
As arrow functions oferecem uma forma mais concisa de escrever funções. Exemplo:

```javascript
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}!`);
};
saudacaoArrow("Maria"); // Olá, Maria!
```

### Funções de ordem superior
Funções que recebem outras funções como argumento ou retornam funções são chamadas de funções de ordem superior. Exemplo de função de ordem superior:

```javascript
function executaOperacao(operacao, a, b) {
    return operacao(a, b); // Executa a operação recebida com os parâmetros a e b
}

function soma(x, y) {
    return x + y; // Função soma
}

console.log(executaOperacao(soma, 5, 3)); // 8 (passando a função soma como parâmetro)
```