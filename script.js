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



/* ADICIONADO POR RUAN */
// Seleciona o botão hamburguer e o menu
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuLinks = document.querySelector('.links-container ul');

// Quando o botão hamburguer for clicado, alterna a classe "active" no menu
menuHamburguer.addEventListener('click', () => {
  menuLinks.classList.toggle('active');  // ativa e desativa classe no menu de links
});
/* FIM DA ADIÇÃO DE RUAN */
