
# Usando Docker para Implantação

## O que é Docker?
O Docker é uma plataforma que permite empacotar sua aplicação em containers, garantindo que ela seja executada da mesma forma em qualquer ambiente (desenvolvimento, testes, produção).

## Por que usar Docker?
O Docker oferece uma maneira fácil de isolar a aplicação e suas dependências, garantindo que ela rode de forma consistente em qualquer ambiente. 
Facilita a escalabilidade e a integração contínua, além de permitir o uso de containers para diferentes componentes da aplicação.

## Criando um Dockerfile para sua aplicação Node.js
O Dockerfile é um arquivo de configuração onde você define como a imagem do Docker será construída.

### Exemplo de Dockerfile:
```Dockerfile
# Usar uma imagem base do Node.js
FROM node:14

# Criar e definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências para o container
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expôr a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
```

### Explicação:
- **FROM node:14**: Usamos uma imagem oficial do Node.js como base.
- **WORKDIR /app**: Define o diretório de trabalho dentro do container.
- **COPY package*.json ./**: Copia os arquivos de dependência para dentro do container.
- **RUN npm install**: Instala as dependências.
- **CMD ["node", "app.js"]**: Inicia a aplicação dentro do container.

## Construindo e rodando o container Docker
### Construir a imagem Docker:
```bash
docker build -t nome-da-imagem .
```

### Rodar o container Docker:
```bash
docker run -p 3000:3000 nome-da-imagem
```

Isso faz com que a aplicação dentro do Docker seja acessível na porta 3000.

## Implantação no Docker no Heroku
O Heroku também suporta deploy de aplicações em Docker. Para implantar, basta seguir os passos de implantação no Heroku, mas com o Docker configurado:
```bash
heroku container:push web
heroku container:release web
```
