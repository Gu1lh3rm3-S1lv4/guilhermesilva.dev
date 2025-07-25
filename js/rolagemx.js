// Cria uma instância do IntersectionObserver
const myObserver = new IntersectionObserver((entries) => {
  // Para cada elemento observado, verifica se está visível na viewport
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Se o elemento estiver visível (entrou na viewport), adiciona a classe 'show'
      entry.target.classList.add('show');
    } else {
      // Se o elemento não estiver mais visível, remove a classe 'show'
      entry.target.classList.remove('show');
    }
  });
});

// Seleciona todos os elementos com a classe 'sobre'
const elements = document.querySelectorAll('.container-sobre,.container-portfolio, .outerSectionDiv, .container-contato, .footer, .container-portfolio-2');

// Inicia a observação de cada elemento selecionado
elements.forEach((element) => myObserver.observe(element));

//COMEÇA SEMPRE NO TOPO DO SITE
//window.onload = function(){
//window.scrollTo(0, 0);

window.onload = function () {
  window.scrollTo(0, 0); // TESTE: comente e veja se melhora
};

// Atualiza a variável --vh para refletir a altura real da viewport
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', setViewportHeight);
window.addEventListener('DOMContentLoaded', setViewportHeight);
