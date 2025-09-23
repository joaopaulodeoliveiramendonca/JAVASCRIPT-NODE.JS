// Introdução ao Express.js

// O que é o Express?
// O Express.js é um framework web minimalista para Node.js, usado para criar 
// aplicações web e APIs de maneira simples e rápida. Ele facilita o gerenciamento
// de rotas, manipulação de requisições e respostas, e integração com middleware.

// Por que usar o Express?
// O Express simplifica a criação de servidores web, tornando a escrita de código 
// muito mais rápida e fácil. Ele possui suporte para middleware, que são funções 
// que podem modificar as requisições e respostas, ou finalizar o ciclo de requisição/resposta.

// Instalação do Express
// Para instalar o Express em seu projeto Node.js, basta usar o comando:
// npm install express

// ------------------------------------------------------

// Configurando o servidor Express

// Depois de instalar o Express, você pode configurá-lo para criar um servidor HTTP.

// Importando o módulo express
const express = require('express');

// Criando uma instância do Express
const app = express();

// Definindo uma rota HTTP GET para a raiz ("/") do servidor
app.get('/', (req, res) => {
  res.send('Olá, Mundo com Express!');
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

// Explicação do código:
// - express(): Cria uma aplicação Express.
// - app.get('/'): Define uma rota HTTP GET na raiz ("/") do servidor.
// - app.listen(): Inicia o servidor na porta 3000.