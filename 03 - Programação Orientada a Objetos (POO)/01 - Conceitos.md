# Conceitos de POO (Programação Orientada a Objetos)

## O que é Programação Orientada a Objetos?
POO é um paradigma de programação que organiza o código em torno de objetos, que são instâncias de classes. Em vez de apenas funções e variáveis, a POO permite representar entidades do mundo real como objetos, com propriedades (dados) e métodos (funções).

### Os 4 pilares da POO:

#### Encapsulamento:
O encapsulamento é a prática de esconder os detalhes internos de um objeto e fornecer uma interface pública para interagir com ele. Isso ajuda a proteger o estado do objeto e evita que outros objetos ou partes do código modifiquem seu estado diretamente.

##### Exemplo de Encapsulamento:
```javascript
class ContaBancaria {
  // Propriedade privada (não pode ser acessada diretamente fora da classe)
  #saldo;

  // Construtor para inicializar o saldo da conta
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  // Método público para depositar um valor na conta
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso.`);
    } else {
      console.log('O valor do depósito deve ser positivo.');
    }
  }

  // Método público para sacar um valor da conta
  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso.`);
    } else {
      console.log('Saldo insuficiente ou valor inválido para saque.');
    }
  }

  // Método público para verificar o saldo da conta
  obterSaldo() {
    return this.#saldo;
  }
}

// Exemplo de uso
const minhaConta = new ContaBancaria(1000);
console.log(minhaConta.obterSaldo()); // 1000

minhaConta.depositar(500);  // Depósito de R$500 realizado com sucesso.
minhaConta.sacar(300);      // Saque de R$300 realizado com sucesso.

console.log(minhaConta.obterSaldo()); // 1200

// Acesso direto ao saldo não é permitido
// console.log(minhaConta.#saldo); // Erro! A propriedade #saldo é privada
```

#### Herança:
A herança é a capacidade de uma classe herdar características e comportamentos de outra classe. A classe que herda é chamada de subclasse, e a classe da qual ela herda é chamada de superclasse.

##### Exemplo de Herança:
```javascript
// Superclasse (Classe Pai)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  // Método comum a todos os animais
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}

// Subclasse (Classe Filha)
class Cachorro extends Animal {
  constructor(nome, raça) {
    // Chama o construtor da superclasse (Animal)
    super(nome);
    this.raça = raça;
  }

  // Sobrescreve o método falar para o comportamento específico do cachorro
  falar() {
    console.log(`${this.nome} faz au au!`);
  }

  // Método específico da subclasse
  correr() {
    console.log(`${this.nome} está correndo!`);
  }
}

// Criando instâncias
const animal = new Animal('Generic Animal');
const cachorro = new Cachorro('Rex', 'Labrador');

animal.falar();  // Generic Animal faz um som.
cachorro.falar();  // Rex faz au au!
cachorro.correr();  // Rex está correndo!
```

#### Polimorfismo:
Polimorfismo é a capacidade de uma função ou método se comportar de maneira diferente com base no tipo de objeto. Em outras palavras, o mesmo método pode ter diferentes implementações dependendo da classe que o utiliza.

Exemplo de Polimorfismo:
```javascript
// Superclasse (Classe Pai)
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  // Método comum a todos os animais
  falar() {
    console.log(`${this.nome} faz um som.`);
  }
}

// Subclasse 1 (Classe Filha)
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  // Sobrescreve o método falar da classe Animal
  falar() {
    console.log(`${this.nome} faz au au!`);
  }
}

// Subclasse 2 (Classe Filha)
class Gato extends Animal {
  constructor(nome) {
    super(nome);
  }

  // Sobrescreve o método falar da classe Animal
  falar() {
    console.log(`${this.nome} faz miau!`);
  }
}

// Função que recebe um Animal e chama seu método falar
function fazerFalar(animal) {
  animal.falar();
}

// Criando instâncias
const cachorro = new Cachorro('Rex');
const gato = new Gato('Mimi');

// Chamando a função que aceita qualquer tipo de Animal
fazerFalar(cachorro);  // Rex faz au au!
fazerFalar(gato);      // Mimi faz miau!
```

#### Abstração:
A abstração é o processo de ocultar a complexidade e mostrar apenas o que é necessário. Ela permite que os detalhes de implementação sejam escondidos enquanto a interface pública fica acessível para o usuário ou outros objetos.

##### Exemplo de Abstração:
```javascript
// Classe abstrata (conceitual, pois JavaScript não tem suporte nativo a classes abstratas)
class Veiculo {
  constructor(marca, modelo) {
    if (this.constructor === Veiculo) {
      throw new Error("Não é possível instanciar a classe 'Veiculo' diretamente.");
    }
    this.marca = marca;
    this.modelo = modelo;
  }

  // Método abstrato - Não tem implementação aqui
  mover() {
    throw new Error("Método 'mover' precisa ser implementado pelas subclasses.");
  }
}

// Subclasse de Veiculo
class Carro extends Veiculo {
  constructor(marca, modelo, tipo) {
    super(marca, modelo);
    this.tipo = tipo;
  }

  // Implementação do método mover
  mover() {
    console.log(`${this.marca} ${this.modelo} está se movendo em uma estrada.`);
  }
}

// Subclasse de Veiculo
class Barco extends Veiculo {
  constructor(marca, modelo, capacidade) {
    super(marca, modelo);
    this.capacidade = capacidade;
  }

  // Implementação do método mover
  mover() {
    console.log(`${this.marca} ${this.modelo} está navegando no mar.`);
  }
}

// Tentando instanciar a classe abstrata 'Veiculo' gera um erro
// const veiculo = new Veiculo('Marca', 'Modelo'); // Error!

// Instanciando objetos das subclasses
const carro = new Carro('Toyota', 'Corolla', 'Sedan');
const barco = new Barco('Yamaha', '242X', '8 pessoas');

// Chamando o método 'mover' nas instâncias
carro.mover();  // Toyota Corolla está se movendo em uma estrada.
barco.mover();   // Yamaha 242X está navegando no mar.
```


