// Seleciona o botão de Dark Mode
const btnDarkModeToggle = document.getElementById('DarkToggle');
const htmlElement = document.documentElement;

// Procura o tema, se nao achar, define como 'light'
let themeSystem = localStorage.getItem('themeSystem') || 'light';

// Aplica o tema salvo ao carregar a página
htmlElement.setAttribute('data-theme', themeSystem);

// Alterna o tema ao clicar
btnDarkModeToggle.addEventListener('click', function(e) {
  e.preventDefault();
  themeSystem = themeSystem === 'light' ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', themeSystem);
  localStorage.setItem('themeSystem', themeSystem);
});

//pega os dados no formulário
const form = document.getElementById('form-produto');
const listaProdutos = document.getElementById('listaProdutos');

//cria um card com as informações
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
    //a estrutura do card
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


