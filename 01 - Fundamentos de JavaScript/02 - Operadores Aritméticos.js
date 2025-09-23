// Operadores Aritméticos
// + (adição), - (subtração), * (multiplicação), / (divisão), % (resto da divisão), ++ (incremento), -- (decremento).
// Exemplo:
let num1 = 10; // Declarando a variável num1 com valor 10
let num2 = 5;  // Declarando a variável num2 com valor 5

console.log(num1 + num2); // 15 (adição)
console.log(num1 - num2); // 5 (subtração)
console.log(num1 * num2); // 50 (multiplicação)
console.log(num1 / num2); // 2 (divisão)
console.log(num1 % num2); // 0 (resto da divisão)

// Operadores Lógicos
// && (E lógico), || (OU lógico), ! (não lógico).
// Exemplo:
let valorX = true;  // valorX é verdadeiro
let valorY = false; // valorY é falso

console.log(valorX && valorY); // false (E lógico, ambos precisam ser verdadeiros)
console.log(valorX || valorY); // true (OU lógico, basta um ser verdadeiro)
console.log(!valorX); // false (não lógico, inverte o valor de valorX)

// Operadores de Comparação
// == (igualdade), === (igualdade estrita), != (diferente), !== (diferente estrito), > (maior que), < (menor que), >= (maior ou igual), <= (menor ou igual).
// Exemplo:
let num3 = 10;   // num3 é igual a 10
let num4 = "10"; // num4 é a string "10"

console.log(num3 == num4); // true (compara valor, ignora tipo de dado)
console.log(num3 === num4); // false (compara valor e tipo de dado, são diferentes)
console.log(num3 != num4); // false (verifica se são diferentes, e eles não são)
console.log(num3 !== num4); // true (verifica se são diferentes, levando em consideração o tipo também)
console.log(num3 > num4); // false (verifica se num3 é maior que num4)
console.log(num3 < num4); // false (verifica se num3 é menor que num4)
console.log(num3 >= num4); // true (verifica se num3 é maior ou igual a num4)
console.log(num3 <= num4); // true (verifica se num3 é menor ou igual a num4)

// Operador Ternário
// Forma compacta de um if simples.
// Sintaxe:
// condição ? valor_se_verdadeiro : valor_se_falso;
// Exemplo:
let idadeUsuario = 18;  // idade do usuário
let podeDirigir = idadeUsuario >= 18 ? "Sim" : "Não"; // Verifica se a idade é maior ou igual a 18

console.log(podeDirigir); // "Sim" (se a condição for verdadeira, retorna "Sim", caso contrário, retorna "Não")