// Arquitetura Orientada a Eventos

// O que é Arquitetura Orientada a Eventos?
// A arquitetura orientada a eventos é um modelo de design onde os componentes do sistema comunicam-se uns com os outros através de eventos. 
// Isso permite que o sistema seja desacoplado e mais escalável. Cada componente pode emitir eventos, e outros componentes podem 
// escutar esses eventos e reagir de acordo.

// Exemplo com EventEmitter em Node.js

// O EventEmitter do Node.js permite que você crie e gerencie eventos personalizados.
const EventEmitter = require('events');

// Criando uma nova classe que estende o EventEmitter para criar um emissor de eventos customizado
class MyEmitter extends EventEmitter {}

// Instanciando o emissor de eventos
const myEmitter = new MyEmitter();

// Ouvir o evento 'eventoCriado' e executar uma ação quando ele for emitido
myEmitter.on('eventoCriado', () => {
    console.log('Evento criado com sucesso!'); // Mensagem quando o evento for disparado
});

// Emitir o evento 'eventoCriado' para que qualquer função ouvindo esse evento seja chamada
myEmitter.emit('eventoCriado');
