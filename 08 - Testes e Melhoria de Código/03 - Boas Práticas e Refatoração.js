// Boas Práticas e Refatoração

// Organização de Código:
// Organize seu código em módulos para facilitar a manutenção e os testes.
// Em vez de escrever tudo em um arquivo, separe as funcionalidades em diferentes arquivos e 
// use módulos para importar e exportar funcionalidades.

// Exemplo de organização de código:

// app.js: Contém a configuração do servidor.
const express = require('express');
const app = express();

// Importando as rotas
const clienteRoutes = require('./routes/cliente');

// Configuração do middleware e das rotas
app.use(express.json());
app.use('/clientes', clienteRoutes);

// Exporta o app para uso em testes ou na execução do servidor
module.exports = app;

// Iniciando o servidor
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}

// routes/cliente.js: Contém as rotas relacionadas a clientes.
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Definindo as rotas para clientes
router.get('/', clienteController.listarClientes);
router.post('/', clienteController.criarCliente);

module.exports = router;

// controllers/clienteController.js: Contém a lógica de negócios para clientes.
const clientes = [
    { id: 1, nome: 'João', idade: 28 },
    { id: 2, nome: 'Maria', idade: 22 }
];

// Função para listar clientes
exports.listarClientes = (req, res) => {
    res.status(200).json(clientes);
};

// Função para criar um novo cliente
exports.criarCliente = (req, res) => {
    const { nome, idade } = req.body;
    const novoCliente = { id: clientes.length + 1, nome, idade };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
};

/*
Explicação:
Organização de Código:

app.js: Contém a configuração do servidor Express e importa as rotas. O servidor é iniciado na porta 3000.

routes/cliente.js: Contém as rotas relacionadas a clientes. Aqui, são definidas as rotas GET e POST para o endpoint /clientes, que são delegadas à lógica de negócios no controlador.

controllers/clienteController.js: Contém a lógica de negócios para os clientes, como listar clientes e criar novos clientes.

Organizando o código dessa maneira, você torna o sistema mais modular, fácil de entender e fácil de testar.

Refatoração de Código:
Refatoração significa melhorar a estrutura do código sem alterar seu comportamento. Isso pode envolver:

Remover código repetido: Ao criar funções reutilizáveis, você reduz a duplicação de código.

Melhorar a legibilidade: Tornar o código mais legível e compreensível.

Dividir funções grandes em funções menores: Isso facilita a manutenção e o entendimento do código.

Exemplo de Refatoração:

Antes:

javascript
Copiar código

*/
function calcularPrecoTotal(produtos) {
    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        total += produtos[i].preco;
    }
    return total;
}
/*
Após Refatoração:

javascript
Copiar código

*/

function calcularPrecoTotal(produtos) {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}

/*
A versão refatorada usa o método reduce() para iterar sobre o array e calcular o total de forma mais concisa e legível.

Uso de Linting e Formatação Automática:

Linters como o ESLint ajudam a garantir que seu código siga as melhores práticas, evite erros simples e seja consistente.

Formatação automática pode ser configurada para garantir que o estilo de código seja uniforme em todo o projeto.

Para instalar o ESLint:

bash
Copiar código
npm install eslint --save-dev
Configuração do ESLint:

Execute o comando para configurar o ESLint:

bash
Copiar código
npx eslint --init
Isso irá guiar você para configurar o ESLint no seu projeto. O ESLint irá verificar o seu código para garantir que ele siga padrões e evitar problemas comuns de JavaScript.

Benefícios:
Manutenção mais fácil: Ao dividir o código em módulos, ele se torna mais fácil de manter e testar.

Legibilidade: Melhorar a legibilidade do código facilita o trabalho de outros desenvolvedores que vão trabalhar no mesmo projeto.

Consistência: Usando linters e formatação automática, você assegura que o código seja escrito de forma consistente em toda a equipe.

Passos Finais:
Estrutura o seu código: Organize suas funcionalidades em diferentes arquivos para facilitar a manutenção.

Refatore seu código: Sempre procure maneiras de melhorar o código sem mudar o comportamento.

Use ESLint: Instale e configure o ESLint para garantir a qualidade e consistência do código.

Isso ajudará você a manter um código mais limpo e escalável no longo prazo.
*/