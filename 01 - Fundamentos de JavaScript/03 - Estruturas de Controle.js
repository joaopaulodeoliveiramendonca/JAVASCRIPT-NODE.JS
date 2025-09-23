// Estruturas de Controle

// Condicionais: if, else, else if, switch

// if: Executa um bloco de código se a condição for verdadeira.
let idade = 20;
if (idade >= 18) {
    console.log("Maior de idade");
}

// else: Executa um bloco de código quando a condição if for falsa.
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// else if: Testa múltiplas condições.
if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// switch: Verifica múltiplos valores possíveis para uma variável.
let dia = "segunda-feira";
switch(dia) {
    case "segunda-feira":
        console.log("Começo da semana");
        break;
    case "sexta-feira":
        console.log("Quase fim de semana");
        break;
    default:
        console.log("Dia comum");
}

// Laços: for, while, do while

// for: Usado para iterar com um índice.
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while: Executa enquanto a condição for verdadeira.
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}

// do while: Executa pelo menos uma vez antes de verificar a condição.
let j = 0;
do {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
} while (j < 5);

// Laços de Array: forEach, map, filter

// forEach: Itera sobre cada item de um array.
let frutas = ["maçã", "banana", "laranja"];
frutas.forEach(fruta => console.log(fruta)); // "maçã", "banana", "laranja"

// map: Cria um novo array com base em uma transformação.
let numeros = [1, 2, 3];
let quadrados = numeros.map(num => num * num);
console.log(quadrados); // [1, 4, 9]

// filter: Filtra elementos do array com base em uma condição.
let maisNumeros = [1, 2, 3, 4, 5];
let pares = maisNumeros.filter(num => num % 2 === 0);
console.log(pares); // [2, 4]
