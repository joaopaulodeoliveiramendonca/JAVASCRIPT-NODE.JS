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
