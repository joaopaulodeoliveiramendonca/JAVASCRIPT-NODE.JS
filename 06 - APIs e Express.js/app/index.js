// Importando o módulo express
const express = require('express');

// Criando uma instância do app Express
const app = express();

// Definindo a porta em que o servidor irá rodar
const port = 3000;


//O middleware global será executado em todas as requisições feitas ao servidor.
// Middleware para parsear o corpo da requisição como JSON
app.use(express.json());

app.use((req, res, next) => {
  // Exibe a data e hora da requisição e a rota acessada
  const date = new Date();
  console.log(`[${date.toISOString()}] - Requisição recebida na rota: ${req.originalUrl} - Método: ${req.method}`);

  // Passa para o próximo middleware ou rota
  next();
});

// Rota GET para '/clientes' - Obtém todos os clientes
app.get('/clientes', (req, res) => {
    // Simulando uma resposta com uma lista de clientes
    const clientes = [
        { id: 1, nome: 'João Silva' },
        { id: 2, nome: 'Maria Souza' },
        { id: 3, nome: 'Carlos Oliveira' }
    ];

    // Enviando a lista de clientes no formato JSON
    res.json(clientes);
});

// Rota POST para '/clientes' - Cria um novo cliente
app.post('/clientes', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        // Caso o nome não seja enviado, retornamos um erro 400
        return res.status(400).json({ erro: 'Nome é obrigatório' });
    }

    // Simulando a criação do cliente (em um banco de dados real, isso seria feito aqui)
    const novoCliente = {
        id: Math.floor(Math.random() * 1000),  // Gerando um ID aleatório
        nome
    };

    // Enviando a resposta com o cliente criado
    res.status(201).json(novoCliente);
});

// Rota PUT para '/clientes/:id' - Atualiza um cliente existente
app.put('/clientes/:id', (req, res) => {
    const { id } = req.params;  // Acessando o ID do cliente pela URL
    const { nome } = req.body;

    if (!nome) {
        // Caso o nome não seja enviado, retornamos um erro 400
        return res.status(400).json({ erro: 'Nome é obrigatório' });
    }

    // Simulando a atualização do cliente (em um banco de dados real, isso seria feito aqui)
    const clienteAtualizado = {
        id,
        nome
    };

    // Enviando a resposta com o cliente atualizado
    res.json(clienteAtualizado);
});

// Rota DELETE para '/clientes/:id' - Deleta um cliente
app.delete('/clientes/:id', (req, res) => {
    const { id } = req.params;  // Acessando o ID do cliente pela URL

    // Simulando a exclusão do cliente (em um banco de dados real, isso seria feito aqui)
    // Apenas enviamos uma resposta confirmando a exclusão
    res.json({ mensagem: `Cliente com ID ${id} deletado` });
});

// Definindo uma rota para quando o usuário acessar a raiz ('/')
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor Express!');
});

// Iniciando o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
