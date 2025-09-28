# Escopo e Closures

## Escopo de variáveis: local e global
O escopo determina onde uma variável pode ser acessada.

### Escopo global:
Variáveis declaradas fora de funções são acessíveis de qualquer lugar.

```javascript
let globalVar = "Eu sou global!";
```

### Escopo local:
Variáveis declaradas dentro de funções são acessíveis apenas dentro dessa função.

```javascript
function test() {
    let localVar = "Eu sou local!";  // Variável local

    // Acessando variáveis dentro da função:
    console.log(globalVar);  // Acessa a variável global
    console.log(localVar);   // Acessa a variável local
}

test();  // Chamando a função test
console.log(globalVar); // Acessa a variável global
// console.log(localVar); // Erro: localVar não está definida fora da função
```

### Funções aninhadas e closures
Closure ocorre quando uma função lembra o ambiente onde foi criada, mesmo após sua execução.

#### Exemplo de closure:
```javascript
function saudacaoExterna(nome) {
    return function() {
        console.log(`Olá, ${nome}`);
    };
}


// A função saudacaoComNome "lembra" do valor de 'nome' da função externa
const saudacaoComNome = saudacaoExterna("João");
saudacaoComNome(); // Olá, João
```





