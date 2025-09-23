// Conjuntos de Promises: Promise.all() e Promise.race()

// Promise.all()
// Promise.all() recebe um array de Promises e retorna uma nova Promise que será resolvida
// quando todas as Promises do array forem resolvidas. Se qualquer uma das Promises for rejeitada,
// o Promise.all() será rejeitado.

// Exemplo com Promise.all():

// Criando Promises com setTimeout para simular operações assíncronas
const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Primeiro'));
const p2 = new Promise((resolve) => setTimeout(resolve, 2000, 'Segundo'));
const p3 = new Promise((resolve) => setTimeout(resolve, 3000, 'Terceiro'));

// Usando Promise.all para aguardar todas as Promises serem resolvidas
Promise.all([p1, p2, p3])
  .then((resultados) => {
    console.log(resultados); 
    // Saída: ['Primeiro', 'Segundo', 'Terceiro'] 
    // Pois todas as Promises foram resolvidas
  })
  .catch((erro) => {
    console.error(erro); // Caso alguma Promise seja rejeitada
  });

// Promise.race()
// Promise.race() recebe um array de Promises e retorna uma nova Promise que será resolvida
// assim que qualquer uma das Promises do array for resolvida. Ela não espera todas as Promises,
// apenas a primeira a ser concluída.

// Exemplo com Promise.race():

// Criando as mesmas Promises para o exemplo de Promise.race
const p4 = new Promise((resolve) => setTimeout(resolve, 1000, 'Primeiro'));
const p5 = new Promise((resolve) => setTimeout(resolve, 2000, 'Segundo'));
const p6 = new Promise((resolve) => setTimeout(resolve, 3000, 'Terceiro'));

// Usando Promise.race para pegar a primeira Promise resolvida
Promise.race([p4, p5, p6])
  .then((resultado) => {
    console.log(resultado); 
    // Saída: 'Primeiro' 
    // Pois foi a primeira Promise a ser resolvida (após 1 segundo)
  })
  .catch((erro) => {
    console.error(erro); // Caso alguma Promise seja rejeitada
  });

//Explicação:

//Promise.all():

//Promise.all() recebe um array de Promises e retorna uma nova Promise. Ela será resolvida quando todas as Promises no array forem resolvidas.

//Se qualquer Promise no array for rejeitada, a Promise retornada por Promise.all() será imediatamente rejeitada.

//No exemplo, as três Promises (p1, p2, e p3) são resolvidas, e o resultado final será um array com os valores resolvidos de cada Promise.

//Promise.race():

//Promise.race() também recebe um array de Promises, mas retorna uma nova Promise que será resolvida assim que qualquer uma das Promises for resolvida.

//Não importa a ordem das Promises no array, a Promise.race() resolve com o valor da primeira Promise que for completada (resolvida ou rejeitada).

//No exemplo, a primeira Promise a ser resolvida é p4, e portanto o valor 'Primeiro' será retornado.