# Encapsulamento em JavaScript

O encapsulamento é o processo de esconder os detalhes internos de um objeto e fornecer uma interface pública para manipulação desses dados. Em JavaScript, as propriedades são públicas por padrão, mas podemos simular propriedades privadas usando variáveis dentro do constructor.

## Propriedades públicas e privadas

### Exemplo de encapsulamento:

```javascript
class Carro {
    // Propriedade privada (usando # para indicar propriedade privada)
    #marca;

    // O construtor recebe parâmetros para inicializar a marca e modelo
    constructor(marca, modelo) {
        this.#marca = marca;  // A propriedade #marca é privada e só pode ser acessada dentro da classe
        this.modelo = modelo; // A propriedade modelo é pública
    }

    // Método público para obter a marca
    obterMarca() {
        return this.#marca;  // A marca é acessada por meio de um método público
    }
}

// Criando um objeto da classe Carro
let meuCarro = new Carro("Toyota", "Corolla");

// Chamando o método público para obter a marca
console.log(meuCarro.obterMarca()); // Toyota

// Acessar a propriedade privada diretamente resultará em erro
// console.log(meuCarro.#marca); // Erro! #marca é privada
```

## Métodos públicos e privados
Métodos públicos podem ser acessados fora da classe, enquanto métodos privados não podem ser acessados diretamente.

```javascript
class ContaBancaria {
    // Propriedade privada (saldo)
    #saldo;

    // O construtor inicializa o saldo
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    // Método público para depositar dinheiro
    depositar(valor) {
        this.#saldo += valor; // Modifica o saldo privado
        console.log(`Depósito de R$${valor} realizado.`);
    }

    // Método público para obter o saldo
    obterSaldo() {
        return this.#saldo; // Retorna o saldo privado
    }
}

// Criando um objeto da classe ContaBancaria
let conta = new ContaBancaria(100);

// Depositando dinheiro
conta.depositar(50); // Depósito de R$50 realizado.

// Obtendo o saldo
console.log(conta.obterSaldo()); // 150

// Acessar a propriedade privada diretamente resultará em erro
// console.log(conta.#saldo); // Erro! #saldo é privado
```

## Getters e Setters
Getters são usados para acessar o valor de uma propriedade privada, e Setters são usados para modificar o valor dessa propriedade.

```javascript
class Produto {
    // Propriedade privada (preço)
    #preco;

    // O construtor inicializa o nome e o preço
    constructor(nome, preco) {
        this.nome = nome;
        this.setPreco(preco); // Usando o setter para definir o preço
    }

    // Getter para obter o preço
    getPreco() {
        return this.#preco;
    }

    // Setter para modificar o preço
    setPreco(preco) {
        if (preco > 0) {
            this.#preco = preco;  // Define o preço somente se for maior que zero
        } else {
            console.log("Preço inválido");
        }
    }
}

// Criando um objeto da classe Produto
let produto = new Produto("Cadeira", 200);

// Acessando o preço através do getter
console.log(produto.getPreco()); // 200

// Modificando o preço através do setter
produto.setPreco(250);
console.log(produto.getPreco()); // 250

// Tentando modificar o preço com um valor inválido
produto.setPreco(-50); // Preço inválido
```