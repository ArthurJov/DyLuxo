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
