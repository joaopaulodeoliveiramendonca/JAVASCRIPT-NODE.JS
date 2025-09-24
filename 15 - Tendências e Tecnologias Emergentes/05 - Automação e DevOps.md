# Automação e DevOps

## O que é DevOps?

**DevOps** é uma prática de desenvolvimento de software que integra as equipes de desenvolvimento e operações para melhorar a colaboração, a automação e o ciclo de vida do software. O objetivo é automação de testes, integração contínua e entrega contínua (**CI/CD**).

## Ferramentas de Automação e CI/CD:

### 1. **Jenkins**
Ferramenta de automação de código aberto para **integração** e **entrega contínuas**.

### 2. **GitLab CI/CD**
Ferramenta integrada no **GitLab** para automação de pipelines de **CI/CD**.

### 3. **Travis CI**
Serviço de **CI/CD** para integração com **GitHub**, permitindo automação de testes e deploy.

## Exemplo de pipeline CI/CD com GitLab:

No arquivo `.gitlab-ci.yml`, você pode definir etapas de build, teste e deploy da sua aplicação.

```yaml
stages:
  - build
  - test
  - deploy

build:
  script:
    - npm install
  stage: build

test:
  script:
    - npm test
  stage: test

deploy:
  script:
    - npm run deploy
  stage: deploy
```

# Explicação:
O exemplo acima define uma pipeline simples de CI/CD no GitLab, com três etapas: build, test, e deploy. Cada etapa executa comandos específicos para preparar, testar e fazer o deploy da aplicação.