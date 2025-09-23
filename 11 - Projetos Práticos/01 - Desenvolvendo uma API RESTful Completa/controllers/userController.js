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