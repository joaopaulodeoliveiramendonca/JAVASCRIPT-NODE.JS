// Manipulação de Requisições e Respostas

// Métodos HTTP
// O Express permite que você defina rotas para diferentes métodos HTTP, como GET, POST, PUT, DELETE.

// Exemplo de rotas:

// GET (obter dados):
// Define uma rota GET para '/clientes', que retorna uma lista de clientes
app.get('/clientes', (req, res) => {
  res.send('Aqui estão os clientes');
});

// POST (criar dados):
// Define uma rota POST para '/clientes', que cria um novo cliente
app.post('/clientes', (req, res) => {
  res.send('Cliente criado');
});

// PUT (atualizar dados):
// Define uma rota PUT para '/clientes/:id', que atualiza os dados de um cliente com o ID fornecido na URL
app.put('/clientes/:id', (req, res) => {
  // Acessando o ID do cliente através de req.params.id
  res.send(`Cliente ${req.params.id} atualizado`);
});

// DELETE (deletar dados):
// Define uma rota DELETE para '/clientes/:id', que exclui um cliente com o ID fornecido na URL
app.delete('/clientes/:id', (req, res) => {
  // Acessando o ID do cliente através de req.params.id
  res.send(`Cliente ${req.params.id} excluído`);
});

// Obtendo dados da requisição (req)
// No Express, você pode acessar os dados da requisição através do objeto req.

// req.params: Parâmetros de rota (usado em URLs dinâmicas)
// Exemplo de acesso a parâmetros dinâmicos da URL
app.get('/clientes/:id', (req, res) => {
  // Acessando o valor dinâmico da URL
  const clienteId = req.params.id;
  res.send(`Cliente solicitado: ${clienteId}`);
});

// req.query: Parâmetros de consulta (query string)
// Exemplo de acesso aos parâmetros da query string
app.get('/buscar', (req, res) => {
  // Acessando o parâmetro da query string (ex: ?nome=João)
  const nome = req.query.nome;
  res.send(`Cliente encontrado: ${nome}`);
});

// req.body: Corpo da requisição (usado em POST e PUT)
// Para usar req.body, é necessário usar middleware como express.json() para analisar o corpo da requisição.
