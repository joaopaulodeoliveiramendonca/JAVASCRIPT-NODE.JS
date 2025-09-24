# Blockchain e Criptomoedas

## O que é Blockchain?

**Blockchain** é uma tecnologia de registro distribuído que permite transações seguras e transparentes sem a necessidade de uma autoridade central (ex: bancos). Cada bloco contém um registro de transações e é encadeado ao bloco anterior, criando uma cadeia de blocos.

## Criptomoedas e Blockchain em Node.js

O **Bitcoin** e outras criptomoedas são construídas em blockchain, e você pode interagir com essas tecnologias usando bibliotecas JavaScript. A biblioteca **Web3.js** permite que você interaja com a blockchain do **Ethereum**, que é uma plataforma popular para contratos inteligentes.

### Exemplo de uso do Web3.js para interagir com Ethereum:

1. Instale o **Web3.js**:

```bash
npm install web3
```

# Código de exemplo:

```javascript
Copiar código
const Web3 = require('web3');
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY');

web3.eth.getBlockNumber().then(console.log); // Obtém o número do bloco mais recente na blockchain
```

# Explicação:
O Web3.js se conecta à blockchain Ethereum e permite interagir com ela. No exemplo, estamos obtendo o número do bloco mais recente.

## Tendências em Blockchain:

### 1. Contratos Inteligentes
São programas que executam automaticamente contratos quando as condições são atendidas, como pagamentos automáticos em criptomoedas.

### 2. Finanças Descentralizadas (DeFi)
Criação de serviços financeiros sem intermediários usando blockchain, permitindo transações e empréstimos diretos entre indivíduos.

### 3. NFTs (Non-Fungible Tokens)
Tokens digitais únicos usados para representar a propriedade de itens digitais, como arte, música e outros itens exclusivos.