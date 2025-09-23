// 1. Introdução ao JavaScript

// O que é JavaScript?
// O JavaScript é uma linguagem de programação usada para criar páginas web interativas.
// Originalmente criado para rodar em navegadores, hoje o JavaScript pode ser usado também no backend (com Node.js).

// No frontend, o JavaScript permite manipular o conteúdo de uma página web dinamicamente.
// No backend (Node.js), ele permite criar servidores e aplicações completas.

// Como o JavaScript é executado no navegador e no Node.js
// No navegador, o JavaScript é executado pelo motor de JavaScript do próprio navegador (ex: V8 no Chrome).
// Ele pode ser incluído diretamente nas páginas HTML, seja em scripts internos ou externos.

// No Node.js, o JavaScript é executado pelo motor V8 do Google, mas fora do navegador,
// permitindo que você crie servidores, APIs e até mesmo interaja com sistemas de arquivos, bancos de dados, etc.

// Configuração do ambiente (VSCode, Node.js)
// Instalar o Node.js em sua máquina.
// Instalar o VSCode para edição do código.

// No terminal, verifique se o Node.js foi instalado corretamente digitando:
// node -v

// 2. Variáveis e Tipos de Dados

// Declaração de Variáveis
// let: Usada para declarar variáveis cujos valores podem ser alterados. Exemplo:
let nome = "João"; // A variável nome é inicialmente "João"
nome = "Maria"; // Alterando o valor para "Maria"

// const: Usada para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado depois de atribuído. Exemplo:
const idade = 30; // A variável idade é 30
// idade = 35; // Erro! Não pode ser alterado, pois é uma constante

// var: Uma forma mais antiga de declarar variáveis. Não é recomendado usar hoje em dia, pois pode gerar comportamentos inesperados.
// Exemplo de uso de var:
var cidade = "São Paulo"; // cidade foi declarada usando var

// Tipos de Dados em JavaScript
// string: Sequência de caracteres, ex: "Olá Mundo!".
let saudacao = "Olá Mundo!";

// number: Números, podem ser inteiros ou decimais, ex: 10 ou 3.14.
let numeroInteiro = 10;
let numeroDecimal = 3.14;

// boolean: Pode ser true (verdadeiro) ou false (falso).
let isAtivo = true;
let isConcluido = false;

// object: Coleção de pares chave-valor, ex:
let pessoa = { nome: "Maria", idade: 25 };

// array: Lista de itens, ex:
let frutas = ["maçã", "banana", "laranja"];

// null: Representa a ausência de valor ou objeto.
let resultado = null; // A variável resultado não tem valor

// undefined: Significa que uma variável foi declarada, mas não tem valor atribuído.
let variavelSemValor; // Aqui a variável foi declarada, mas não foi atribuída nenhum valor
