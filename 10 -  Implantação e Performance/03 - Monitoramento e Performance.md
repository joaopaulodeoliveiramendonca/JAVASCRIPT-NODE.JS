
# Monitoramento e Performance

## Por que monitorar a performance?
O monitoramento da performance da sua aplicação permite que você identifique e resolva problemas de desempenho, como gargalos de CPU, memória e uso excessivo de rede. Isso é essencial para garantir que sua aplicação funcione bem em ambientes de produção.

## Ferramentas para monitoramento de performance:

### PM2
PM2 é um gerenciador de processos para Node.js que ajuda a monitorar, gerenciar e otimizar sua aplicação. Ele também oferece relatórios de performance e pode ser usado para reiniciar automaticamente sua aplicação em caso de falhas.

#### Instale o PM2:
```bash
npm install pm2 -g
```

#### Usando PM2:
```bash
pm2 start app.js      # Inicia a aplicação
pm2 monit             # Abre o monitor de performance
```

### New Relic
New Relic é uma ferramenta poderosa de monitoramento que fornece métricas detalhadas sobre o desempenho da sua aplicação, como tempo de resposta, utilização de CPU e muito mais.

Para usar o New Relic, você deve instalar o agente da ferramenta:
```bash
npm install newrelic
```

### Loggly ou Papertrail
Ferramentas de gerenciamento de logs que permitem visualizar, analisar e arquivar logs de aplicações em tempo real.
