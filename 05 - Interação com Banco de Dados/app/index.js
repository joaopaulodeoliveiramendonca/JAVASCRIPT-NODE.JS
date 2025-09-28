const { Client } = require('pg');

// Configuração do cliente para conectar ao PostgreSQL
const client = new Client({
    user: 'postgres',         // Seu nome de usuário do PostgreSQL
    host: 'localhost',        // Endereço do servidor PostgreSQL
    database: 'user_db',      // Nome do banco de dados
    password: 'postgres',     // Sua senha de acesso ao PostgreSQL
    port: 5432,               // Porta padrão do PostgreSQL
});

// Função para conectar ao banco de dados
const connectDb = async () => {
    try {
        await client.connect();
        console.log('Conectado ao banco de dados');
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
};

// Função para adicionar um novo usuário (apenas email e password)
const addUser = async (email, password) => {
    try {
        const query = `
            INSERT INTO "User" (email, password, "updatedAt")
            VALUES ($1, $2, NOW())
            RETURNING *;
        `;
        const values = [email, password];
        const res = await client.query(query, values);
        console.log('Usuário adicionado:', res.rows[0]);
    } catch (err) {
        console.error('Erro ao adicionar usuário:', err);
    }
};

// Função para consultar todos os usuários
const getUsers = async () => {
    try {
        const res = await client.query('SELECT * FROM "User";');
        console.log('Usuários no banco de dados:', res.rows);
    } catch (err) {
        console.error('Erro ao consultar usuários:', err);
    }
};

// Função para atualizar a senha de um usuário
const updateUser = async (userId, newPassword) => {
    try {
        const query = `
            UPDATE "User" 
            SET password = $1, "updatedAt" = NOW()
            WHERE id = $2
            RETURNING *;
        `;
        const values = [newPassword, userId];
        const res = await client.query(query, values);
        console.log('Usuário atualizado:', res.rows[0]);
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
    }
};

// Função para deletar um usuário
const deleteUser = async (userId) => {
    try {
        const query = `DELETE FROM "User" WHERE id = $1 RETURNING *;`;
        const values = [userId];
        const res = await client.query(query, values);
        console.log('Usuário deletado:', res.rows[0]);
    } catch (err) {
        console.error('Erro ao deletar usuário:', err);
    }
};

// Função para fechar a conexão com o banco de dados
const closeDbConnection = async () => {
    try {
        await client.end();
        console.log('Conexão com o banco de dados fechada');
    } catch (err) {
        console.error('Erro ao fechar a conexão:', err);
    }
};

// Exemplo de uso: Adicionando um usuário, consultando todos os usuários, atualizando e deletando
const runCrudOperations = async () => {
    await connectDb();

    // Adicionando um novo usuário
    //await addUser('joao@gmail.com', '@1234joao');

    // Consultando todos os usuários
    //await getUsers();

    // Atualizando a senha de um usuário (suponha que o userId seja 1)
    //await updateUser(5, 'novaSenhaHashExemplo123');

    // Deletando o usuário (suponha que o userId seja 1)
    //await deleteUser(1);

    // Fechando a conexão
    //await closeDbConnection();
};

// Chamada para rodar as operações CRUD
runCrudOperations();

