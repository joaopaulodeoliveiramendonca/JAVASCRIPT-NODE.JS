Pular para o conteúdo
Histórico de chats

Você disse:
voce conhece a documentação do zod: https://zod.dev/?
O ChatGPT disse:
Sim, conheço a documentação oficial do Zod, uma biblioteca de validação de esquemas focada no TypeScript. Você pode acessá-la em zod.dev. 
Zod

O que é o Zod?
O Zod permite definir esquemas para validar dados, desde tipos simples como string até objetos complexos e aninhados. Ele oferece inferência de tipos estática, integração com TypeScript e uma API imutável e concisa. 
Zod

Funcionalidades principais
Sem dependências externas: funciona em Node.js e navegadores modernos.

API imutável: métodos retornam novas instâncias.

Inferência de tipos: tipos são extraídos diretamente dos esquemas.

Conversão para JSON Schema: útil para APIs e documentação.

Ecossistema robusto: integrações com ferramentas como tRPC, React Hook Form e VeeValidate. 
Zod

Principais seções da documentação
Introdução – visão geral e instalação.

Uso básico – como definir esquemas e validar dados.

Definindo esquemas – tipos primitivos, coerção, literais e objetos.

Personalização de erros – como customizar mensagens de erro.

JSON Schema – conversão de esquemas para JSON Schema.

Metadados e registros – associando metadados a esquemas.

Ecossistema – integrações e ferramentas relacionadas.

Se você tiver interesse em exemplos práticos ou em como integrar o Zod com outras bibliotecas, posso fornecer mais detalhes. Gostaria de ver um exemplo específico?

Você disse:
me ensine do zero ao avançado em, vai me dando o conteudo aos poucos e eu vou dando ok para seguir até concluir todo aprendizado
O ChatGPT disse:
Claro! Vamos começar com o básico e seguir até o conteúdo mais avançado sobre o Zod. Vou explicar de forma simples e com exemplos, e quando você estiver pronto para seguir, é só me avisar.

1. O que é o Zod?
Zod é uma biblioteca TypeScript que permite a criação de esquemas de validação para garantir que os dados sejam corretos, sem erros. Ele ajuda a validar e transformar dados de forma segura, sem precisar escrever muito código manualmente.

2. Como instalar o Zod
Para começar a usar o Zod, você precisa instalá-lo em seu projeto Node.js ou frontend.

No seu terminal, execute:

npm install zod
Agora que temos o Zod instalado, vamos começar a definir os primeiros esquemas.

3. Validando tipos simples
Vamos começar com o tipo mais básico, a validação de um string. O Zod permite definir um tipo e validar se ele corresponde ao esperado.

Exemplo:
import { z } from 'zod';

// Definindo um esquema de string
const nomeSchema = z.string();

// Validação
const resultado = nomeSchema.safeParse("João");

if (resultado.success) {
  console.log("Nome válido:", resultado.data);
} else {
  console.log("Erro:", resultado.error.format());
}
Explicação:

z.string() cria um esquema para validar uma string.

safeParse() tenta validar o dado passado. Se for válido, ele retorna success: true e os dados validados. Se não for válido, ele retorna um erro.

Quando você executa esse código, a validação vai passar e o nome será considerado válido.

Agora você pode confirmar se quer continuar com o aprendizado?

Você disse:
proximo
O ChatGPT disse:
Ótimo! Vamos seguir para o próximo conceito.

4. Validação de números e inteiros
Agora vamos aprender a validar números e inteiros. O Zod possui tipos específicos para cada caso, como z.number() e z.int().

Exemplo:
import { z } from 'zod';

// Definindo um esquema para número
const numeroSchema = z.number();

// Validando um número
const resultadoNumero = numeroSchema.safeParse(25);

if (resultadoNumero.success) {
  console.log("Número válido:", resultadoNumero.data);
} else {
  console.log("Erro:", resultadoNumero.error.format());
}

// Definindo um esquema para inteiro
const inteiroSchema = z.int();

// Validando um inteiro
const resultadoInteiro = inteiroSchema.safeParse(30);

if (resultadoInteiro.success) {
  console.log("Inteiro válido:", resultadoInteiro.data);
} else {
  console.log("Erro:", resultadoInteiro.error.format());
}
Explicação:

z.number() valida qualquer tipo de número (inteiro ou decimal).

z.int() valida apenas números inteiros (sem casas decimais).

Validação de números vai permitir que você garanta que os dados passados sejam do tipo número e, no caso de inteiros, use o z.int() para garantir que o número não tenha casas decimais.

Quer seguir com mais exemplos ou avançar para validação de strings mais complexas e objetos?

Você disse:
proximo
O ChatGPT disse:
Ótimo! Vamos agora aprender a validar strings mais complexas e objetos.

5. Validação de strings com restrições
O Zod permite que você adicione restrições específicas a uma string, como mínimo de caracteres, máximo de caracteres e expressões regulares.

