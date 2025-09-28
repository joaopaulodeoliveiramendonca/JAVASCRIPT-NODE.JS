function executaOperacao(operacao, a, b) {
    return operacao(a, b); // Executa a operação recebida com os parâmetros a e b
}

function soma(x, y) {
    return x + y; // Função soma
}

function subtracao(x, y) {
    return x - y; // Função soma
}

console.log(executaOperacao(subtracao, 5, 3)); // 8 (passando a função soma como parâmetro)


function saudacaoExterna(nome) {
    return function() {
        console.log(`Olá, ${nome}`);
    };
}


// A função saudacaoComNome "lembra" do valor de 'nome' da função externa
const saudacaoComNome = saudacaoExterna("João");
saudacaoComNome(); // Olá, João