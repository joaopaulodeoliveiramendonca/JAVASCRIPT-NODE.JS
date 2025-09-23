// Tratamento de Erros com Async/Await

// Quando usamos async/await, podemos tratar erros de forma mais simples com try/catch,
// ao invés de usar .catch() como nas Promises tradicionais.

// Exemplo de tratamento de erro com Async/Await:

// Função assíncrona para buscar dados de uma API
async function fetchDados() {
  try {
    // Usando await para aguardar a resposta da API
    const resposta = await fetch('https://api.exemplo.com/dados');
    
    // Verifica se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error('Falha na requisição: ' + resposta.status);
    }
    
    // Converte a resposta em JSON
    const dados = await resposta.json();
    
    // Exibe os dados obtidos
    console.log(dados);
  } catch (erro) {
    // Captura e exibe qualquer erro que ocorra durante o processo
    console.error('Erro ao buscar dados:', erro);
  }
}

// Chamando a função fetchDados
fetchDados();

//Explicação:
//try/catch:

//try: Dentro do bloco try, colocamos o código assíncrono (como o fetch) que pode gerar erros.

//catch: Se ocorrer algum erro dentro do try, ele será capturado no catch, onde podemos tratá-lo ou exibi-lo de forma controlada.

//Função fetchDados:

//A função faz uma requisição para uma API usando fetch e aguarda a resposta com await.

//Se a resposta não for bem-sucedida (status diferente de 200), um erro é gerado com a mensagem de falha.

//Caso algo dê errado durante a requisição ou a conversão dos dados para JSON, o erro será capturado pelo bloco catch, que exibe a mensagem de erro no console.

//Vantagens do try/catch:

//O uso de try/catch torna o tratamento de erros mais simples e intuitivo, especialmente quando comparamos com a abordagem de then/catch usada em Promises tradicionais. Isso facilita a leitura e manutenção do código assíncrono.