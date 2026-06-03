/* ============================================================
   MAIN.JS — JavaScript principal do SpaceThon
   ============================================================ */

// === Menu Hambúrguer ===
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

// Abre e fecha o menu
menuToggle.addEventListener('click', function () {
  navMenu.classList.toggle('aberto');
  menuToggle.classList.toggle('ativo');
});

// Fecha o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('aberto');
    menuToggle.classList.remove('ativo');
  });
});

// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
  // Mostra o botão ao rolar para baixo
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      btnTopo.classList.add('mostrar');
    } else {
      btnTopo.classList.remove('mostrar');
    }
  });

  // Volta ao topo suavemente ao clicar
  btnTopo.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
