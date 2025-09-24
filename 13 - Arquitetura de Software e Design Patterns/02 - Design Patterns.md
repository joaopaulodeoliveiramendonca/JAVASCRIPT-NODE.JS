
# O que são Design Patterns?

**Design patterns** são soluções reutilizáveis para problemas comuns de design de software. Eles fornecem uma maneira padronizada de resolver problemas de arquitetura e design de software.

## Principais Padrões de Design:

### 1. Singleton
Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a essa instância.

**Exemplo**: Usado em bancos de dados ou gerenciadores de configuração, onde você só quer ter uma única instância da conexão ao banco.

### 2. Factory Method
Define uma interface para criar objetos, mas permite que subclasses decidam qual classe instanciar.

**Exemplo**: Em vez de criar diretamente um objeto de classe, você usa um método para criar o objeto adequado.

**Exemplo de Factory Method**:

```javascript
class Car {
  constructor(model) {
    this.model = model;
  }

  getInfo() {
    return `Carro modelo: ${this.model}`;
  }
}

class CarFactory {
  static createCar(model) {
    return new Car(model);
  }
}

const myCar = CarFactory.createCar('Fusca');
console.log(myCar.getInfo()); // Carro modelo: Fusca
```

### 3. Observer
Permite que um objeto (o "sujeito") notifique outros objetos (os "observadores") sobre mudanças de estado.

**Exemplo**: Usado em sistemas de notificações, onde a mudança de um objeto (ex: usuário se inscreve em um serviço) deve notificar outros objetos (ex: enviar email de confirmação).

**Exemplo de Observer**:

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class Observer {
  update(message) {
    console.log(`Recebido: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers('Novo evento!'); // Saída: 
// Recebido: Novo evento!
// Recebido: Novo evento!
```

### 4. Strategy
Permite que você defina uma família de algoritmos, encapsule cada um e os torne intercambiáveis.

**Exemplo**: Em sistemas de pagamento, onde você pode escolher entre diferentes métodos (cartão de crédito, PayPal, etc.) sem modificar a lógica principal.

**Exemplo de Strategy**:

```javascript
class PaymentStrategy {
  pay(amount) {
    throw 'pay() method must be implemented';
  }
}

class CreditCardPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Pagando R$${amount} com cartão de crédito`);
  }
}

class PayPalPayment extends PaymentStrategy {
  pay(amount) {
    console.log(`Pagando R$${amount} com PayPal`);
  }
}

class PaymentContext {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  executePayment(amount) {
    this.paymentMethod.pay(amount);
  }
}

const payment1 = new PaymentContext(new CreditCardPayment());
payment1.executePayment(100); // Pagando R$100 com cartão de crédito

const payment2 = new PaymentContext(new PayPalPayment());
payment2.executePayment(200); // Pagando R$200 com PayPal
```

# Arquitetura de Software

## O que é Arquitetura de Software?
Arquitetura de software refere-se à estrutura fundamental de um sistema, definindo como os componentes principais interagem entre si. A arquitetura de um sistema deve ser pensada para ser escalável, flexível e de fácil manutenção.

## Principais Tipos de Arquitetura de Software:

### 1. Monolítica
Toda a lógica da aplicação reside em um único projeto ou módulo. Embora fácil de implementar no início, pode se tornar difícil de manter à medida que o sistema cresce.

### 2. Microserviços
Divide a aplicação em serviços menores e independentes. Cada serviço é responsável por uma parte específica da lógica de negócios e comunica-se com outros via APIs.

### 3. Serverless
Permite que você execute funções sem se preocupar com servidores ou infraestrutura. Plataformas como **AWS Lambda** são exemplos.

## Arquitetura para Node.js
Uma arquitetura comum para Node.js envolve o uso de **Express.js** para o backend e a divisão de funcionalidades em **Model-View-Controller (MVC)**. Com isso, a lógica é separada em três camadas:

- **Model**: Responsável pela interação com o banco de dados.
- **View**: A camada de apresentação, geralmente associada ao frontend.
- **Controller**: Contém a lógica de negócios que interage com os models e as views.

### Exemplo de estrutura MVC:

```
/app
  /controllers
    userController.js
  /models
    userModel.js
  /routes
    userRoutes.js
  /views
    userView.js
  /config
    database.js
  app.js
```

# Melhoria de Testes e Cobertura

## Testando Segurança
É importante garantir que sua aplicação esteja protegida contra as vulnerabilidades mais comuns. Ferramentas como **OWASP ZAP** podem ser usadas para automatizar testes de segurança em sua API.

## Cobertura de Testes
Use ferramentas como **Jest** ou **Mocha** para garantir que seu código seja bem testado. Uma cobertura de testes elevada pode prevenir falhas em produção.

### Exemplo de comando para ver a cobertura de testes no Jest:

```bash
npm run test -- --coverage
```

# Segurança em Node.js

## Por que a segurança é importante em Node.js?
Aplicações Node.js, assim como qualquer outro tipo de aplicação, precisam de medidas de segurança para proteger dados sensíveis, impedir ataques maliciosos e garantir a integridade e a confiabilidade do sistema.

## Principais ameaças em aplicações Node.js:

### 1. Injeção de SQL (SQL Injection)
Quando um atacante consegue manipular uma consulta SQL, geralmente através de entradas de usuários.

### 2. Cross-Site Scripting (XSS)
Quando um atacante injeta scripts maliciosos em páginas web.

### 3. Cross-Site Request Forgery (CSRF)
Quando um atacante engana um usuário autenticado a fazer ações indesejadas em uma aplicação web.

### 4. Man-in-the-Middle (MITM)
Quando um atacante intercepta e manipula a comunicação entre o cliente e o servidor.
