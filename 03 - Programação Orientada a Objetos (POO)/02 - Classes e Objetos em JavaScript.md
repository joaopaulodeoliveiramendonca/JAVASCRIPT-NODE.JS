# Classes e Objetos em JavaScript

## Criando classes e objetos
Em JavaScript, classes são um modelo para criar objetos. Você pode definir um conjunto de propriedades e métodos dentro de uma classe.

### Exemplo de classe e objeto:
```javascript
class Pessoa {
    // O construtor é um método especial para inicializar as propriedades do objeto.
    constructor(nome, idade) {
        this.nome = nome;  // A propriedade nome recebe o valor passado ao instanciar a classe
        this.idade = idade;  // A propriedade idade recebe o valor passado ao instanciar a classe
    }

    // Método saudacao que imprime uma mensagem usando as propriedades do objeto
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}
```

## Criando um objeto com a classe Pessoa:
```javascript
let pessoa1 = new Pessoa("João", 25); // Instanciando a classe Pessoa e passando os valores para nome e idade
pessoa1.saudacao();  // Olá, meu nome é João e tenho 25 anos.
```

## Instanciação de objetos
A instância de um objeto é criada com a palavra-chave new. A classe define o modelo, e o objeto é a instância criada.








O ChatGPT pode cometer erros. Considere verificar informações importantes.