# Introdução ao Node.js

## O que é o Node.js?

O Node.js é um ambiente de execução para JavaScript no lado do servidor. Ele utiliza o motor V8 do Google Chrome, permitindo que você execute código JavaScript fora do navegador. Node.js é baseado em eventos e não bloqueante, o que o torna ideal para aplicações escaláveis e de alta performance, como servidores e APIs.

## Vantagens do Node.js:

1. **Velocidade devido ao motor V8:**
   O motor V8 é o mesmo motor que o Google Chrome usa para executar JavaScript, e é altamente otimizado para execução rápida.

2. **Non-blocking (não bloqueante):**
   Node.js é não bloqueante, o que significa que, enquanto ele aguarda por operações como leitura de arquivos ou requisições HTTP, ele não bloqueia o fluxo de execução do código, permitindo que outras operações continuem enquanto aguarda essas tarefas.

3. **Ideal para aplicações em tempo real:**
   Node.js é especialmente útil para aplicações em tempo real, como chats, jogos multiplayer, ou qualquer aplicação que necessite de comunicação em tempo real entre o cliente e o servidor.

## Exemplo de código básico em Node.js para criar um servidor HTTP:

```javascript
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
```

## Instalação do Node.js
Para começar, você precisa instalar o Node.js em sua máquina:

Acesse o site de Downloads do Node.js: https://nodejs.org/

Baixe e instale a versão LTS (Long Term Support), que é a versão recomendada para a maioria dos usuários.

Após a instalação, abra o terminal e digite os seguintes comandos para verificar se o Node.js foi instalado corretamente:

Verificando a versão do Node.js
Abra o terminal e digite:

```bash
node -v
```
Deverá exibir a versão do Node.js instalada.

## Verificando a versão do npm (Node Package Manager)
O npm é o gerenciador de pacotes do Node.js, e você também pode verificar sua versão com o comando:

```bash
npm -v
```
Deverá exibir a versão do npm instalada.