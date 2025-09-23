// Criando um Chat em Tempo Real com WebSockets

// O que é um Chat em Tempo Real?
// Um chat em tempo real permite que usuários enviem mensagens instantaneamente sem precisar atualizar a página.
// As mensagens são enviadas de forma bidirecional e em tempo real entre o servidor e os clientes.

// Passos:
// 1. Instalar o WebSocket:
// Execute o comando abaixo para instalar a biblioteca 'ws' no seu projeto:
// npm install ws

// Servidor WebSocket para Chat (chat-server.js)

const WebSocket = require('ws'); 

// Criando o servidor WebSocket na porta 8080
const wss = new WebSocket.Server({ port: 8080 });

// Quando um cliente se conecta, a função 'connection' é chamada
wss.on('connection', (ws) => {
  console.log('Novo cliente conectado');

  // Enviar mensagem de boas-vindas para o cliente que se conectou
  ws.send('Bem-vindo ao chat!');

  // Receber mensagens dos clientes
  ws.on('message', (message) => {
    console.log('Mensagem recebida:', message);

    // Enviar a mensagem recebida de volta para todos os clientes conectados
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log('Servidor WebSocket rodando na porta 8080');

// Explicação:
// - Quando um novo cliente se conecta, ele recebe uma mensagem de boas-vindas.
// - O servidor ouve as mensagens recebidas de um cliente com ws.on('message').
// - O servidor envia as mensagens recebidas de um cliente para todos os outros clientes conectados, permitindo a comunicação em tempo real.


// Cliente WebSocket (chat-client.js)

// Conectando o cliente ao servidor WebSocket
const WebSocket = require('ws'); 

// Criando uma conexão WebSocket com o servidor na porta 8080
const ws = new WebSocket('ws://localhost:8080');

// Quando a conexão for aberta, envia uma mensagem para o servidor
ws.on('open', () => {
  console.log('Conectado ao servidor de chat');
  ws.send('Olá, pessoal!'); // Envia uma mensagem para o servidor
});

// Quando uma mensagem for recebida do servidor, exibe a mensagem no console
ws.on('message', (message) => {
  console.log(`Nova mensagem: ${message}`);
});

// Explicação:
// - O cliente se conecta ao servidor WebSocket usando o URL 'ws://localhost:8080'.
// - Assim que a conexão é estabelecida (evento 'open'), o cliente envia uma mensagem para o servidor.
// - O cliente também ouve as mensagens recebidas do servidor com o evento 'message' e exibe as mensagens no console.

/*
Explicação Detalhada:
Servidor WebSocket (chat-server.js):

Criação do servidor: O servidor WebSocket é criado com new WebSocket.Server({ port: 8080 }), escutando na porta 8080.

Evento connection: Quando um novo cliente se conecta ao servidor, o evento connection é disparado. O servidor envia uma mensagem de boas-vindas com ws.send('Bem-vindo ao chat!').

Evento message: O servidor ouve as mensagens enviadas pelos clientes e retransmite essas mensagens para todos os outros clientes conectados usando o método wss.clients.forEach().

Cliente WebSocket (chat-client.js):

Conexão com o servidor: O cliente se conecta ao servidor WebSocket usando new WebSocket('ws://localhost:8080').

Evento open: Quando a conexão é estabelecida, o cliente envia uma mensagem inicial com ws.send('Olá, pessoal!').

Evento message: O cliente ouve as mensagens enviadas pelo servidor e as exibe no console com console.log().

Como Testar o Chat:
Instale o WebSocket:
Primeiro, instale o pacote ws com o comando:

bash
Copiar código
npm install ws
Execute o servidor WebSocket:
Salve o código do servidor no arquivo chat-server.js e execute o servidor:

bash
Copiar código
node chat-server.js
Execute múltiplos clientes WebSocket:
Salve o código do cliente no arquivo chat-client.js e execute o cliente em diferentes terminais para simular múltiplos usuários:

bash
Copiar código
node chat-client.js
Abra múltiplos terminais ou instâncias do cliente para testar o envio de mensagens entre os clientes.

Comportamento Esperado:
Quando um cliente se conecta, ele receberá a mensagem de boas-vindas "Bem-vindo ao chat!".

Se um cliente enviar uma mensagem, todos os outros clientes conectados ao servidor receberão essa mensagem em tempo real.

As mensagens serão exibidas no console tanto do cliente quanto do servidor.

Esse exemplo configura um chat básico em tempo real, onde as mensagens são enviadas instantaneamente entre os clientes, sem a necessidade de atualizar a página, usando WebSockets.
*/