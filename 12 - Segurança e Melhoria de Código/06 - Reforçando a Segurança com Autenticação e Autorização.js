// Reforçando a Segurança com Autenticação e Autorização

// Esse código abrange:

// Autenticação com JWT: Geração e verificação de tokens JWT, usando uma chave secreta armazenada em uma variável de ambiente.

// Autorização de Acesso: Uso de middleware para garantir que apenas usuários com permissões adequadas (como administradores) possam acessar determinados recursos.

// JWT (JSON Web Tokens)
// JWT é uma forma popular de autenticação baseada em tokens. Ele é usado para garantir que apenas usuários autenticados possam acessar certas partes da aplicação.

// Instalação do JWT:
// npm install jsonwebtoken

const jwt = require('jsonwebtoken');

// Geração de um JWT
// O token JWT é gerado com a ID do usuário e uma chave secreta, e tem um tempo de expiração de 1 hora.
const token = jwt.sign(
    { id: user.id }, // Payload com a ID do usuário
    process.env.JWT_SECRET, // Chave secreta armazenada em uma variável de ambiente
    { expiresIn: '1h' } // O token expira em 1 hora
);

// Verificação de um token JWT
// Para verificar se o token é válido, usamos a chave secreta novamente para decodificá-lo e verificar sua validade.
jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
        console.log('Token inválido');
    } else {
        console.log('Token válido', decoded); // Decodifica o token e acessa os dados do payload
    }
});

// Autorização de Acesso
// A autorização é o processo de garantir que o usuário tenha permissão para acessar um recurso específico.
// Exemplo de middleware de autorização, onde verificamos o papel do usuário antes de permitir o acesso ao recurso

const autorizacaoMiddleware = (req, res, next) => {
    // Verifica se o usuário possui a permissão adequada (por exemplo, se for um administrador)
    if (req.user.role !== 'admin') {
        return res.status(403).send('Acesso negado'); // Retorna erro 403 se não for um administrador
    }
    next(); // Se for admin, permite que a requisição prossiga
};

// Exemplo de uso do middleware de autorização em uma rota protegida
app.get('/admin', autorizacaoMiddleware, (req, res) => {
    res.send('Bem-vindo, admin!');
});
