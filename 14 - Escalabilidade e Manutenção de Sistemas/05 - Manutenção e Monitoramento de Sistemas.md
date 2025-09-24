# Manutenção e Monitoramento de Sistemas

## Monitoramento de Aplicações

### PM2
Além de gerenciar processos, o **PM2** oferece monitoramento de desempenho, como uso de CPU e memória.

**Comando para monitorar com PM2**:

```bash
pm2 monit
```
## Ferramentas de Monitoramento:

### 1. New Relic
Uma ferramenta para monitoramento de performance e tráfego da aplicação, permitindo identificar gargalos e otimizar o desempenho.

### 2. Datadog
Uma plataforma que fornece insights de performance, erros e infraestrutura, ajudando a identificar problemas rapidamente.

### 3. Grafana + Prometheus
Usados para visualização de métricas e dados em tempo real, ajudando a monitorar a saúde da aplicação e da infraestrutura.

## Logs e Auditoria
Winston e Morgan são populares para logging em Node.js, permitindo registrar atividades da aplicação e monitorar erros.

Exemplo de configuração de Winston para logs:

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.info('Aplicação iniciada');
```

Armazene logs de erros e atividades em arquivos ou sistemas de logging como Loggly ou Papertrail.