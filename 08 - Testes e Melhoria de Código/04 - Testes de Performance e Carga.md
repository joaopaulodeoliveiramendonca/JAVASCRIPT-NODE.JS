#Testes de Performance e Carga

##Testes de Performance:

Testes de performance são utilizados para verificar o comportamento do sistema sob alta carga. Bibliotecas como Artillery ou Apache JMeter podem ser usadas para esse tipo de teste.

Exemplo de instalação e configuração do Artillery:

```bash
npm install -g artillery artillery quick --count 10 -n 20 http://localhost:3000
```

O comando acima executa um teste de carga simulando 10 usuários realizando 20 requisições.

##Análise de Performance:

Utilize ferramentas como Node.js Profiler ou PM2 para monitorar o desempenho de sua aplicação em produção.
