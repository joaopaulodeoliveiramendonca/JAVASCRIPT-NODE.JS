// Gerenciamento de Pacotes com NPM

// O que é o NPM?
// O npm (Node Package Manager) é o gerenciador de pacotes padrão do Node.js.
// Ele permite que você instale e gerencie pacotes e bibliotecas externas,
// facilitando o desenvolvimento de suas aplicações.

// package.json
// O arquivo package.json contém informações sobre o seu projeto, como dependências e scripts.

// Criando o package.json
// Quando você inicia um projeto Node.js, o npm cria um arquivo package.json para armazenar as dependências.
// Para iniciar um novo projeto, use:
console.log('Para criar o package.json, no terminal digite: npm init');

// O npm irá fazer uma série de perguntas sobre o seu projeto e, no final, gerará o arquivo package.json.

// Instalando pacotes
// Para instalar um pacote com npm, basta usar o comando:
// npm install <nome-do-pacote>

// Exemplo de instalação do Express:
console.log('Para instalar o pacote Express, no terminal digite: npm install express');

// Dependências e Dependências de Desenvolvimento
// Dependências: Pacotes que são necessários para o funcionamento da aplicação em produção.
// Dependências de desenvolvimento: Pacotes necessários apenas durante o desenvolvimento
// (exemplo: ferramentas de teste ou compiladores).

// Para instalar pacotes de desenvolvimento, use o parâmetro --save-dev:
// npm install --save-dev jest

// Exemplo de instalação de dependência de desenvolvimento (ferramenta de teste):
console.log('Para instalar o pacote de desenvolvimento Jest, no terminal digite: npm install --save-dev jest');

// Outros comandos úteis do NPM:

// npm start: Executa o script "start" definido no package.json.
// npm run: Executa outros scripts definidos no package.json.

console.log('Para executar o script start, no terminal digite: npm start');
console.log('Para executar outro script definido no package.json, no terminal digite: npm run <nome-do-script>');
