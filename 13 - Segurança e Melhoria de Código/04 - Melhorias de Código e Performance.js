// Melhorias de Código e Performance

// Boas práticas de codificação

// Evite código duplicado: Organize o código de forma que funções e módulos sejam reutilizáveis.
// Exemplo de reutilização de código:
function getUserById(userId) {
    return User.findById(userId); // Função reutilizável para buscar um usuário pelo ID
}

// Use funções puras: Funções puras são aquelas que não têm efeitos colaterais e retornam sempre o mesmo resultado para as mesmas entradas.
function somar(a, b) {
    return a + b; // Função pura, sempre retornará o mesmo valor para os mesmos parâmetros
}

// Manter a simplicidade: Evite complicar o código desnecessariamente. Funções devem ter uma única responsabilidade e serem fáceis de entender.
function calcularDesconto(preco, percentualDesconto) {
    return preco * (1 - percentualDesconto / 100); // Função simples com uma responsabilidade única: calcular desconto
}

// Otimização de Performance

// Uso de cache: Armazene em cache respostas que são solicitadas frequentemente para evitar processamento repetido.
const cache = {};
function getUserData(userId) {
    if (cache[userId]) {
        return Promise.resolve(cache[userId]); // Retorna o valor em cache se já foi buscado
    }
    return User.findById(userId).then(userData => {
        cache[userId] = userData; // Armazena no cache
        return userData;
    });
}

// Reduzir chamadas ao banco de dados: Minimize o número de consultas ao banco, usando joins eficientes e consultas agregadas.
// Exemplo de consulta agregada eficiente:
User.aggregate([
    { $match: { status: 'ativo' } }, // Filtra apenas os usuários ativos
    { $group: { _id: '$location', totalUsers: { $sum: 1 } } } // Agrupa por localização e conta o total de usuários
]);

// Evitar bloqueios: Em operações assíncronas, sempre que possível, use técnicas como Promise.all ou async/await para evitar bloqueios de threads.
const p1 = getUserFromDatabase(); // Busca usuário
const p2 = getOrdersFromDatabase(); // Busca pedidos
Promise.all([p1, p2]).then(([user, orders]) => {
    // Tratar os resultados de ambas as promessas ao mesmo tempo, sem bloquear a execução
    console.log(user, orders);
});

// Exemplo com async/await (evitando bloqueios):
async function fetchUserData(userId) {
    const user = await getUserFromDatabase(userId);
    const orders = await getOrdersFromDatabase(userId);
    return { user, orders };
}
