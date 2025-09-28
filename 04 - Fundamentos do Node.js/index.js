const http = require('http');  // Importando o módulo HTTP do Node.js

// Criando o servidor HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Definindo o código de status HTTP como 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Definindo o tipo de conteúdo da resposta
  res.end('Olá, mundo! Este é um servidor Node.js!'); // Enviando a resposta
});

// O servidor vai escutar na porta 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando em http://127.0.0.1:3000/');
});