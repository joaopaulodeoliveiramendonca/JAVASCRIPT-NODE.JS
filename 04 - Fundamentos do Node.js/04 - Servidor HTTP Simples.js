// Criação de um Servidor HTTP Simples com Node.js

// Agora, vamos criar um servidor HTTP básico usando o módulo http e responder a requisições HTTP.

// Exemplo de servidor simples:
const http = require('http');  // Importando o módulo HTTP

// Criando o servidor HTTP
const servidor = http.createServer((req, res) => {
    // Definindo o cabeçalho da resposta (status 200 e tipo de conteúdo como HTML)
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Escrevendo o conteúdo da resposta (HTML)
    res.write('<h1>Bem-vindo ao meu servidor!</h1>');

    // Finalizando a resposta
    res.end();
});

// O servidor escuta na porta 3000
servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Explicação do código:

// http.createServer(): Cria um servidor HTTP.
// req: Objeto de requisição, que contém informações sobre a solicitação do cliente.
// res: Objeto de resposta, usado para enviar uma resposta ao cliente.

// res.writeHead(200, ...): Define o status da resposta e os cabeçalhos (200 significa "OK" e 'Content-Type' define o tipo de conteúdo da resposta como HTML).
// res.write(): Escreve conteúdo na resposta (nesse caso, um título HTML).
// res.end(): Finaliza a resposta, enviando-a de volta ao cliente.

// Agora, ao acessar http://localhost:3000 no navegador,
// o servidor irá responder com a mensagem "Bem-vindo ao meu servidor!".
