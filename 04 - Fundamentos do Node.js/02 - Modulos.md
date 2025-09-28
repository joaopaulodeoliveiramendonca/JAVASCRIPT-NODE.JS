# Módulos no Node.js

## O que são Módulos?

Módulos são blocos de código reutilizáveis que ajudam a organizar a aplicação em partes menores. O Node.js possui módulos internos (nativos) que facilitam tarefas como leitura de arquivos, manipulação de caminhos e até mesmo criação de servidores HTTP.

## Módulos nativos

Alguns dos módulos nativos mais comuns são:

- **http**: Para criar servidores HTTP.
- **fs (file system)**: Para ler e escrever arquivos.
- **path**: Para lidar com caminhos de arquivos.
- **events**: Para trabalhar com eventos (muito usado em Node.js).

## Exemplo de uso do módulo http para criar um servidor simples:

```javascript
const http = require('http');  // Importando o módulo http

// Criando o servidor HTTP
const servidor = http.createServer((req, res) => {
    res.write('Olá, Mundo!');  // Envia a resposta "Olá, Mundo!"
    res.end();  // Finaliza a resposta
});

// O servidor escuta na porta 3000
servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// Ao executar o código acima, o servidor estará escutando na porta 3000, 
// e ao acessar http://localhost:3000, você verá a mensagem "Olá, Mundo!".
```

## Como importar módulos
O comando require() é utilizado para importar módulos no Node.js. Você pode importar tanto módulos internos (como http e fs) quanto módulos externos (instalados via npm). 

### Exemplo de importação de módulo interno:

```javascript
const fs = require('fs');  // Módulo interno para manipulação de arquivos
```

### Exemplo de importação de módulo externo (instalado via npm):
Para instalar o módulo express, você deve rodar no terminal:

```bash
npm install express
```

```javascript
const express = require('express');  // Importando o módulo externo 'express'

// O módulo express facilita a criação de servidores e roteamento em Node.js
```



