# Operações de CRUD (Create, Read, Update, Delete)

## CRUD em PostgreSQL:

### Create (Inserir dados)
Usamos `INSERT INTO` para adicionar dados ao banco.

**Exemplo de inserção de um novo cliente:**

```javascript
client.query(
    "INSERT INTO clientes(nome, idade, email) VALUES($1, $2, $3)", 
    ['Ana', 30, 'ana@email.com'], 
    (err, res) => {
        if (err) {
            console.error('Erro ao inserir', err);
        } else {
            console.log('Cliente inserido com sucesso!');
        }
    }
);
```

### Read (Ler dados)
Usamos `SELECT` para recuperar dados do banco.

**Exemplo de consulta para ler todos os clientes:**

```javascript
client.query(
    "SELECT * FROM clientes", 
    (err, res) => {
        if (err) {
            console.error('Erro ao consultar', err);
        } else {
            console.log(res.rows);  // Exibe todos os clientes
        }
    }
);
```

### Update (Atualizar dados)
Usamos `UPDATE` para modificar dados no banco.

**Exemplo de atualização de dados de um cliente:**

```javascript
client.query(
    "UPDATE clientes SET idade = $1 WHERE nome = $2", 
    [32, 'Ana'], 
    (err, res) => {
        if (err) {
            console.error('Erro ao atualizar', err);
        } else {
            console.log('Cliente atualizado com sucesso!');
        }
    }
);
```

### Delete (Excluir dados)
Usamos `DELETE` para remover dados do banco.

**Exemplo de exclusão de um cliente:**

```javascript
client.query(
    "DELETE FROM clientes WHERE nome = $1", 
    ['Ana'], 
    (err, res) => {
        if (err) {
            console.error('Erro ao excluir', err);
        } else {
            console.log('Cliente excluído com sucesso!');
        }
    }
);
```

## CRUD em MongoDB (Usando Mongoose):

### Create (Inserir dados)
Usamos o método `save()` para adicionar um novo documento.

**Exemplo de inserção de um novo cliente:**

```javascript
const novoCliente = new Cliente({
    nome: 'João',
    idade: 25,
    email: 'joao@email.com'
});

novoCliente.save()
    .then(() => console.log('Cliente salvo com sucesso!'))
    .catch((err) => console.error('Erro ao salvar cliente', err));
```

### Read (Ler dados)
Usamos o método `find()` para buscar documentos.

Exemplo de consulta para encontrar clientes com idade maior que 20:

```javascript
Cliente.find({ idade: { $gt: 20 } })  // Clientes com idade maior que 20
    .then((clientes) => console.log(clientes))
    .catch((err) => console.error('Erro ao buscar clientes', err));
```

### Update (Atualizar dados)
Usamos o método `updateOne()` para modificar um documento.

**Exemplo de atualização de dados de um cliente:**

```javascript
Cliente.updateOne({ nome: 'João' }, { idade: 30 })
    .then(() => console.log('Cliente atualizado com sucesso!'))
    .catch((err) => console.error('Erro ao atualizar cliente', err));
```

### Delete (Excluir dados)
Usamos o método `deleteOne()` para remover um documento.

**Exemplo de exclusão de um cliente:**

```javascript
Cliente.deleteOne({ nome: 'João' })
    .then(() => console.log('Cliente excluído com sucesso!'))
    .catch((err) => console.error('Erro ao excluir cliente', err));
```

## Explicação:

### PostgreSQL:
- `INSERT INTO`: Usado para inserir novos registros.
- `SELECT`: Usado para ler dados da tabela.
- `UPDATE`: Usado para atualizar registros existentes.
- `DELETE`: Usado para excluir registros da tabela.

### MongoDB (Usando Mongoose):
- `save()`: Método para salvar um novo documento.
- `find()`: Método para buscar documentos com base em uma consulta.
- `updateOne()`: Método para atualizar um documento específico.
- `deleteOne()`: Método para excluir um documento específico.

Cada operação de `CRUD` tem seu próprio exemplo de implementação, tanto para `PostgreSQL` quanto para `MongoDB`, e os erros são tratados no console para facilitar a depuração. As explicações estão detalhadas nos comentários para ajudar a entender como cada operação funciona.