// Prevenção de Ataques Comuns em Node.js

// Protegendo Contra SQL Injection
// Se você estiver usando SQL diretamente no Node.js, sempre use prepared statements ou ORMs como Sequelize ou Prisma. 
// Isso impede que dados do usuário sejam interpretados como código SQL.
const { User } = require('../models'); 
User.findOne({ where: { email: req.body.email } }).then(user => { 
    // Não há possibilidade de SQL Injection aqui.
});

// Prevenção de XSS (Cross-Site Scripting)
// Sanitizar entradas de usuários para garantir que não contenham scripts maliciosos.
const xss = require('xss'); 
const nome = xss(req.body.nome); // Remove tags e scripts

// Use bibliotecas como xss-clean para evitar XSS.
const xssClean = require('xss-clean');
app.use(xssClean());

// Prevenção de CSRF (Cross-Site Request Forgery)
// Para proteger contra CSRF, você pode usar tokens CSRF. A biblioteca csurf ajuda a gerar e verificar tokens CSRF.
// Instalação e uso do csurf:
// npm install csurf
const csrf = require('csurf'); 
const csrfProtection = csrf({ cookie: true }); 

app.post('/processar', csrfProtection, (req, res) => { 
    // Lógica para processar a requisição
    res.send("Requisição processada com sucesso!");
});

// Proteção contra Man-in-the-Middle (MITM)
// Use HTTPS para criptografar a comunicação entre o servidor e o cliente. 
// Você pode usar Let's Encrypt para obter certificados SSL gratuitos.
const forceHttps = (req, res, next) => { 
    if (req.headers['x-forwarded-proto'] !== 'https') { 
        return res.redirect('https://' + req.headers.host + req.url); 
    }
    next(); 
};

// Em um ambiente de produção, sempre force HTTPS:
app.use(forceHttps);
