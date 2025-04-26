const form = document.getElementById('form-produto');
const listaProdutos = document.getElementById('listaProdutos');

function criarCardProduto(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.innerHTML = `
        <a href="produto.html?id=${produto.id}">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <strong>R$ ${produto.preco}</strong>
        </a>
    `;
    return card;
}

function salvarProduto(produto) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const imagem = document.getElementById('imagem').value;
    const descricao = document.getElementById('descricao').value;

    const produto = {
        id: Date.now(),
        nome,
        preco,
        imagem,
        descricao
    };

    const card = criarCardProduto(produto);
    listaProdutos.appendChild(card);
    
    salvarProduto(produto);
    
    form.reset();
});

window.addEventListener('load', function() {
    listaProdutos.innerHTML = '';
    
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    
    produtos.forEach(produto => {
        const card = criarCardProduto(produto);
        listaProdutos.appendChild(card);
    });
});


// Captura o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Pega produtos do LocalStorage
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Procura o produto certo
const produto = produtos.find(p => p.id == id);

if (produto) {
  document.getElementById('detalhes-produto').innerHTML = `
    <h1>${produto.nome}</h1>
    <img src="${produto.imagem}" alt="${produto.nome}" style="width:300px; border-radius:10px;">
    <p>${produto.descricao}</p>
    <h2>Preço: R$ ${produto.preco}</h2>
    <a href="/colecao.html">Voltar para a loja</a>
  `;
} else {
  document.getElementById('detalhes-produto').innerHTML = `
    <p>Produto não encontrado.</p>
    <a href="/colecao.html">Voltar</a>
  `;
}