Exemplo 1: Validação de string com tamanho mínimo e máximo
import { z } from 'zod';

// Definindo um esquema para string com tamanho mínimo e máximo
const nomeSchema = z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }).max(50, { message: "O nome deve ter no máximo 50 caracteres" });

// Validando a string
const resultadoNome = nomeSchema.safeParse("João");

if (resultadoNome.success) {
  console.log("Nome válido:", resultadoNome.data);
} else {
  console.log("Erro:", resultadoNome.error.format());
}
Explicação:

min(3) define que a string deve ter no mínimo 3 caracteres.

max(50) define que a string deve ter no máximo 50 caracteres.

Exemplo 2: Validação de string com expressões regulares
Você também pode validar strings com padrões mais complexos usando expressões regulares. Vamos validar um email com regex:

const emailSchema = z.string().email({ message: "O email precisa ser válido" });

const resultadoEmail = emailSchema.safeParse("joao@example.com");

if (resultadoEmail.success) {
  console.log("Email válido:", resultadoEmail.data);
} else {
  console.log("Erro:", resultadoEmail.error.format());
}
Explicação:

email() valida se a string é um email válido usando uma expressão regular interna.

6. Validação de Objetos
Zod também permite a validação de objetos com campos específicos.

Exemplo:
const usuarioSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  idade: z.number().int().min(18, { message: "A idade deve ser maior ou igual a 18" }),
});

// Validando o objeto
const resultadoUsuario = usuarioSchema.safeParse({
  nome: "João",
  idade: 25,
});

if (resultadoUsuario.success) {
  console.log("Usuário válido:", resultadoUsuario.data);
} else {
  console.log("Erro:", resultadoUsuario.error.format());
}
Explicação:

z.object({...}) permite que você defina um esquema para um objeto, onde você especifica as propriedades e suas validações.

Cada campo do objeto pode ter validações personalizadas, como mínimo de idade e tamanho de nome.

Agora que vimos como validar strings e objetos, você gostaria de continuar aprendendo sobre arrays, transformações de dados ou validação de dados aninhados?

Você disse:
proximo
O ChatGPT disse:
Perfeito! Vamos continuar com arrays, transformações de dados e validação de dados aninhados.

7. Validação de Arrays
O Zod também permite validar arrays de dados, garantindo que todos os itens dentro do array atendam a um esquema específico.

Exemplo:
import { z } from 'zod';

// Definindo um esquema para array de números
const numerosSchema = z.array(z.number().min(1, { message: "O número deve ser maior que 0" }));

// Validando um array de números
const resultadoNumeros = numerosSchema.safeParse([5, 10, 15]);

if (resultadoNumeros.success) {
  console.log("Array válido:", resultadoNumeros.data);
} else {
  console.log("Erro:", resultadoNumeros.error.format());
}
Explicação:

z.array(z.number()) define um array de números. A validação pode ser aplicada a cada item do array.

min(1) em cada número dentro do array valida que cada número deve ser maior que 0.

Você também pode validar arrays com outros tipos, como strings ou objetos.

Exemplo 2: Validação de Array de Objetos
const usuarioArraySchema = z.array(
  z.object({
    nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    idade: z.number().int().min(18, { message: "A idade deve ser maior ou igual a 18" }),
  })
);

// Validando o array de objetos
const resultadoUsuarios = usuarioArraySchema.safeParse([
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
]);

if (resultadoUsuarios.success) {
  console.log("Array de usuários válido:", resultadoUsuarios.data);
} else {
  console.log("Erro:", resultadoUsuarios.error.format());
}
Explicação:

A validação se aplica ao array inteiro e também a cada objeto dentro do array.

8. Transformações de Dados
O Zod permite transformar os dados enquanto faz a validação. Isso é útil quando você precisa modificar os dados antes de usá-los, como transformar strings em números ou aplicar outras manipulações.

Exemplo 1: Transformar uma string em número
const stringParaNumeroSchema = z.string().transform((val) => parseInt(val, 10));

// Validando e transformando a string "123" para o número 123
const resultadoTransformado = stringParaNumeroSchema.safeParse("123");

if (resultadoTransformado.success) {
  console.log("Número transformado:", resultadoTransformado.data);
} else {
  console.log("Erro:", resultadoTransformado.error.format());
}
Explicação:

transform() permite modificar os dados após a validação. Nesse caso, transformamos uma string em número.

Exemplo 2: Transformação em objetos aninhados
Você pode também transformar valores dentro de objetos. Por exemplo, podemos transformar um campo data para um objeto Date.

const usuarioComDataSchema = z.object({
  nome: z.string(),
  dataNascimento: z.string().transform((val) => new Date(val)),
});

// Validando e transformando a data
const resultadoData = usuarioComDataSchema.safeParse({
  nome: "João",
  dataNascimento: "1995-12-15",
});

