# Gerenciamento de Pacotes com NPM

## O que é o NPM?

O npm (Node Package Manager) é o gerenciador de pacotes padrão do Node.js. Ele permite que você instale e gerencie pacotes e bibliotecas externas, facilitando o desenvolvimento de suas aplicações.

## package.json

O arquivo `package.json` contém informações sobre o seu projeto, como dependências e scripts.

### Criando o package.json

Quando você inicia um projeto Node.js, o npm cria um arquivo `package.json` para armazenar as dependências. Para iniciar um novo projeto, use:

```bash
npm init
```
O npm irá fazer uma série de perguntas sobre o seu projeto e, no final, gerará o arquivo package.json.

## Instalando pacotes
Para instalar um pacote com npm, basta usar o comando:

```bash
npm install <nome-do-pacote>
```

### Exemplo de instalação do Express:
```bash
npm install express
```

## Dependências e Dependências de Desenvolvimento
**Dependências:** Pacotes que são necessários para o funcionamento da aplicação em produção.

**Dependências de desenvolvimento:** Pacotes necessários apenas durante o desenvolvimento (exemplo: ferramentas de teste ou compiladores).

Para instalar pacotes de desenvolvimento, use o parâmetro `--save-dev`:

```bash
npm install --save-dev jest
```
Exemplo de instalação de dependência de desenvolvimento (ferramenta de teste):

```bash
npm install --save-dev jest
```

## Outros comandos úteis do NPM:
**npm start:** Executa o script "start" definido no package.json.

**npm run:** Executa outros scripts definidos no package.json.

```bash
npm start
```

Para executar outro script definido no package.json, no terminal digite:

```bash
npm run <nome-do-script>
```




## Explicação dos comandos:
Aqui está um exemplo de package.json com os scripts npm start e npm run configurados:

**npm start:** Usado para iniciar a aplicação. Neste exemplo, ele executa node index.js.

**npm run dev:** Executa o script dev, que usa o nodemon para rodar o servidor em modo de desenvolvimento e reiniciar automaticamente sempre que algum arquivo for alterado.

***Nodemon*** é uma ferramenta para desenvolvedores Node.js que monitora automaticamente as alterações nos arquivos do projeto e reinicia o servidor ou a aplicação sempre que uma modificação é detectada, sem a necessidade de reinício manual. Isso agiliza o processo de desenvolvimento, tornando-o mais eficiente. Ele pode ser facilmente instalado como uma dependência de desenvolvimento e configurado para monitorar tipos de arquivos específicos. O Nodemon é amplamente utilizado para evitar a interrupção do fluxo de trabalho, permitindo que as alterações sejam refletidas imediatamente no servidor.

**npm test:** Usado para rodar testes (neste caso, é apenas um exemplo simples).

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Descrição do meu projeto",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",           // Comando para iniciar o servidor
    "dev": "nodemon index.js",          // Comando para rodar o servidor em modo de desenvolvimento (com reinicialização automática)
    "test": "echo \"Erro: nenhum teste especificado\" && exit 1"  // Comando de teste, exemplo simples
  },
  "dependencies": {
    "express": "^4.17.1"               // Exemplo de dependência
  },
  "devDependencies": {
    "nodemon": "^2.0.7"                // Exemplo de dependência de desenvolvimento
  },
  "author": "Seu Nome",
  "license": "ISC"
}
```