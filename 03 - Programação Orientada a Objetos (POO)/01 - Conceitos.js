// Conceitos de POO (Programação Orientada a Objetos)

// O que é Programação Orientada a Objetos?
// POO é um paradigma de programação que organiza o código em torno de objetos,
// que são instâncias de classes. Em vez de apenas funções e variáveis, a POO
// permite representar entidades do mundo real como objetos, com propriedades (dados)
// e métodos (funções).

// Os 4 pilares da POO:

// 1. Encapsulamento:
// O encapsulamento é a prática de esconder os detalhes internos de um objeto e fornecer
// uma interface pública para interagir com ele. Isso ajuda a proteger o estado do objeto
// e evita que outros objetos ou partes do código modifiquem seu estado diretamente.

// Exemplo de Encapsulamento:
class Pessoa {
  // Propriedade privada (não pode ser acessada diretamente fora da classe)
  #nome;
  
  // Construtor para inicializar a propriedade 'nome'
  constructor(nome) {
    this.#nome = nome;
  }

  // Método público para acessar a propriedade privada 'nome'
  getNome() {
    return this.#nome;
  }

  // Método público para modificar a propriedade 'nome'
  setNome(nome) {
    this.#nome = nome;
  }
}

// 2. Herança:
// A herança é a capacidade de uma classe herdar características e comportamentos
// de outra classe. A classe que herda é chamada de subclasse, e a classe da qual
// ela herda é chamada de superclasse.

// Exemplo de Herança:
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz barulho.`);
  }
}

class Cachorro extends Animal {
  // A classe Cachorro herda de Animal e pode sobrescrever ou estender comportamentos
  falar() {
    console.log(`${this.nome} late.`);
  }
}

const cachorro = new Cachorro('Rex');
cachorro.falar(); // Saída: Rex late.

// 3. Polimorfismo:
// Polimorfismo é a capacidade de uma função ou método se comportar de maneira
// diferente com base no tipo de objeto. Em outras palavras, o mesmo método pode
// ter diferentes implementações dependendo da classe que o utiliza.

// Exemplo de Polimorfismo:
class Gato extends Animal {
  falar() {
    console.log(`${this.nome} mia.`);
  }
}

const gato = new Gato('Miau');
gato.falar(); // Saída: Miau mia.

// 4. Abstração:
// A abstração é o processo de ocultar a complexidade e mostrar apenas o que é necessário.
// Ela permite que os detalhes de implementação sejam escondidos enquanto a interface pública
// fica acessível para o usuário ou outros objetos.

// Exemplo de Abstração:
class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  // Método para depositar dinheiro, que é a interface pública
  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de ${valor} realizado.`);
    }
  }

  // Método para consultar o saldo
  consultarSaldo() {
    console.log(`Saldo atual: ${this.#saldo}`);
  }

  // Detalhes de implementação (não expostos diretamente)
  #calcularJuros() {
    return this.#saldo * 0.05;
  }
}

const conta = new ContaBancaria(100);
conta.depositar(50);
conta.consultarSaldo(); // Saída: Saldo atual: 150
