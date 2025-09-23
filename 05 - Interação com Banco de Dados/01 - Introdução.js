// Introdução ao Banco de Dados

// O que é um Banco de Dados?
// Um banco de dados é uma coleção organizada de dados que pode ser facilmente acessada,
// gerenciada e atualizada. Existem dois tipos principais de bancos de dados:

// 1. Relacional:
// Bancos de dados relacionais armazenam dados em tabelas e utilizam a linguagem SQL (Structured Query Language)
// para interagir com os dados. SQL é usada para fazer consultas, inserir, atualizar ou excluir dados.
// Exemplos de bancos de dados relacionais: PostgreSQL, MySQL.

// 2. NoSQL:
// Bancos de dados NoSQL armazenam dados em formatos como documentos ou chave-valor.
// Eles são mais flexíveis em termos de estrutura de dados, sendo úteis quando não se sabe exatamente como
// os dados serão organizados ou quando a estrutura pode mudar ao longo do tempo.
// Exemplos de bancos de dados NoSQL: MongoDB.

// Bancos de Dados Relacionais (Ex.: PostgreSQL, MySQL)
// Um banco de dados relacional armazena dados em tabelas. Cada tabela contém linhas (ou registros) e colunas.
// A linguagem SQL é usada para interagir com essas tabelas.

// Exemplo de tabela simples (Clientes):
// Tabela: Clientes
// | ID | Nome   | Idade | Email            |
// |----|--------|-------|------------------|
// | 1  | João   | 28    | joao@email.com    |
// | 2  | Maria  | 22    | maria@email.com   |

// Exemplo de uma consulta SQL para selecionar todos os dados da tabela "Clientes":
// SELECT * FROM Clientes;
// Este comando irá retornar todos os registros da tabela "Clientes".

// Exemplo de uma consulta SQL para inserir um novo cliente:
const { Client } = require('pg');  // Importando o cliente PostgreSQL (se necessário)
const client = new Client({
  host: 'localhost',
  database: 'meubanco',  // Substitua com o nome do seu banco de dados
  user: 'usuario',       // Substitua com seu nome de usuário
  password: 'senha'      // Substitua com sua senha
});

client.connect();

// Inserir dados na tabela "Clientes" (Exemplo SQL em Node.js):
const query = 'INSERT INTO Clientes (ID, Nome, Idade, Email) VALUES (3, \'Carlos\', 30, \'carlos@email.com\')';
client.query(query, (err, res) => {
  if (err) {
    console.error('Erro ao inserir dados', err.stack);
  } else {
    console.log('Dados inseridos com sucesso');
  }
  client.end(); // Finaliza a conexão
});

// Bancos de Dados NoSQL (Ex.: MongoDB)
// MongoDB é um banco de dados NoSQL que armazena dados em formato de documentos JSON.
// Ele permite maior flexibilidade, pois os dados podem ser armazenados sem um esquema fixo,
// o que facilita a alteração da estrutura dos dados ao longo do tempo.

const { MongoClient } = require('mongodb');  // Importando o MongoDB Client

// Conectando ao banco de dados MongoDB
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Conectado ao MongoDB');
    const db = client.db('meubanco');  // Selecionando o banco de dados
    const collection = db.collection('clientes');  // Selecionando a coleção "clientes"

    // Inserir um documento na coleção "clientes"
    const cliente = { nome: 'Carlos', idade: 30, email: 'carlos@email.com' };
    collection.insertOne(cliente)
      .then(result => {
        console.log('Cliente inserido com sucesso:', result);
      })
      .catch(err => {
        console.error('Erro ao inserir cliente', err);
      })
      .finally(() => {
        client.close();  // Finaliza a conexão
      });
  })
  .catch(error => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });
