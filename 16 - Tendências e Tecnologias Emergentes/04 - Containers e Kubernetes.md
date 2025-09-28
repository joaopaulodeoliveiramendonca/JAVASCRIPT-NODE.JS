# Containers e Kubernetes

## O que são Containers?

**Containers** são unidades de software que empacotam tudo o que é necessário para rodar uma aplicação: código, dependências, configurações e bibliotecas. O **Docker** é a plataforma mais popular para criar e gerenciar containers.

## Kubernetes

**Kubernetes** é uma plataforma de orquestração de containers que automatiza o gerenciamento, o dimensionamento e a implantação de containers.

## Containers com Docker

O **Docker** permite empacotar sua aplicação em containers para garantir que ela funcione de maneira consistente em qualquer ambiente.

### Exemplo de Dockerfile para Node.js:

```Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

# Explicação:
Este Dockerfile configura a criação de uma imagem Docker para uma aplicação Node.js. Ele instala as dependências e expõe a porta 3000 para permitir que a aplicação seja acessada.

## Kubernetes com Node.js
O Kubernetes pode ser usado para gerenciar múltiplos containers de sua aplicação Node.js, garantindo escalabilidade e alta disponibilidade.

## Exemplo de Deploy no Kubernetes:
Você pode criar um Deployment no Kubernetes para rodar sua aplicação Node.js em múltiplas instâncias, com balanceamento de carga automático e recuperação em caso de falha.

```yaml
Copiar código
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: node-app
  template:
    metadata:
      labels:
        app: node-app
    spec:
      containers:
      - name: node-app
        image: node-app-image
        ports:
        - containerPort: 3000
```

# Explicação:
O Deployment cria 3 réplicas da sua aplicação Node.js e garante que, se alguma instância falhar, outra seja automaticamente iniciada.