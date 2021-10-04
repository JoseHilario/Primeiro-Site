const nav = document.querySelector('#header-1 nav')
const toggle = document.querySelectorAll('nav .toggle')
const lists = Array.from(document.querySelectorAll('nav ul li a'))

/* Função de click que abre o menu */
for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}
for (const list of lists) {
  list.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}
  
/* Initialize testimonials sliders(carousel) of lib swiper */
const swiper = new Swiper('.swiper-container', { /* Object abaixo */
  slidesPerView: 1, /* Quantos slides aparecer no viewport */
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, /* rodar usando rodinha do mouse */
  keyboard: true, /* rodar usando setas do teclado */
  breakpoints: { /* ajuste de media querie na section testimonials somente por js */
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #contact .text, #contact .links,
  #footer .brand, #footer .social`,
  {interval:100}
) 

/* Scroll detect navHeight */
const header_1 = document.querySelector('#header-1')
const navHeight = header_1.offsetHeight

function navHeightWhenScroll() {

  if(window.scrollY >= navHeight) {
    header_1.classList.add('scroll')
  } else {
    header_1.classList.remove('scroll')
  }
}

/* Arrow up visible after scroll */
const backToTop = document.querySelector('.back-to-top')
function arrowUp() {

  if(scrollY >= 560) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

/*Função localizar seção e selecionar automático no menu*/
const sections = document.querySelectorAll('section[id]')
function StyleMenuLinkWhenAtSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight/8) * 4
  
  for(let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
    }
  }
}

/* Run the 2 functions on top */
window.addEventListener('scroll', function() {
  navHeightWhenScroll()
  arrowUp()
  StyleMenuLinkWhenAtSection()
})