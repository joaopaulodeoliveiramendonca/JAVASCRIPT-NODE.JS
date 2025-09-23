// Objetos e Arrays

// Criando e manipulando objetos
// Objetos em JavaScript são coleções de pares chave-valor. Cada chave é uma string, e o valor pode ser qualquer tipo de dado.

// Exemplo de objeto:
let pessoa = {
    nome: "João",  // Chave "nome" com o valor "João"
    idade: 30,     // Chave "idade" com o valor 30
    saudacao: function() {  // Chave "saudacao" com uma função como valor
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

// Acessando valores do objeto:
console.log(pessoa.nome); // João

// Chamando o método (função) do objeto:
pessoa.saudacao(); // Olá, meu nome é João

// Métodos de objetos
// Métodos são funções que estão dentro de objetos. No exemplo acima, a função "saudacao" é um método do objeto "pessoa".

// Arrays e seus métodos
// Arrays são listas ordenadas de valores.

// Exemplo de array:
let frutas = ["maçã", "banana", "laranja"];

// Acessando elementos do array pelo índice:
console.log(frutas[0]); // maçã

// Métodos de Array:

// push(): Adiciona um item ao final do array.
frutas.push("uva");
console.log(frutas); // ["maçã", "banana", "laranja", "uva"]

// pop(): Remove o último item do array.
frutas.pop();
console.log(frutas); // ["maçã", "banana", "laranja"]

// shift(): Remove o primeiro item do array.
frutas.shift();
console.log(frutas); // ["banana", "laranja"]

// unshift(): Adiciona um item no início do array.
frutas.unshift("morango");
console.log(frutas); // ["morango", "banana", "laranja"]

// map(): Cria um novo array com base em uma transformação.
let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas); // ["MORANGO", "BANANA", "LARANJA"]
