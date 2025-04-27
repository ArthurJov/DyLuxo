function toggleForm(tipo) {
    const loginForm = document.getElementById("form-login");
    const cadastroForm = document.getElementById("form-cadastro");
  
    if (tipo === 'login') {
      loginForm.classList.add("active");
      cadastroForm.classList.remove("active");
    } else {
      loginForm.classList.remove("active");
      cadastroForm.classList.add("active");
    }
  }