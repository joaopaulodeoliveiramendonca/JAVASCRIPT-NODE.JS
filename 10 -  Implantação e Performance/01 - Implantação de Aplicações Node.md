
# Implantação de Aplicações Node.js

## O que é Implantação de Aplicações?
Implantação é o processo de colocar sua aplicação em um servidor ou na nuvem para que ela seja acessível por usuários fora do seu ambiente de desenvolvimento.

## Plataformas de Implantação Comuns

### Heroku
Uma plataforma como serviço (PaaS) que facilita a implantação de aplicativos web.

### DigitalOcean
Fornece servidores VPS para hospedar suas aplicações.

### AWS (Amazon Web Services)
Oferece uma infraestrutura robusta para escalabilidade de aplicações.

### Google Cloud
Plataforma de nuvem da Google, que oferece várias ferramentas para hospedagem de serviços.

## Implantação no Heroku
O Heroku é uma das formas mais simples de implantar uma aplicação Node.js. O Heroku cuida da infraestrutura para você e facilita o processo de deploy.

### Passos para implantar no Heroku:
1. **Instalar o Heroku CLI**: Baixe o Heroku CLI no site oficial.
2. **Login no Heroku**: Execute o comando `heroku login`.
3. **Criar um repositório Git** (caso ainda não tenha):
   ```bash
   git init
   git add .
   git commit -m "primeiro commit"
   ```
4. **Criar um novo aplicativo no Heroku**:
   ```bash
   heroku create nome-do-app
   ```
5. **Fazer deploy da aplicação**:
   ```bash
   git push heroku master
   ```
6. **Verifique sua aplicação**: O Heroku irá fornecer uma URL para acessar sua aplicação.

### Exemplo de Procfile para Heroku:
O Procfile é necessário para informar ao Heroku como iniciar sua aplicação Node.js.
```plaintext
web: node app.js
```

#### Explicação:
- O comando `heroku create` cria um novo aplicativo na plataforma Heroku.
- O comando `git push heroku master` faz o upload do código para o Heroku, que automaticamente inicia sua aplicação.
