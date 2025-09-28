# Desenvolvendo uma API RESTful Completa

## O que é uma API RESTful?
Uma API RESTful segue os princípios do REST (Representational State Transfer) e usa métodos HTTP como GET, POST, PUT, DELETE para interagir com recursos (dados).
As APIs RESTful são projetadas para serem simples, escaláveis e independentes de plataforma.

## Desenvolvendo uma API CRUD
Vamos criar uma API CRUD para gerenciar usuários (Criar, Ler, Atualizar e Excluir usuários).

### Estrutura do Projeto:
- **app.js**: Configuração do servidor.
- **routes/users.js**: Definição das rotas para usuários.
- **controllers/userController.js**: Lógica de negócio para lidar com usuários.
- **models/userModel.js**: Modelo de dados para usuários (se usando um banco de dados como MongoDB ou PostgreSQL).

### Passo a Passo:

#### Instalar dependências:
```bash
npm install express mongoose body-parser
```

#### Criar o servidor Express (app.js):
```javascript
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
```

#### Criar o modelo de usuário (models/userModel.js):
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

#### Criar o controlador de usuários (controllers/userController.js):
```javascript
const User = require('../models/userModel');

// Criar novo usuário
const createUser = async (req, res) => {
  try {
    const { nome, idade, email } = req.body;
    const novoUsuario = new User({ nome, idade, email });
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar usuário', error });
  }
};

// Buscar todos os usuários
const getUsers = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar usuários', error });
  }
};

// Atualizar um usuário
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, idade, email } = req.body;
    const usuarioAtualizado = await User.findByIdAndUpdate(id, { nome, idade, email }, { new: true });
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao atualizar usuário', error });
  }
};

// Excluir um usuário
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao excluir usuário', error });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
```

#### Criar as rotas para a API (routes/users.js):
```javascript
const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');

// Definir rotas para a API
router.post('/', createUser);     // Criar usuário
router.get('/', getUsers);        // Listar usuários
router.put('/:id', updateUser);   // Atualizar usuário
router.delete('/:id', deleteUser); // Excluir usuário

module.exports = router;
```

## Teste da API:
Você pode testar a API usando o Postman ou Insomnia.

### Endpoints:
- **POST /usuarios**: Criar um novo usuário.
- **GET /usuarios**: Buscar todos os usuários.
- **PUT /usuarios/:id**: Atualizar um usuário específico.
- **DELETE /usuarios/:id**: Excluir um usuário específico.
