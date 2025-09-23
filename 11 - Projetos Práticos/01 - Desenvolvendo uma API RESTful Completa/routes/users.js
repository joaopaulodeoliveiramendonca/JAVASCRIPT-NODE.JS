const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');

// Definir rotas para a API
router.post('/', createUser);     // Criar usuário
router.get('/', getUsers);        // Listar usuários
router.put('/:id', updateUser);   // Atualizar usuário
router.delete('/:id', deleteUser); // Excluir usuário

module.exports = router;