# Escalabilidade em Node.js

O **Node.js** é altamente escalável devido ao seu modelo de I/O não bloqueante e à sua capacidade de lidar com muitas conexões simultâneas. No entanto, para sistemas de grande porte, é preciso usar algumas técnicas de escalabilidade, como balanceamento de carga, clusters e microserviços.

## Escalabilidade Horizontal com Clusters

O **Node.js**, por padrão, utiliza apenas um núcleo da CPU. Para aproveitar múltiplos núcleos, você pode usar o módulo **cluster** para criar múltiplos processos de sua aplicação.

### Exemplo de uso do Cluster no Node.js:

```javascript
const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Número de CPUs: ${numCPUs}`);

  // Cria um worker para cada CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} morreu`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Resposta do servidor!');
  }).listen(8000);
}
```

# Explicação:
O código acima cria um número de "workers" igual ao número de CPUs disponíveis. Cada worker é responsável por atender a uma requisição, e o cluster permite que eles compartilhem a carga, melhorando a escalabilidade e o desempenho da aplicação.

# Escalabilidade Vertical
A escalabilidade vertical pode ser feita simplesmente atualizando o hardware de seus servidores, como adicionar mais RAM ou processadores. No entanto, essa abordagem tem limitações. Portanto, a escalabilidade horizontal com múltiplos servidores é geralmente preferível, pois permite uma escalabilidade quase ilimitada.