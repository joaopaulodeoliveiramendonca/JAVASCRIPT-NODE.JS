// Boas Práticas de Segurança

// Uso de variáveis de ambiente
// Nunca armazene informações sensíveis diretamente no código, como senhas ou chaves de API. 
// Use variáveis de ambiente para proteger esses dados.
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Exemplo de uso no código:
const dbPassword = process.env.DB_PASSWORD; // Senha do banco de dados segura através da variável de ambiente

// Configuração de CORS (Cross-Origin Resource Sharing)
// CORS controla como os navegadores permitem solicitações de diferentes origens. 
// Limitar os domínios que podem acessar sua API ajuda a prevenir ataques de origem cruzada.
const cors = require('cors');

// Exemplo de configuração do CORS:
const corsOptions = { 
    origin: 'https://meudominio.com', // Apenas o domínio https://meudominio.com pode fazer requisições
    methods: ['GET', 'POST'], // Apenas os métodos GET e POST são permitidos
};

// Ativa o CORS com as opções configuradas
app.use(cors(corsOptions));
