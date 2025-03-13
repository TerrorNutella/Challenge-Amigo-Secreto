//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    inputAmigo.value = '';

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos e adiciona cada nome à lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Sorteia um índice aleatório do array de amigos
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado do sorteio na página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}