if (resultadoData.success) {
  console.log("Usuário com data transformada:", resultadoData.data);
} else {
  console.log("Erro:", resultadoData.error.format());
}
Explicação:

O campo dataNascimento é transformado de uma string para um objeto Date durante a validação.

9. Validação de Dados Aninhados
O Zod permite validar dados aninhados, ou seja, objetos dentro de objetos ou listas dentro de listas.

Exemplo:
const enderecoSchema = z.object({
  rua: z.string(),
  cidade: z.string(),
});

const usuarioComEnderecoSchema = z.object({
  nome: z.string(),
  endereco: enderecoSchema,
});

// Validando dados aninhados
const resultadoUsuarioEndereco = usuarioComEnderecoSchema.safeParse({
  nome: "João",
  endereco: { rua: "Rua 1", cidade: "São Paulo" },
});

if (resultadoUsuarioEndereco.success) {
  console.log("Usuário com endereço válido:", resultadoUsuarioEndereco.data);
} else {
  console.log("Erro:", resultadoUsuarioEndereco.error.format());
}
Explicação:

O campo endereco é um objeto que contém as propriedades rua e cidade, e cada um desses campos é validado separadamente.

Com esses conceitos, você tem as ferramentas necessárias para validar dados simples, complexos e até dados aninhados.

Agora, você gostaria de avançar para interações com APIs ou aprender mais sobre erro e tratamento de exceções?

Você disse:
proximo
O ChatGPT disse:
Perfeito! Vamos agora falar sobre tratamento de erros e como lidar com exceções no Zod.

10. Tratamento de Erros no Zod
O Zod possui um sistema robusto para tratamento de erros que permite identificar onde a validação falhou e obter detalhes sobre o erro.

Exemplo 1: Exibindo erros com safeParse()
Como vimos antes, a função safeParse() retorna um objeto com a propriedade success (se a validação foi bem-sucedida) e um objeto de erro quando a validação falha.

const nomeSchema = z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" });

const resultado = nomeSchema.safeParse("Jo");

if (resultado.success) {
  console.log("Nome válido:", resultado.data);
} else {
  // Exibindo detalhes do erro
  console.log("Erros de validação:", resultado.error.format());
}
Explicação:

Quando a string "Jo" é passada, a validação falha, e o erro é impresso.

Formato do erro:

resultado.error.format() vai exibir a estrutura do erro de forma legível, identificando a propriedade que falhou e a mensagem associada.

Exemplo 2: Validação com múltiplos erros
Você pode ter múltiplos erros em uma única validação. O Zod permite que você acesse cada erro e forneça detalhes específicos para cada um.

const usuarioSchema = z.object({
  nome: z.string().min(3),
  idade: z.number().int().min(18),
});

const resultadoUsuario = usuarioSchema.safeParse({
  nome: "Jo",
  idade: 15,
});

if (resultadoUsuario.success) {
  console.log("Usuário válido:", resultadoUsuario.data);
} else {
  console.log("Erros de validação:", resultadoUsuario.error.format());
}
Explicação:

Neste exemplo, tanto o nome quanto a idade falham na validação. O erro vai retornar detalhes sobre ambos os campos.

11. Validação com Mensagens de Erro Personalizadas
Você pode personalizar as mensagens de erro para torná-las mais informativas. Isso é feito passando um objeto com a chave message na definição do esquema.

Exemplo:
const nomeSchema = z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres" });

const resultado = nomeSchema.safeParse("Jo");

if (resultado.success) {
  console.log("Nome válido:", resultado.data);
} else {
  // Exibindo erro com mensagem personalizada
  console.log("Erro:", resultado.error.format());
}
Explicação:

O Zod utiliza a mensagem personalizada para indicar que o nome deve ter ao menos 3 caracteres.

12. ZodError e Acessando Detalhes do Erro
Quando ocorre um erro de validação, você pode usar a classe ZodError para acessar detalhes adicionais sobre os erros.

Exemplo:
const resultado = nomeSchema.safeParse("Jo");

if (!resultado.success) {
  const erros = resultado.error.errors;
  erros.forEach((erro) => {
    console.log(`Campo: ${erro.path.join(' -> ')}, Erro: ${erro.message}`);
  });
}
Explicação:

resultado.error.errors retorna um array de erros, e você pode acessar cada erro detalhadamente, como o caminho do campo (erro.path) e a mensagem de erro (erro.message).

13. Erros e Exceções com .throw()
Em vez de usar safeParse() para lidar com erros, você pode usar o .throw() para lançar uma exceção diretamente se a validação falhar. Isso pode ser útil quando você deseja interromper a execução do programa imediatamente ao detectar um erro.

Exemplo:
const nomeSchema = z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" });

