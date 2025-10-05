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