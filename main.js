const nav = document.querySelector('header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}



const header_1 = document.querySelector('#header-1')
const navHeight = header_1.offsetHeight

window.addEventListener('scroll', function () {
  if(window.scrollY >= navHeight) {
    header_1.classList.add('scroll')
  } else {
    header_1.classList.remove('scroll')
  }
})
  