try {
  nomeSchema.parse("Jo");
} catch (error) {
  if (error instanceof z.ZodError) {
    console.log("Erro de validação:", error.errors);
  }
}
Explicação:

.parse() lança uma exceção caso o dado não seja válido, e o erro é tratado com um try/catch.

Isso permite que você trate as falhas de validação de maneira mais direta.

Com isso, você já tem uma boa base sobre como tratar erros e exceções no Zod. Esse conhecimento é importante quando você quer garantir que os dados sejam válidos e também quer fornecer mensagens claras para os usuários.

14. Integração com APIs
A próxima etapa seria aprender como integrar o Zod com APIs, garantindo que os dados de entrada e saída das APIs sejam validados corretamente. Quer seguir para isso?

Você disse:
proximo
O ChatGPT disse:
Perfeito! Vamos agora explorar como integrar o Zod com APIs, garantindo que os dados de entrada e saída sejam validados corretamente.

14. Integração do Zod com APIs
Ao trabalhar com APIs (especialmente quando você está lidando com dados de entrada e saída), é fundamental garantir que os dados sejam válidos antes de serem processados ou enviados. O Zod pode ser usado para validar os dados que entram na sua API e também os dados que saem dela.

Exemplo 1: Validação de dados de entrada em uma API
Vamos imaginar que você tenha uma API que recebe um usuário e você deseja garantir que os dados que chegam estejam no formato correto.

Estrutura da API:

Método: POST

Rota: /usuarios

Dados esperados: um objeto com as propriedades nome (string) e idade (número inteiro).

Exemplo de validação de dados de entrada:
import { z } from 'zod';

// Definindo o esquema para o usuário
const usuarioSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  idade: z.number().int().min(18, { message: "A idade deve ser maior ou igual a 18" }),
});

// Função para simular a criação de um usuário
const criarUsuario = (usuario: any) => {
  // Validando os dados de entrada
  const resultado = usuarioSchema.safeParse(usuario);

  if (resultado.success) {
    console.log("Usuário criado:", resultado.data);
    // Aqui você poderia salvar os dados no banco de dados
  } else {
    console.log("Erro ao criar usuário:", resultado.error.format());
    // Aqui você pode retornar um erro HTTP, como 400 Bad Request
  }
};

// Testando com dados inválidos
criarUsuario({ nome: "Jo", idade: 16 });
Explicação:

usuarioSchema.safeParse() valida o objeto de entrada, verificando se as propriedades nome e idade estão corretas.

Se os dados forem inválidos, um erro é gerado, e você pode responder com um código HTTP de erro (por exemplo, 400 Bad Request).

Simulação de API com Fastify
O Zod pode ser facilmente integrado a frameworks como o Fastify para validar dados de entrada e saída de maneira eficaz.

Instalação do Fastify:

npm install fastify
Agora, vamos criar um servidor Fastify simples com validação de entrada utilizando o Zod:

import Fastify from 'fastify';
import { z } from 'zod';

// Inicializando o servidor Fastify
const fastify = Fastify();

// Definindo o esquema do usuário
const usuarioSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
  idade: z.number().int().min(18, { message: "A idade deve ser maior ou igual a 18" }),
});

// Rota POST para criar usuário
fastify.post('/usuarios', async (request, reply) => {
  const usuario = request.body;

  // Validando dados de entrada
  const resultado = usuarioSchema.safeParse(usuario);

  if (resultado.success) {
    return reply.send({ mensagem: 'Usuário criado com sucesso!', dados: resultado.data });
  } else {
    return reply.status(400).send({ mensagem: 'Erro de validação', erros: resultado.error.format() });
  }
});

// Iniciando o servidor
fastify.listen(3000, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});
Explicação:

fastify.post('/usuarios') cria uma rota que aceita POST para criar um usuário.

usuarioSchema.safeParse() valida os dados enviados no corpo da requisição.

Se os dados forem válidos, o servidor responde com sucesso; caso contrário, ele responde com um erro de validação (400 Bad Request).

Agora, se você enviar uma requisição para a API com dados válidos (nome com pelo menos 3 caracteres e idade maior que 18), ela retornará uma resposta positiva. Se os dados forem inválidos, você obterá uma resposta de erro com os detalhes da falha.

15. Validação de dados de saída
Além de validar dados de entrada, o Zod também pode ser útil para validar os dados que saem da API, especialmente quando você está retornando objetos complexos ou dados do banco de dados.

Exemplo: Validação dos dados de saída
Vamos simular um caso onde você consulta dados no banco e valida a resposta antes de enviá-la ao cliente.

// Supondo que você recupere um usuário do banco
const usuarioDb = { nome: "João", idade: 25, id: 1 };

// Definindo um esquema de resposta para garantir que os dados estejam corretos
const usuarioResponseSchema = z.object({
  nome: z.string(),
  idade: z.number().int(),
  id: z.number().int(),
});

