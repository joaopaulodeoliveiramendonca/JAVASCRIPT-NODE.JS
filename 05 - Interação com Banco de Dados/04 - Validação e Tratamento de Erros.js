// Validação e Tratamento de Erros

// Validação de Dados:
// Você pode validar dados de entrada usando pacotes como Joi ou diretamente no seu modelo de dados no Mongoose.
// Aqui está um exemplo de validação de dados com Mongoose:

const mongoose = require('mongoose');

// Definindo o modelo de dados (Schema) com validação
const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,  // O campo nome deve ser uma string
        required: true  // O campo é obrigatório
    },
    idade: {
        type: Number,  // O campo idade deve ser um número
        required: true,  // O campo é obrigatório
        min: 18  // Idade mínima de 18 anos
    },
    email: {
        type: String,  // O campo email deve ser uma string
        required: true,  // O campo é obrigatório
        match: /.+\@.+\..+/  // O email deve seguir o formato padrão (exemplo@dominio.com)
    }
});

// Criando o modelo de cliente com o schema definido
const Cliente = mongoose.model('Cliente', clienteSchema);

// Exemplo de tentativa de salvar um novo cliente:
const novoCliente = new Cliente({
    nome: 'João',
    idade: 25,
    email: 'joao@email.com'
});

// Validação e tratamento de erro ao salvar o cliente
try {
    await novoCliente.save();  // Tentando salvar o cliente no banco
    console.log('Cliente salvo com sucesso!');
} catch (err) {
    console.error('Erro ao salvar cliente', err);  // Capturando erros, se ocorrerem
}

// Explicação:
// - O schema de cliente define os campos com suas propriedades e validações.
// - O campo "nome" é obrigatório.
// - O campo "idade" deve ser um número maior ou igual a 18.
// - O campo "email" deve seguir um formato de email válido.
// - Ao tentar salvar o cliente, se os dados forem inválidos, o Mongoose lançará um erro que pode ser tratado.

// Tratamento de Erros:
// O tratamento de erros é fundamental para capturar problemas durante a execução de operações no banco de dados.
// Exemplo básico de tratamento de erro ao interagir com o banco de dados:

try {
    // Aqui estamos tentando uma operação (por exemplo, salvar ou consultar dados)
    // Se ocorrer um erro, o bloco catch será executado.
    await cliente.save();
} catch (err) {
    // O bloco catch captura o erro, e podemos tratá-lo ou registrá-lo no console
    console.error('Erro ao salvar cliente', err);
}