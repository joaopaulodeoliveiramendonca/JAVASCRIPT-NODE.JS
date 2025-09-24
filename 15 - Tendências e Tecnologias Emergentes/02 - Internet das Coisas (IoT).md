# Internet das Coisas (IoT)

## O que é IoT?

**Internet das Coisas (IoT)** refere-se à conexão de dispositivos físicos à internet, permitindo que esses dispositivos coletem e troquem dados. Exemplos incluem sensores inteligentes, dispositivos vestíveis e automação doméstica.

## IoT em Node.js

O **Node.js** é frequentemente usado em projetos de IoT devido à sua alta performance e capacidade de lidar com múltiplas conexões simultâneas. A biblioteca **Johnny-Five** é uma das mais populares para interação com Arduino e outros dispositivos de hardware.

### Exemplo de IoT com Node.js e Johnny-Five:

1. Instale a biblioteca Johnny-Five:

```bash
npm install johnny-five
```

# Código de exemplo:

```javascript
Copiar código
const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
  const led = new five.Led(13);
  led.blink(500); // Faz o LED piscar a cada 500ms
});
```

# Explicação:
O exemplo acima usa a biblioteca Johnny-Five para controlar um LED no Arduino (ou outro dispositivo compatível), fazendo-o piscar a cada 500 milissegundos.

## Tendências de IoT:

### 1. Cidades Inteligentes
Uso de IoT para monitoramento e otimização de recursos urbanos, como monitoramento de tráfego e qualidade do ar.

### 2. Automação Residencial
Controle de dispositivos domésticos como luzes, termostatos e sistemas de segurança via IoT.