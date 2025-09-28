# Exemplo Prático de SOLID

## Exemplo de violação do SRP (Princípio da Responsabilidade Única):

```javascript
class Order {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }

  calculateTotal() {
    // Calcula o total
    return this.price;
  }

  printReceipt() {
    // Imprime o recibo
    console.log(`Item: ${this.item}, Preço: ${this.price}`);
  }
}
```

Neste exemplo, a classe Order tem duas responsabilidades: calcular o total e imprimir o recibo.

```javascript
Solução usando SRP:
javascript
Copiar código
class Order {
  constructor(item, price) {
    this.item = item;
    this.price = price;
  }

  calculateTotal() {
    return this.price;
  }
}

class ReceiptPrinter {
  print(order) {
    console.log(`Item: ${order.item}, Preço: ${order.price}`);
  }
}
```