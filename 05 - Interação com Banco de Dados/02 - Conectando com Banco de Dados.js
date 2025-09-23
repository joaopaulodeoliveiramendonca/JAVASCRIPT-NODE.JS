// Conectando Node.js com um Banco de Dados

// Conectando com PostgreSQL
// Para conectar o Node.js a um banco de dados PostgreSQL, você pode usar o pacote pg.

// Passos para conectar com PostgreSQL:
// 1. Instale o pacote pg:
console.log('Para instalar o pacote pg, no terminal digite: npm install pg');

// 2. Conecte-se ao banco de dados e faça uma consulta.

// Exemplo de conexão com PostgreSQL:
const { Client } = require('pg');

// Criando o cliente para conectar ao PostgreSQL
const client = new Client({
    user: 'seu_usuario',         // Seu nome de usuário do PostgreSQL
    host: 'localhost',           // Endereço do servidor PostgreSQL
    database: 'seu_banco',       // Nome do banco de dados
    password: 'sua_senha',       // Sua senha de acesso ao PostgreSQL
    port: 5432,                  // Porta padrão do PostgreSQL
});

// Conectando ao banco de dados
client.connect();

// Fazendo uma consulta SQL
client.query('SELECT * FROM clientes', (err, res) => {
    if (err) {
        console.error('Erro ao fazer consulta', err);
    } else {
        console.log(res.rows); // Exibindo o resultado da consulta
    }

    // Fechando a conexão após a consulta
    client.end();
});

// Explicação:
// - Criamos um cliente para o PostgreSQL usando as credenciais (usuário, senha, banco de dados, etc.).
// - A função query() é usada para executar uma consulta SQL.
// - client.end() fecha a conexão após a consulta ser concluída.

// Conectando com MongoDB
// Para conectar o Node.js ao MongoDB, você pode usar o pacote mongoose, que facilita o trabalho com MongoDB.

// Passos para conectar com MongoDB:
// 1. Instale o pacote mongoose:
console.log('Para instalar o pacote mongoose, no terminal digite: npm install mongoose');

// 2. Conecte-se ao banco de dados MongoDB e interaja com os documentos.

// Exemplo de conexão com MongoDB usando Mongoose:
const mongoose = require('mongoose');

// Conectando ao banco MongoDB
mongoose.connect('mongodb://localhost:27017/meu_banco', {
    useNewUrlParser: true,        // Usando a URL de conexão nova do MongoDB
    useUnifiedTopology: true     // Usando o modo unificado de topologia de conexões
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((err) => {
    console.error('Erro ao conectar', err);
});

// Definindo um modelo de dados (Schema)
const clienteSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    email: String
});

// Criando um modelo Cliente com o schema definido
const Cliente = mongoose.model('Cliente', clienteSchema);

// Criando um novo cliente
const novoCliente = new Cliente({
    nome: 'Carlos',
    idade: 35,
    email: 'carlos@email.com'
});

// Salvando o novo cliente no banco
novoCliente.save()
    .then(() => console.log('Cliente salvo com sucesso!'))
    .catch((err) => console.error('Erro ao salvar cliente', err));

// Explicação:
// - mongoose.connect() conecta o Node.js ao MongoDB usando a URL de conexão.
// - Definimos um modelo Cliente para representar a coleção no MongoDB.
// - Usamos o método save() para armazenar um novo cliente no banco de dados.
