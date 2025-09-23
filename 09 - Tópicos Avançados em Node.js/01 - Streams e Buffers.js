// Streams e Buffers

// O que são Streams?
// Streams são uma forma de trabalhar com grandes quantidades de dados de forma eficiente,
// sem precisar carregá-los completamente na memória. Em vez de carregar tudo de uma vez,
// os dados são lidos ou escritos de forma contínua, o que economiza memória e aumenta a performance.

// Tipos de Streams em Node.js
// 1. Readable Streams: Streams que permitem ler dados (Ex.: leitura de arquivos, respostas de rede).
// 2. Writable Streams: Streams que permitem escrever dados (Ex.: gravação de arquivos, respostas HTTP).
// 3. Duplex Streams: Streams que podem ler e escrever (Ex.: conexão de rede).
// 4. Transform Streams: Streams que podem modificar os dados enquanto são lidos ou escritos (Ex.: compressão de dados).

// Exemplo de uso de Readable Stream
// Para ler um arquivo grande sem carregá-lo todo na memória:
const fs = require('fs');

// Criando um stream de leitura a partir de um arquivo
const stream = fs.createReadStream('arquivo.txt', { encoding: 'utf8' });

// O evento 'data' é emitido sempre que um novo pedaço de dados é lido
stream.on('data', (chunk) => {
  console.log('Novo pedaço de dados:', chunk);  // Exibe o pedaço de dados lido
});

// O evento 'end' é emitido quando a leitura do arquivo é concluída
stream.on('end', () => {
  console.log('Leitura concluída!');  // Exibe mensagem ao terminar de ler o arquivo
});

// Exemplo de uso de Writable Stream
// Para escrever em um arquivo de forma contínua:
const outputStream = fs.createWriteStream('saida.txt');

// Usando o método write() para adicionar dados ao arquivo
outputStream.write('Olá, Mundo!\n');
outputStream.write('Escrevendo mais dados no arquivo.\n');

// O método end() indica que não há mais dados para escrever
outputStream.end(() => {
  console.log('Gravação concluída!');  // Exibe mensagem ao terminar de escrever
});

// Buffers
// Buffers são objetos que armazenam dados binários em Node.js, essenciais quando trabalhamos com streams
// e manipulação de dados brutos (como imagens ou arquivos de áudio).

// Exemplo de uso de Buffer
const buffer = Buffer.from('Olá, Mundo!', 'utf8');

// Exibe o conteúdo do buffer
console.log(buffer);  // <Buffer 4f 6c 61 2c 20 4d 75 6e 64 6f 21>

// Explicação:
// O Buffer.from() cria um buffer a partir de uma string ou array de bytes.
// No exemplo, a string 'Olá, Mundo!' é convertida para seu equivalente em bytes usando a codificação 'utf8'.

// Explicação:
// Streams:

// Readable Streams permitem ler dados de forma contínua, sem carregar tudo de uma vez na memória. No exemplo, usamos fs.createReadStream() para ler um arquivo e o evento data é emitido sempre que um pedaço de dados é lido, permitindo processar grandes arquivos em pedaços.

// Writable Streams permitem escrever dados de forma contínua. No exemplo, usamos fs.createWriteStream() para escrever dados em um arquivo de forma sequencial. O método write() escreve os dados e end() indica o final da escrita.

// Buffers:

// Buffers são objetos usados para armazenar dados binários, como strings, imagens ou áudio. Eles são muito importantes quando trabalhamos com streams ou manipulamos dados que não são diretamente compatíveis com strings (por exemplo, arquivos binários).

// O método Buffer.from() é usado para criar um buffer a partir de uma string ou array de bytes. O exemplo converte a string 'Olá, Mundo!' em um buffer usando a codificação 'utf8'.

// Benefícios dos Streams:
// Eficiência de Memória: Ao ler ou escrever dados de forma contínua, você economiza memória, especialmente ao lidar com arquivos grandes.

// Performance: Streams são mais rápidas quando comparadas ao carregamento completo de dados na memória, já que processam dados à medida que são recebidos.

// Uso Prático:
// Leitura e Escrita de Arquivos: Quando você precisa ler ou escrever grandes arquivos (como logs ou vídeos), o uso de streams pode evitar que o programa consuma uma quantidade excessiva de memória.

// Processamento de Dados em Tempo Real: Usando streams, você pode processar dados enquanto eles estão sendo recebidos ou enviados, o que é útil em muitos sistemas de tempo real.

// Esse código cobre os conceitos e usos básicos de streams e buffers em Node.js, com exemplos práticos que você pode adaptar para seus próprios projetos.