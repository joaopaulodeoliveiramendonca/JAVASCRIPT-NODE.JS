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

# Estrutura de Diretórios para Arquitetura MVC

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