// Validando os dados de saída
const resultadoResponse = usuarioResponseSchema.safeParse(usuarioDb);

if (resultadoResponse.success) {
  console.log("Dados válidos para resposta:", resultadoResponse.data);
} else {
  console.log("Erro na resposta:", resultadoResponse.error.format());
}
Explicação:

usuarioResponseSchema.safeParse() valida a resposta que você envia ao cliente, garantindo que os dados estejam no formato esperado.

Caso os dados não estejam corretos, você pode interceptar o erro e tratá-lo adequadamente.

Conclusão sobre APIs
Ao integrar o Zod com APIs, você pode garantir que tanto os dados de entrada quanto os de saída estejam no formato correto, evitando falhas na aplicação e melhorando a segurança e a robustez da sua API.

Agora, você tem as ferramentas para validar e transformar dados em qualquer API. Quer seguir para outro tópico ou deseja revisar algum dos conceitos abordados?

Você disse:
proximo
O ChatGPT disse:
Ótimo! Agora vamos para conceitos mais avançados, incluindo customização de erros, refinamentos de tipos e como trabalhar com tipos genéricos no Zod.

16. Customização de Erros no Zod
O Zod permite personalizar as mensagens de erro de forma muito detalhada, para garantir que os erros de validação sejam mais claros e específicos para os usuários.

Personalizando Mensagens de Erro
Você pode definir mensagens personalizadas para cada tipo de erro, o que é especialmente útil em interfaces de usuário.

Exemplo:
import { z } from 'zod';

// Definindo um esquema com mensagens de erro personalizadas
const usuarioSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  idade: z.number().int().min(18, { message: "A idade deve ser maior ou igual a 18." }),
  email: z.string().email({ message: "O email fornecido não é válido." }),
});

// Testando com dados inválidos
const resultado = usuarioSchema.safeParse({
  nome: "Jo",
  idade: 16,
  email: "joao@dominio",
});

if (!resultado.success) {
  console.log("Erros de validação:", resultado.error.format());
}
Explicação:

Aqui, cada campo tem sua própria mensagem de erro personalizada, o que torna a experiência do usuário mais clara e intuitiva.

Erro de Campo Específico
Você também pode customizar erros para campos específicos. Isso pode ser útil quando você precisa de diferentes tipos de validação para o mesmo campo.

const telefoneSchema = z.string().regex(/^\d{10}$/, { message: "O número de telefone deve ter 10 dígitos." });

const resultadoTelefone = telefoneSchema.safeParse("12345");

if (!resultadoTelefone.success) {
  console.log("Erro:", resultadoTelefone.error.format());
}
Explicação:

A expressão regular valida se o número de telefone tem exatamente 10 dígitos. Caso contrário, é gerada uma mensagem de erro específica.

17. Refinamento de Tipos no Zod
Zod permite refinar tipos usando o método .refine(), que possibilita adicionar validações adicionais, criando tipos mais específicos e customizados.

Exemplo 1: Refinamento de tipo com lógica personalizada
Você pode adicionar validações que não são simples comparações de tipo, como por exemplo, validar um número de CPF.

const cpfSchema = z.string().refine(val => {
  // Validar CPF (apenas como exemplo)
  return val.length === 11; 
}, { message: "O CPF deve ter 11 caracteres" });

const resultadoCpf = cpfSchema.safeParse("1234567890");

if (!resultadoCpf.success) {
  console.log("Erro:", resultadoCpf.error.format());
}
Explicação:

.refine() permite criar validações personalizadas, aplicando a lógica que você precisar. Nesse exemplo, estamos verificando se o CPF tem 11 caracteres.

Exemplo 2: Refinamento para tipos numéricos
const numeroPositivo = z.number().refine(value => value > 0, {
  message: "O número precisa ser positivo.",
});

const resultadoNumero = numeroPositivo.safeParse(-5);

if (!resultadoNumero.success) {
  console.log("Erro:", resultadoNumero.error.format());
}
Explicação:

.refine() no caso acima foi usado para garantir que o número seja positivo.

18. Trabalhando com Tipos Genéricos no Zod
O Zod também suporta tipos genéricos, que são tipos que podem ser reutilizados com diferentes tipos de dados.

Exemplo: Validação de um array de dados genéricos
Vamos criar uma função genérica para validar arrays de qualquer tipo.

// Função genérica para validar arrays
const validarArray = <T>(schema: z.ZodType<T, any, any>, data: any[]) => {
  const arraySchema = z.array(schema);
  return arraySchema.safeParse(data);
};

// Validando um array de números
const resultadoNumeros = validarArray(z.number().min(1), [1, 2, 3]);
console.log(resultadoNumeros.success ? "Array válido" : resultadoNumeros.error.format());

// Validando um array de strings
const resultadoStrings = validarArray(z.string().min(2), ["João", "Maria"]);
console.log(resultadoStrings.success ? "Array válido" : resultadoStrings.error.format());
Explicação:

