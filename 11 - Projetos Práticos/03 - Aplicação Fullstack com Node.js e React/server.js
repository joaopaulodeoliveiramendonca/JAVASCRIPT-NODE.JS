// Importando o Express
const express = require('express');
const cors = require('cors');  // Usado para permitir requisições de outras origens (necessário para o React)

const app = express();
const port = 3000;

// Habilitando CORS para permitir comunicação com o frontend
app.use(cors());

// Dados simulados (lista de usuários)
const usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' }
];

// Rota para retornar a lista de usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Retorna os dados de usuários no formato JSON
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
