# Middleware no Express

## O que é Middleware?

Middleware são funções que têm acesso ao objeto de requisição (`req`), ao objeto de resposta (`res`) e à função `next` no ciclo de requisição/resposta. O Express usa middleware para realizar várias tarefas, como validação de dados, verificação de autenticação, entre outros.

## Usando Middleware no Express

### Middleware global (para todas as rotas)
O middleware global será executado em todas as requisições feitas ao servidor.

```javascript
app.use((req, res, next) => {
  // Exibe a data e hora da requisição e a rota acessada
  const date = new Date();
  console.log(`[${date.toISOString()}] - Requisição recebida na rota: ${req.originalUrl} - Método: ${req.method}`);

  // Passa para o próximo middleware ou rota
  next();
});
```

## Middleware para uma rota específica
O middleware pode ser aplicado a uma rota específica, ou seja, ele só será executado quando a rota correspondente for acessada.

Exemplo de middleware para uma rota específica (`POST` `/clientes`):
```javascript
app.post('/clientes', (req, res, next) => {
  // Verifica se o nome foi fornecido no corpo da requisição
  if (!req.body.nome) {
    // Se não houver nome, retorna erro com código 400
    return res.status(400).send('Nome é obrigatório');
  }

  // Se o nome estiver presente, passa para o próximo middleware ou rota
  next();
}, (req, res) => {
  // Se o nome estiver presente, cria o cliente
  res.send('Cliente criado');
});
```

## Explicação

### Middleware Global
O middleware definido com `app.use()` será executado para todas as requisições, exibindo a data e hora da requisição.

### Middleware para Rota Específica
O middleware para a rota `/clientes` verifica se o corpo da requisição contém o campo nome. Se faltar, retorna um erro `status 400`. Caso contrário, chama `next()` para passar o controle para a próxima função (que cria o cliente).

### Função next()
O `next()` é essencial para permitir que a execução continue, seja para o próximo middleware ou para a rota que envia a resposta.