// Herança e Polimorfismo

// Herança em JavaScript
// A herança permite que uma classe "herde" as propriedades e métodos de outra classe. 
// Em JavaScript, isso é feito com a palavra-chave extends.

// Exemplo de herança:
class Animal {
    // O construtor da classe Animal inicializa a propriedade nome
    constructor(nome) {
        this.nome = nome;
    }

    // Método falar() da classe Animal
    falar() {
        console.log(`${this.nome} faz um som`);
    }
}

// A classe Cachorro herda da classe Animal
class Cachorro extends Animal {
    // Sobrescreve o método falar() da classe Animal
    falar() {
        console.log(`${this.nome} late`);
    }
}

// Criando uma instância da classe Cachorro
let cachorro = new Cachorro("Rex");
cachorro.falar(); // Rex late

// No exemplo acima, a classe Cachorro herda a classe Animal, mas sobrescreve o método falar().

// Polimorfismo em JavaScript
// Polimorfismo é a habilidade de uma classe filha sobrescrever métodos de uma classe pai.
// O mesmo método pode ter comportamentos diferentes dependendo do tipo do objeto.

// Exemplo de polimorfismo:
class Gato extends Animal {
    // Sobrescreve o método falar() da classe Animal
    falar() {
        console.log(`${this.nome} mia`);
    }
}

// Criando uma instância da classe Gato
let gato = new Gato("Whiskers");
gato.falar(); // Whiskers mia

// Criando uma instância da classe Animal
let animal = new Animal("Generic Animal");
animal.falar(); // Generic Animal faz um som
