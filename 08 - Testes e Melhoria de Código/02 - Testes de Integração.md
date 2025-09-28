# Testes de Integração

## O que são Testes de Integração?
Testes de integração verificam se diferentes partes do seu sistema (como funções ou APIs) funcionam corretamente juntas. Isso é útil para verificar se a interação entre diferentes componentes do sistema está funcionando como esperado.

## Exemplo de Teste de Integração com API
Vamos testar uma API simples usando **Supertest**, que é uma biblioteca que facilita o teste de APIs no Node.js.

### Instalação do Supertest
Para instalar o Supertest, execute o seguinte comando:

```bash
npm install supertest --save-dev
```

Exemplo de teste de integração com Supertest:
```javascript
// Importando o módulo de requisição do Supertest e o aplicativo Express
const request = require('supertest');
const app = require('../app'); // Supondo que você tenha um app Express configurado

// Describe é usado para agrupar testes relacionados
describe('GET /clientes', () => {
  // It descreve o comportamento esperado
  it('Deve retornar uma lista de clientes', async () => {
    // Realiza uma requisição GET para o endpoint /clientes usando Supertest
    const resposta = await request(app).get('/clientes');
    
    // Verifica se o status da resposta é 200 (OK)
    assert.equal(resposta.status, 200);
    
    // Verifica se o corpo da resposta é um array
    assert.isArray(resposta.body);
  });
});
```

## Explicação:
**Testes de Integração:** Esses testes garantem que as diferentes partes do sistema (como funções e APIs) funcionem corretamente quando interagem entre si. No exemplo, estamos verificando se a API Express responde corretamente ao endpoint /clientes.

**Supertest:** O Supertest é uma biblioteca que facilita a realização de requisições HTTP em testes, permitindo testar os endpoints da API.

**describe():** Agrupa testes relacionados. Neste caso, estamos agrupando testes para o endpoint GET /clientes.

**it():** Descreve o comportamento esperado. Estamos testando se a requisição GET /clientes retorna corretamente uma lista de clientes.

**request(app):** Faz uma requisição HTTP para a API Express. O app deve ser o módulo exportado do seu servidor Express.

**assert.equal():** Verifica se o status da resposta HTTP é 200.

**assert.isArray():** Verifica se o corpo da resposta é um array, como esperado.

## Passos para Execução:
Instalar dependências:
Execute o comando para instalar o Supertest:

```bash
npm install supertest --save-dev
```

## Executar os testes:
Se você configurou o Mocha no seu projeto, pode rodar os testes com o seguinte comando:

```bash
npm test
```