Função genérica validarArray recebe um esquema de tipo e um array de dados. Ela valida o array de acordo com o tipo definido.

Isso permite que você reutilize o mesmo método para diferentes tipos de dados.

19. Utilizando o Zod em Conjunção com Outras Bibliotecas
O Zod também pode ser combinado com outras bibliotecas populares como React Hook Form ou tRPC para validar dados de formulários ou requisições.

Exemplo: Integração com React Hook Form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formularioSchema = z.object({
  nome: z.string().min(3),
  idade: z.number().min(18),
});

function MeuFormulario() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formularioSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} placeholder="Nome" />
      {errors.nome && <span>{errors.nome.message}</span>}

      <input {...register("idade")} placeholder="Idade" />
      {errors.idade && <span>{errors.idade.message}</span>}

      <button type="submit">Enviar</button>
    </form>
  );
}
Explicação:

zodResolver() é utilizado para integrar o Zod com o React Hook Form, permitindo a validação direta no formulário.

Agora que cobrimos customização de erros, refinamento de tipos e tipos genéricos, você já tem um controle total sobre como validar e manipular dados no Zod.

Se você tiver alguma dúvida ou quiser continuar com tópicos ainda mais avançados, como validação condicional ou integração com outras bibliotecas, é só me avisar!

Você disse:
proximo
O ChatGPT disse:
Perfeito! Vamos seguir com conceitos ainda mais avançados, incluindo validação condicional, tipos de união e interseção e uso de refinamentos complexos.

20. Validação Condicional no Zod
O Zod permite fazer validações condicionais, ou seja, você pode aplicar diferentes validações dependendo de outros dados ou da lógica do seu esquema.

Exemplo 1: Validação Condicional com refine()
Você pode usar a função refine() para aplicar validações com base em outra propriedade.

const usuarioSchema = z.object({
  nome: z.string().min(3),
  idade: z.number().int(),
  tipo: z.enum(["admin", "usuario"]),
  senha: z.string().min(6),
}).refine(data => {
  if (data.tipo === "admin" && data.senha.length < 8) {
    return false;
  }
  return true;
}, {
  message: "Senha para admin deve ter pelo menos 8 caracteres",
  path: ["senha"],
});

// Testando a validação condicional
const resultadoAdmin = usuarioSchema.safeParse({
  nome: "João",
  idade: 30,
  tipo: "admin",
  senha: "123456",
});

if (!resultadoAdmin.success) {
  console.log("Erro:", resultadoAdmin.error.format());
} else {
  console.log("Usuário válido:", resultadoAdmin.data);
}
Explicação:

Aqui estamos fazendo uma validação condicional para garantir que, se o tipo de usuário for "admin", a senha deve ter pelo menos 8 caracteres.

Exemplo 2: Validação Condicional em Propriedades do Objeto
Você também pode usar condições no formato do objeto. Por exemplo, se um campo é requerido dependendo do valor de outro campo.

const usuarioSchema = z.object({
  nome: z.string().min(3),
  idade: z.number().int().min(18),
  email: z.string().email().optional(),
  telefone: z.string().optional(),
}).refine(data => {
  if (data.email && !data.telefone) {
    return false;
  }
  return true;
}, {
  message: "Se fornecer um email, o telefone também é necessário",
  path: ["telefone"],
});

// Testando com dados inválidos
const resultado = usuarioSchema.safeParse({
  nome: "João",
  idade: 25,
  email: "joao@example.com",
});

if (!resultado.success) {
  console.log("Erro:", resultado.error.format());
} else {
  console.log("Usuário válido:", resultado.data);
}
Explicação:

Se o campo email for fornecido, telefone também deve ser fornecido. Isso é feito de forma condicional no refine().

21. Tipos de União e Interseção no Zod
O Zod também permite combinar tipos, criando tipos de união e tipos de interseção. Esses recursos são úteis para lidar com tipos mais complexos e flexíveis.

Exemplo 1: Tipos de União (z.union())
Com a função z.union(), você pode validar um valor que pode ser de dois ou mais tipos diferentes.

const tipoSchema = z.union([z.string(), z.number()]);

const resultadoString = tipoSchema.safeParse("texto");
const resultadoNumero = tipoSchema.safeParse(123);

console.log(resultadoString.success ? "String válida" : "Erro na string");
console.log(resultadoNumero.success ? "Número válido" : "Erro no número");
Explicação:

z.union([tipo1, tipo2]) permite que o dado seja um ou outro tipo. Neste caso, ele pode ser string ou número.

Exemplo 2: Tipos de Interseção (z.intersection())
Com a função z.intersection(), você pode combinar dois esquemas em um único esquema, e os dados devem passar em ambos os esquemas.

const nomeSchema = z.object({
  nome: z.string().min(3),
});

