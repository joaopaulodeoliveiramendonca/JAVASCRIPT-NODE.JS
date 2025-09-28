# Balanceamento de Carga

## O que é Balanceamento de Carga?

O **balanceamento de carga** é o processo de distribuir as requisições de entrada de forma eficiente entre múltiplos servidores ou instâncias de aplicação, evitando que um único servidor sobrecarregue.

## Exemplos de Balanceadores de Carga:

### 1. **Nginx**
Usado como **proxy reverso** e **balanceador de carga**. Ele pode distribuir requisições entre várias instâncias de **Node.js**.

### 2. **HAProxy**
Um software dedicado a balanceamento de carga, muito utilizado em sistemas de alta disponibilidade.

## Exemplo de configuração simples com Nginx:

Instale o **Nginx** e edite o arquivo de configuração para balancear as requisições entre múltiplas instâncias da sua aplicação Node.js.

```nginx
http {
  upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
  }

  server {
    location / {
      proxy_pass http://backend;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
    }
  }
}
```

## Explicação:
O Nginx vai encaminhar as requisições para os servidores 127.0.0.1:3000 e 127.0.0.1:3001, distribuindo a carga entre eles.
