/* BOTAO BACKTOTOP*/
document.addEventListener('DOMContentLoaded', function () {
  // Ajusta para garantir que o site comece no topo ao recarregar
  if (window.location.hash !== '') {
    window.location.hash = '';
  }

  const backToTopButton = document.getElementById('backToTop');

  // Função para exibir ou esconder os botões ao rolar a página
  function toggleButtons() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      backToTopButton.style.display = 'flex';
      setTimeout(() => {
        backToTopButton.style.opacity = '1';
      }, 10);
    } else {
      backToTopButton.style.opacity = '0';
      whatsappButton.style.opacity = '0';
      setTimeout(() => {
        backToTopButton.style.display = 'none';
      }, 500);
    }
  }

  // Adiciona o evento de scroll para exibir ou esconder os botões
  document.addEventListener('scroll', toggleButtons);

  // Ação ao clicar no botão "Voltar ao Topo"
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

