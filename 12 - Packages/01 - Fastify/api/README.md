# Criar e listar usuários.
Vamos criar um projeto que aborde todos os conceitos que aprendemos. O projeto será uma **API de gerenciamento de usuários**, onde você poderá:

- Autenticar um usuário com JWT.
- Proteger rotas com autenticação e autorização.
- Integrar com um banco de dados PostgreSQL.
- Implementar boas práticas de segurança, como CORS, helmet e compressão.
- Usar Docker para containerizar a aplicação e facilitar o deploy.

## Estrutura do Projeto
- Servidor Fastify com rotas para gerenciamento de usuários.
- Autenticação JWT para login e segurança nas rotas.
- PostgreSQL para armazenamento dos usuários.
- Docker para criar o contêiner da aplicação.
- Boas práticas de segurança.

## Iniciando o Projeto
Crie uma pasta para o seu projeto e inicialize o npm:
```bash
mkdir user-management-api
cd user-management-api
npm init -y
```

### Instale as dependências necessárias:
```bash
npm install fastify fastify-jwt fastify-cors fastify-helmet fastify-postgres fastify-compress dotenv
npm install --save-dev jest
```

Crie o arquivo `.env` para **armazenar configurações sensíveis**, como a **chave secreta do JWT** e as **credenciais do banco de dados**:

```
PORT=3000
JWT_SECRET=supersecreta
DATABASE_URL=postgres://user:password@localhost:5432/usermanagement
```

### Configurando o Servidor Fastify
Crie o arquivo `server.js` para configurar o servidor e as rotas:
```javascript
require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const fastifyJwt = require('fastify-jwt');
const fastifyCors = require('fastify-cors');
const fastifyHelmet = require('fastify-helmet');
const fastifyCompress = require('fastify-compress');
const fastifyPostgres = require('fastify-postgres');

// Registrar plugins
fastify.register(fastifyCors, { origin: '*' });
fastify.register(fastifyHelmet);
fastify.register(fastifyCompress);
fastify.register(fastifyPostgres, {
  connectionString: process.env.DATABASE_URL,
});
fastify.register(fastifyJwt, { secret: process.env.JWT_SECRET });

// Middleware para autenticação
fastify.decorate('authenticate', async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});

// Rota para login e gerar o JWT
fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body;

  // Validando usuário simples
  if (username === 'admin' && password === 'password') {
    const token = fastify.jwt.sign({ username, role: 'admin' });
    return { token };
  }

  return reply.status(401).send({ message: 'Usuário ou senha inválidos' });
});

// Rota protegida (precisa de autenticação)
fastify.get('/protected', { preValidation: [fastify.authenticate] }, async (request, reply) => {
  return { message: 'Conteúdo protegido', user: request.user };
});

// Rota para criar usuário
fastify.post('/user', { preValidation: [fastify.authenticate] }, async (request, reply) => {
  const { name, email } = request.body;
  const client = await fastify.pg.connect();
  
  try {
    const result = await client.query(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  } catch (err) {
    reply.status(500).send({ error: 'Erro ao criar usuário' });
  } finally {
    client.release();
  }
});

// Rota para listar usuários
fastify.get('/users', { preValidation: [fastify.authenticate] }, async (request, reply) => {
  const client = await fastify.pg.connect();
  
  try {
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } catch (err) {
    reply.status(500).send({ error: 'Erro ao listar usuários' });
  } finally {
    client.release();
  }
});

// Iniciando o servidor
fastify.listen(process.env.PORT, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Servidor rodando em ${address}`);
});
```

### Criando o Banco de Dados
No `PostgreSQ`L, crie um banco de dados e a tabela `users`:

```sql
CREATE DATABASE usermanagement;

\c usermanagement

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);
```

## Dockerizando o Projeto
Agora, vamos criar um Dockerfile e um `docker-compose.yml` para facilitar o deploy da aplicação.

```Dockerfile
# Usar uma imagem base do Node.js
FROM node:16-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto para o contêiner
COPY . .

# Expôr a porta em que o aplicativo irá rodar
EXPOSE 3000

# Definir o comando para rodar o servidor Fastify
CMD ["node", "server.js"]
```

### .dockerignore
Crie o arquivo `.dockerignore` para evitar copiar arquivos desnecessários para o contêiner:

```
node_modules
npm-debug.log
.git
```

### docker-compose.yml
Crie o arquivo `docker-compose.yml` para orquestrar os serviços (Fastify e PostgreSQL):

```yml
version: '3'
services:
  fastify:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:password@db:5432/usermanagement
    depends_on:
      - db
    networks:
      - fastify-network

  db:
    image: postgres:13-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: usermanagement
    ports:
      - "5432:5432"
    networks:
      - fastify-network

networks:
  fastify-network:
    driver: bridge
```

### Rodando com Docker Compose
Com tudo configurado, você pode rodar sua aplicação com Docker:

Build a imagem e inicia os contêineres:
```bash
docker-compose up --build
```

Verifique se tudo está funcionando:

A aplicação estará acessível em http://localhost:3000.

# Testando a API
Agora, você pode testar as seguintes rotas:

`POST /login`: Envie um POST com username e password para obter o token JWT.
```json
{
  "username": "admin",
  "password": "password"
}
```

`POST /user`: Envie um POST com os dados do usuário para criar um novo usuário.
```json
{
  "name": "Alice",
  "email": "alice@example.com"
}
```

`GET /users`: Envie um GET para listar todos os usuários (precisa de autenticação).
`GET /protected`: Acesse a rota protegida (precisa de autenticação).

## O que aprendemos neste projeto:
- Criamos uma API com Fastify para gerenciar usuários.
Implementamos autenticação JWT e controle de acesso.
- Usamos PostgreSQL para persistência de dados.
- Dockerizamos a aplicação com Docker e Docker Compose para facilitar o deploy e escalabilidade.

Este é um exemplo básico de como combinar tudo o que aprendemos em um único projeto. Você pode expandir este projeto com mais funcionalidades, como validação de dados com JSON Schema, uso de middleware para logging, e integração com Prometheus para monitoramento em produção.