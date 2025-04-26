// Captura o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Pega produtos do LocalStorage
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Procura o produto certo
const produto = produtos.find(p => p.id == id);

if (produto) {
  document.getElementById('detalhes-produto').innerHTML = `
  <div class='produto-container'>
  <div class='produto-image'>
  <img src='${produto.imagem}' alt='${produto.nome}'>
  </div>
  <div class='produto-info'>
    <h1>${produto.nome}</h1>
    <p>${produto.descricao}</p>
    <h2>Preço: R$ ${produto.preco}</h2>
    <a href="colecao.html" class="botao-voltar">Voltar para a loja</a> `;
} else {
  document.getElementById('detalhes-produto').innerHTML = `
    <p>Produto não encontrado.</p>
    <a href="/colecao.html">Voltar</a>
  `;
}

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