# Manipulação de Requisições e Respostas

## Métodos HTTP

O Express permite que você defina rotas para diferentes métodos HTTP, como `GET`, `POST`, `PUT`, `DELETE`.

### Exemplo de rotas:

#### GET (obter dados)

Define uma rota `GET` para `/clientes`, que retorna uma lista de clientes.

```javascript
app.get('/clientes', (req, res) => {
  res.send('Aqui estão os clientes');
});
```

#### POST (criar dados)
Define uma rota `POST` para `/clientes`, que cria um novo cliente.

```javascript
app.post('/clientes', (req, res) => {
  res.send('Cliente criado');
});
```

#### PUT (atualizar dados)
Define uma rota `PUT` para `/clientes/:id`, que atualiza os dados de um cliente com o ID fornecido na URL.

```javascript
app.put('/clientes/:id', (req, res) => {
  // Acessando o ID do cliente através de req.params.id
  res.send(`Cliente ${req.params.id} atualizado`);
});
```

#### DELETE (deletar dados)
Define uma rota `DELETE` para `/clientes/:id`, que exclui um cliente com o ID fornecido na URL.

```javascript
app.delete('/clientes/:id', (req, res) => {
  // Acessando o ID do cliente através de req.params.id
  res.send(`Cliente ${req.params.id} excluído`);
});
```

## Obtendo dados da requisição (req)
No Express, você pode acessar os dados da requisição através do objeto req.

`req.params`: Parâmetros de rota (usado em URLs dinâmicas). Exemplo de acesso a parâmetros dinâmicos da URL:

```javascript
app.get('/clientes/:id', (req, res) => {
  // Acessando o valor dinâmico da URL
  const clienteId = req.params.id;
  res.send(`Cliente solicitado: ${clienteId}`);
});
```

`req.query`: Parâmetros de consulta (query string)
Exemplo de acesso aos parâmetros da query string:

```javascript
app.get('/buscar', (req, res) => {
  // Acessando o parâmetro da query string (ex: ?nome=João)
  const nome = req.query.nome;
  res.send(`Cliente encontrado: ${nome}`);
});
```

`req.body`: Corpo da requisição (usado em POST e PUT). Para usar req.body, é necessário usar middleware como express.json() para analisar o corpo da requisição.

```javascript
// Importando o módulo express
const express = require('express');
const app = express();

// Middleware para analisar o corpo da requisição em formato JSON
app.use(express.json());

// Exemplo de rota POST para criar um cliente
app.post('/clientes', (req, res) => {
  // Acessando os dados enviados no corpo da requisição
  const { nome, email } = req.body;

  // Aqui, você pode realizar operações como salvar os dados no banco de dados
  res.send(`Cliente ${nome} com e-mail ${email} criado com sucesso!`);
});

// Exemplo de rota PUT para atualizar os dados de um cliente
app.put('/clientes/:id', (req, res) => {
  // Acessando os dados enviados no corpo da requisição e o ID do cliente na URL
  const { nome, email } = req.body;
  const clienteId = req.params.id;

  // Aqui, você pode realizar operações como atualizar os dados no banco de dados
  res.send(`Cliente com ID ${clienteId} atualizado: Nome: ${nome}, E-mail: ${email}`);
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```