const idadeSchema = z.object({
  idade: z.number().int().min(18),
});

const usuarioSchema = z.intersection(nomeSchema, idadeSchema);

const resultadoUsuario = usuarioSchema.safeParse({
  nome: "João",
  idade: 25,
});

console.log(resultadoUsuario.success ? "Usuário válido" : "Erro no usuário");
Explicação:

z.intersection(schema1, schema2) combina dois esquemas, exigindo que os dados sejam válidos em ambos os esquemas. Neste caso, a pessoa deve ter nome válido e idade válida.

22. Refinamentos Complexos
O Zod permite aplicar refinamentos complexos para validar dados com lógica mais avançada. Vamos aprender a aplicar validações baseadas em outros campos do objeto.

Exemplo: Validação com lógica de comparação entre campos
const senhaSchema = z.object({
  senha: z.string().min(6),
  confirmaSenha: z.string(),
}).refine(data => data.senha === data.confirmaSenha, {
  message: "A senha e a confirmação de senha não são iguais",
  path: ["confirmaSenha"],
});

// Testando com dados inválidos
const resultado = senhaSchema.safeParse({
  senha: "123456",
  confirmaSenha: "654321",
});

if (!resultado.success) {
  console.log("Erro:", resultado.error.format());
} else {
  console.log("Senhas válidas:", resultado.data);
}
Explicação:

Aqui estamos usando refine() para garantir que os campos senha e confirmaSenha sejam iguais.

Exemplo: Validação de Data Futura
const dataFuturaSchema = z.object({
  dataNascimento: z.date().refine(val => val > new Date(), {
    message: "A data de nascimento não pode ser no futuro",
  }),
});

const resultadoDataFutura = dataFuturaSchema.safeParse({
  dataNascimento: new Date("2025-01-01"),
});

console.log(resultadoDataFutura.success ? "Data válida" : "Erro na data");
Explicação:

refine() é usado para garantir que a data de nascimento não seja no futuro.

23. Trabalhando com Tipos e Validações de Enum
Você pode usar enums no Zod para validar valores que devem ser de um conjunto específico de opções.

Exemplo: Enum com Zod
const tipoUsuarioEnum = z.enum(["admin", "usuario", "moderador"]);

const resultadoEnum = tipoUsuarioEnum.safeParse("admin");

console.log(resultadoEnum.success ? "Tipo válido" : "Erro no tipo");
Explicação:

z.enum([opcao1, opcao2, opcao3]) valida se o valor é um dos valores possíveis no conjunto.

Conclusão dos Avançados
Com esses conceitos avançados, você tem ferramentas poderosas para trabalhar com validação de dados complexos, como validações condicionais, tipos combinados, refinamentos customizados e validação de enums.

Se você quiser explorar mais ou precisar de mais exemplos, posso continuar com mais tópicos como trabalhando com dados assíncronos, integração com outros frameworks ou técnicas avançadas de performance. O que você prefere?

Você disse:
proximo
O ChatGPT disse:
Agora, vamos abordar temas ainda mais avançados, como trabalhando com dados assíncronos, integração com outras bibliotecas e técnicas de performance no Zod.

24. Trabalhando com Dados Assíncronos no Zod
O Zod também permite que você valide dados assíncronos, o que é útil quando você precisa fazer chamadas externas (como consultar um banco de dados ou API) durante a validação.

Exemplo 1: Validação Assíncrona de Dados
Você pode usar o método refine() ou superRefine() de forma assíncrona para realizar validações que dependem de operações externas, como a verificação de um email único.

import { z } from 'zod';

// Simulando uma função que verifica se o email já existe
const verificarEmailExistente = async (email: string) => {
  const emailsExistentes = ["joao@example.com", "maria@example.com"];
  return emailsExistentes.includes(email);
};

// Definindo o esquema de usuário
const usuarioSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
}).superRefine(async (data, ctx) => {
  const emailExistente = await verificarEmailExistente(data.email);
  if (emailExistente) {
    ctx.addIssue({
      path: ["email"],
      message: "Este email já está em uso",
      code: z.ZodIssueCode.custom,
    });
  }
});

// Testando com email duplicado
const resultadoUsuario = await usuarioSchema.safeParseAsync({
  nome: "João",
  email: "joao@example.com",
});

if (!resultadoUsuario.success) {
  console.log("Erro:", resultadoUsuario.error.format());
} else {
  console.log("Usuário válido:", resultadoUsuario.data);
}
Explicação:

superRefine() permite realizar validações assíncronas, como a consulta ao banco de dados ou outras APIs.

ctx.addIssue() adiciona um erro de validação de forma personalizada quando a condição assíncrona falha.

Exemplo 2: Validação Assíncrona com refine()
const checkIdadeMinima = async (idade: number) => {
  // Simulando uma API ou consulta ao banco de dados para verificar idade mínima
  return idade >= 18;
};

