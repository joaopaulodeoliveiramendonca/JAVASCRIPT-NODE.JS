// Criação de APIs RESTful com Express.js

// O que é uma API RESTful?
// REST (Representational State Transfer) é um estilo arquitetural para criar serviços web que interagem com recursos (dados) usando os métodos HTTP.
// As APIs RESTful usam os seguintes métodos HTTP:
// GET: Para obter dados.
// POST: Para criar novos dados.
// PUT: Para atualizar dados existentes.
// DELETE: Para excluir dados.

// Exemplo de API CRUD com Express.js

// Importando o módulo express
const express = require('express');

// Criando uma instância do Express
const app = express();

// Middleware para permitir o corpo da requisição como JSON
app.use(express.json());

// Simulando um banco de dados em memória
let clientes = [
  { id: 1, nome: 'João', idade: 28 },
  { id: 2, nome: 'Maria', idade: 22 }
];

// GET: Listar clientes
// A rota GET /clientes retorna todos os clientes do banco de dados em memória
app.get('/clientes', (req, res) => {
  res.json(clientes); // Envia a lista de clientes no formato JSON
});

// POST: Criar um novo cliente
// A rota POST /clientes cria um novo cliente a partir dos dados enviados no corpo da requisição
app.post('/clientes', (req, res) => {
  const { nome, idade } = req.body; // Extraindo nome e idade do corpo da requisição
  const novoCliente = { id: clientes.length + 1, nome, idade }; // Criando um novo cliente com um ID único
  clientes.push(novoCliente); // Adicionando o novo cliente à lista
  res.status(201).json(novoCliente); // Envia o cliente criado com o status 201 (Created)
});

// PUT: Atualizar cliente
// A rota PUT /clientes/:id atualiza os dados de um cliente com o ID especificado na URL
app.put('/clientes/:id', (req, res) => {
  const { id } = req.params; // Acessando o ID do cliente pela URL
  const { nome, idade } = req.body; // Extraindo nome e idade do corpo da requisição
  let cliente = clientes.find(c => c.id == id); // Buscando o cliente pelo ID
  if (!cliente) return res.status(404).send('Cliente não encontrado'); // Retorna erro 404 se o cliente não for encontrado
  cliente.nome = nome; // Atualizando o nome do cliente
  cliente.idade = idade; // Atualizando a idade do cliente
  res.json(cliente); // Envia o cliente atualizado no formato JSON
});

// DELETE: Excluir cliente
// A rota DELETE /clientes/:id exclui o cliente com o ID especificado na URL
app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params; // Acessando o ID do cliente pela URL
  clientes = clientes.filter(c => c.id != id); // Removendo o cliente da lista
  res.status(204).send(); // Retorna o status 204 (Sem conteúdo) após a exclusão
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});



//Explicação:

//Middleware express.json(): Esse middleware é usado para permitir que o Express processe o corpo da requisição em formato JSON.

//Rota GET /clientes: Retorna todos os clientes armazenados na variável clientes.

//Rota POST /clientes: Cria um novo cliente. Os dados do cliente (nome e idade) são extraídos do corpo da requisição e um novo cliente é adicionado à lista.

//Rota PUT /clientes/:id: Atualiza os dados de um cliente com base no ID fornecido na URL. Se o cliente não for encontrado, retorna um erro 404.

//Rota DELETE /clientes/:id: Exclui o cliente com o ID fornecido na URL e retorna um status 204, que indica que a exclusão foi bem-sucedida e não há conteúdo a ser retornado.

//Essa API simples permite operações básicas de CRUD para gerenciar clientes.