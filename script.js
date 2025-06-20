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
  autoplay: {
    delay: 1500,
    disableOnInteraction: false
  },
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

const swiperContainer = document.querySelector('.mySwiper');
swiperContainer.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();
});
swiperContainer.addEventListener('mouseleave', () => {
  swiper.autoplay.start();
});




document.querySelectorAll('.servicos_disponiveis .card').forEach(card => {
  card.addEventListener('click', () => {
    const nomeServico = card.querySelector('h3')?.innerText || 'serviço';

    const mensagem = `Gostaria desse serviço: ${nomeServico}`;
    const url = `https://wa.me/5513999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });
});
