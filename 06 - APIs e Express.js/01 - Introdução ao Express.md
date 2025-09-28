# Introdução ao Express.js

## O que é o Express?

O Express.js é um framework web minimalista para Node.js, usado para criar aplicações web e APIs de maneira simples e rápida. Ele facilita o gerenciamento de rotas, manipulação de requisições e respostas, e integração com middleware.

## Por que usar o Express?

O Express simplifica a criação de servidores web, tornando a escrita de código muito mais rápida e fácil. Ele possui suporte para middleware, que são funções que podem modificar as requisições e respostas, ou finalizar o ciclo de requisição/resposta.

`middleware` são funções que têm acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta. Eles são usados para processar solicitações e respostas, permitindo realizar tarefas como autenticação, registro em log, manipulação de erros e alteração de dados, antes de encaminhar a solicitação para o manipulador de rota final.

## Instalação do Express

Para instalar o Express em seu projeto Node.js, basta usar o comando:

```bash
npm install express
```

## Configurando o servidor Express
Depois de instalar o Express, você pode configurá-lo para criar um servidor HTTP.

### Importando o módulo express:**

```javascript
const express = require('express');
```

### Criando uma instância do Express
```javascript
const app = express();
```

### Definindo uma rota HTTP GET para a raiz ("/") do servidor
```javascript
app.get('/', (req, res) => {
  res.send('Olá, Mundo com Express!');
});
```

### Iniciando o servidor na porta 3000

```javascript
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

## Explicação do código:

`express()`: Cria uma aplicação Express.
`app.get('/')`: Define uma rota HTTP GET na raiz ("/") do servidor.
`app.listen()`: Inicia o servidor na porta 3000.






