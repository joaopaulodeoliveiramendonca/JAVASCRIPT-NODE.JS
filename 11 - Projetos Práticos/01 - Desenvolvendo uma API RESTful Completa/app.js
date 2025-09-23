const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Configurar o body-parser para interpretar JSON
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB (usando Mongoose)
mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Banco de dados conectado'))
  .catch(err => console.log('Erro ao conectar ao banco de dados:', err));

// Importar rotas
const userRoutes = require('./routes/users');
app.use('/usuarios', userRoutes);

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});