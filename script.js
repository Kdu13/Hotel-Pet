const btnTopo = document.getElementById("btnTopo");
window.addEventListener("scroll", function () {
  btnTopo.style.display = window.scrollY > 200 ? "block" : "none";
});

btnTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const usuario = localStorage.getItem('usuarioLogado');
  if (usuario) {
    const barra_navegacao_caixa2 = document.querySelector('.barra_navegacao_caixa2');
    barra_navegacao_caixa2.innerHTML = ``;
  }
  localStorage.clear();
});


const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menuMobile");

toggle.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});



let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

