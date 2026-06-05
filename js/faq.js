/* ============================================================
   FAQ.JS — Accordion das perguntas frequentes
   ============================================================ */

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function (header) {
  header.addEventListener('click', function () {

    // Pega o item pai e verifica se já está aberto
    const item = this.parentElement;
    const estaAberto = item.classList.contains('ativo');

    // Alterna o estado de aberto/fechado apenas do item clicado
    item.classList.toggle('ativo');

    // Troca o ícone dependendo se ficou ativo ou não
    if (item.classList.contains('ativo')) {
      this.querySelector('.accordion-icone').textContent = '−';
    } else {
      this.querySelector('.accordion-icone').textContent = '+';
    }
  });
});