const usuarioIdadeSchema = z.object({
  nome: z.string(),
  idade: z.number().int(),
}).refine(async (data) => {
  const idadeValida = await checkIdadeMinima(data.idade);
  return idadeValida;
}, {
  message: "A idade deve ser maior ou igual a 18",
  path: ["idade"],
});

// Testando com dados assíncronos
const resultadoIdade = await usuarioIdadeSchema.safeParseAsync({
  nome: "João",
  idade: 16,
});

console.log(resultadoIdade.success ? "Usuário válido" : "Erro no usuário");
Explicação:

Usamos refine() assíncrono para validar a idade de um usuário, simulando uma consulta a um banco de dados ou API externa.

25. Integração com Outras Bibliotecas e Frameworks
O Zod é flexível e pode ser integrado com muitas outras bibliotecas, como React Hook Form, tRPC, Express e outros frameworks para validar dados de forma eficiente.

Exemplo 1: Integração com Express
Vamos integrar o Zod com Express para validar dados de entrada de uma requisição HTTP.

import express from 'express';
import { z } from 'zod';

const app = express();
app.use(express.json());

const usuarioSchema = z.object({
  nome: z.string().min(3),
  idade: z.number().int().min(18),
});

app.post('/usuarios', (req, res) => {
  const result = usuarioSchema.safeParse(req.body);

  if (result.success) {
    res.status(200).json({ mensagem: 'Usuário válido', dados: result.data });
  } else {
    res.status(400).json({ erro: result.error.format() });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
Explicação:

safeParse() valida o corpo da requisição, retornando um erro se os dados não forem válidos.

Isso permite que você proteja sua API, validando as entradas de dados antes de processá-las.

Exemplo 2: Integração com tRPC
O tRPC permite que você crie APIs sem escrever schemas de request e response manualmente. O Zod se encaixa perfeitamente com o tRPC para validação.

import { createRouter } from '@trpc/server';
import { z } from 'zod';

const usuarioRouter = createRouter().mutation('criar', {
  input: z.object({
    nome: z.string().min(3),
    idade: z.number().int().min(18),
  }),
  resolve: ({ input }) => {
    return { mensagem: 'Usuário criado', dados: input };
  },
});

export default usuarioRouter;
Explicação:

O tRPC usa o Zod para validar dados de entrada e saída automaticamente, sem a necessidade de escrever validações manuais ou adicionar middlewares.

26. Técnicas de Performance no Zod
Embora o Zod seja eficiente, existem algumas técnicas para otimizar a performance ao trabalhar com grandes volumes de dados.

1. Evite Validações Repetitivas
Se você estiver validando o mesmo esquema várias vezes em um loop, memoizar a validação pode melhorar a performance. Você pode usar z.memo() para garantir que a validação seja feita uma vez.

2. Validação de Dados no Lado do Servidor
Ao validar dados no backend, evite validar o mesmo objeto várias vezes, especialmente se o objeto for muito grande. Valide uma vez e armazene os resultados em cache, se possível.

3. Use Tipos Mais Simples Quando Possível
Evite usar tipos de dados complexos sem necessidade. Por exemplo, strings simples e números inteiros são muito mais rápidos para validar do que objetos complexos ou arrays grandes. Use tipos mais simples sempre que possível para melhorar a performance.

27. Conclusão dos Avançados
Agora que cobrimos a validação assíncrona, integração com bibliotecas como Express e tRPC, e algumas técnicas de performance, você está pronto para usar o Zod de forma avançada, seja em aplicações frontend ou backend.

Você pode criar validações complexas e assíncronas, integrar com APIs e otimizar a performance de validações em grandes sistemas. O Zod é uma ferramenta poderosa para garantir a segurança e integridade dos dados nas suas aplicações.

Se você tiver alguma dúvida sobre algum dos conceitos abordados ou se quiser seguir com um outro tópico, basta me avisar!

Você disse:
finalizamos?
O ChatGPT disse:
Sim, finalizamos! Passamos por todos os conceitos essenciais do Zod, desde o básico até os tópicos mais avançados, como validações assíncronas, integração com APIs, e técnicas de performance. Agora você tem um bom domínio sobre como usar o Zod em diferentes cenários.

Se precisar de mais alguma coisa ou quiser revisar algum conceito específico, é só avisar. Estou à disposição!



Nenhum arquivo escolhidoNenhum arquivo escolhido
O ChatGPT pode cometer erros. Considere verificar informações importantes.
O ChatGPT disse: Sim, finalizamos! Passamos por todos os conceitos essenciais do Zod, desde o básico até os tópicos mais avançados, como validações assíncronas, integração com APIs, e técnicas de performance. Agora você tem um bom domínio sobre como usar o Zod em diferentes cenários. Se precisar de mais alguma coisa ou quiser revisar algum conceito específico, é só avisar. Estou à disposição!