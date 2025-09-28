
# Exemplo Completo de uma Aplicação Fullstack com Node.js e React

## Estrutura da Aplicação:

### Backend (Node.js):
API que retorna a lista de usuários.

### Frontend (React):
Requisita a lista de usuários ao backend e exibe no navegador.

## 1. Backend (Node.js)

O backend será uma API simples que retorna uma lista de usuários. Vamos configurar o servidor com Express e a rota para listar os usuários.

### Backend - server.js
```javascript
// Importando o Express
const express = require('express');
const cors = require('cors');  // Usado para permitir requisições de outras origens (necessário para o React)

const app = express();
const port = 3000;

// Habilitando CORS para permitir comunicação com o frontend
app.use(cors());

// Dados simulados (lista de usuários)
const usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' },
  { id: 3, nome: 'José' }
];

// Rota para retornar a lista de usuários
app.get('/usuarios', (req, res) => {
  res.json(usuarios); // Retorna os dados de usuários no formato JSON
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
```

### Explicação do Backend:

- Usamos o Express para criar o servidor.
- Habilitamos o CORS para permitir que o frontend (React) se comunique com o backend.
- A rota **/usuarios** retorna um array de usuários simulados.
- O servidor roda na porta **3000**.

## 2. Frontend (React)

O frontend irá requisitar a lista de usuários ao backend usando a biblioteca Axios para fazer a requisição HTTP.

### Frontend - App.js (React)
```javascript
// Importando o React e o Axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState([]);

  // Usando useEffect para fazer a requisição GET ao backend quando o componente for montado
  useEffect(() => {
    // Requisição GET para buscar os usuários do backend
    axios.get('http://localhost:3000/usuarios')
      .then(response => {
        setUsuarios(response.data); // Atualiza o estado com os dados recebidos
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
      });
  }, []); // O array vazio [] garante que a requisição seja feita apenas uma vez após o carregamento

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.nome}</li>  // Exibe o nome de cada usuário
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### Explicação do Frontend:

- **useState**: Armazena a lista de usuários que será exibida.
- **useEffect**: Faz uma requisição ao backend assim que o componente React for montado (componente carregado no DOM).
- **Axios**: Faz uma requisição GET para a URL do backend (http://localhost:3000/usuarios) e atualiza o estado com a resposta.
- **map()**: Itera sobre os usuários e os exibe em uma lista (**<ul>**).

## Passos para Configurar e Testar a Aplicação Fullstack:

### Configurar o Backend (Node.js):

1. Crie uma pasta para o backend e um arquivo **server.js**.
2. Instale o Express e o CORS:
   ```bash
   npm init
   npm install express cors
   ```
3. Copie o código do backend no arquivo **server.js**.
4. Execute o servidor backend:
   ```bash
   node server.js
   ```
O servidor estará disponível em **http://localhost:3000**.

### Configurar o Frontend (React):

1. Crie o frontend usando o **Create React App**:
   ```bash
   npx create-react-app web
   ```
2. Acesse o diretório do projeto React:
   ```bash
   cd web
   ```
3. Instale o **Axios**:
   ```bash
   npm install axios
   ```
4. Substitua o conteúdo de **src/App.js** com o código fornecido para o frontend.
5. Execute o servidor React:
   ```bash
   npm start
   ```
O frontend estará disponível em **http://localhost:3000**. Quando você acessar a página, ele fará uma requisição para **http://localhost:3000/usuarios** e exibirá os usuários.

## Conclusão:

- **Backend**: O servidor Node.js fornece a API com a lista de usuários.
- **Frontend**: O React faz uma requisição ao backend usando Axios e exibe a lista de usuários.

Isso configura uma aplicação fullstack simples onde o frontend (React) interage com o backend (Node.js) para obter dados e exibi-los em tempo real.
