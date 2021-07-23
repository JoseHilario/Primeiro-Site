// Pegando a tag nav dentro da tag header pelo seletor css e atribuindo à constante nav.
const nav = document.querySelector('header nav')
// Pegando todas as classes toggle dentro da tag nav pelo seletor css e atribuindo à constante toggle.
const toggle = document.querySelectorAll('nav .toggle')

/* element é uma constante onde será atribuido à ela todos os elementos contidos na constante toggle, ou seja, 2 elementos, pois a contante toggle recebe todas as classes toggle(dentro do html) que são 2 e possue 1 elemento cada(ícone abrir/fechar menu).
  Então na primeira vez o element receberá
  o valor [0] para o loop e, depois [1].
  Quando clicar no elemento[0] sendo o ícone de abrir o menu, será executado uma função, onde dentro da lista de classes do nav será adicionado uma nova class, chamada 'show'(adicionado essa class, o seletor com essa class no css é ativado). Quando clicar no elemento[1] sendo o ícone de fechar o menu, será chamafa a função novamente, desta vez para tirar a class show da lista de classes do nav("desligando" o seletor no css, já que não foi encontrado a class no html). */

for (const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a') 
for (const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show')
  })
}