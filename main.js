/* Função de click que abre o menu */
const nav = document.querySelector('#header-1 nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/*Função de click que estiliza uma seção do menu */
const lists = Array.from(document.querySelectorAll('nav ul .link'))

lists.forEach((item) => {
  item.addEventListener('click', (event) => {
    lists.forEach((item) => item.classList.remove('active')) 
    event.currentTarget.classList.add('active')
  })
})

for (const list of lists) {
  list.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}

/* Função de scroll que detecta local da seção: está com falha 
const section = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
  for(let i = 0; i < section.length; i++) {
    if (window.scrollY > section[i].offsetHeight) {
      lists[i].classList.remove('active')
      lists[i+1].classList.add('active')
    } 
    /* Testando o retorno do scroll: não funciona
    else {
      if (window.scrollY < section[i].offsetHeight) {
        lists[i + 1].classList.remove('active')
        lists[i].classList.add('active')
      }
    } 
  }
}) */

/* Função de scroll que detecta a altura do nav */
const header_1 = document.querySelector('#header-1')
const navHeight = header_1.offsetHeight

window.addEventListener('scroll', function () {
  if(window.scrollY >= navHeight) {
    header_1.classList.add('scroll')
  } else {
    header_1.classList.remove('scroll')
  }
})
  
/* Initialize testimonials sliders(carousel) of lib swiper */
const swiper = new Swiper('.swiper-container', { /* Object abaixo */
  slidesPerView: 1, /* Quantos slides aparecer no viewport */
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, /* rodar usando rodinha do mouse */
  keyboard: true /* rodar usando setas do teclado */
})

/* Initialize lib Scroll Revial: see elements when the page scroll */
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700, /* milisegundos */
  reset: true /* sempre ter a animação até no final e quando voltar */
})

scrollreveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links`,
  {interval:100}
)

/* Arrow up visible after scroll */
const backToTop = document.querySelector('.back-to-top')
window.addEventListener('scroll', function() {
  if(scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
})