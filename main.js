const nav = document.querySelector('#header nav') //o seletor procura pelo local header nav a coloca ele dentro da constante nav//
const toggle = document.querySelectorAll('nav .toggle') //o seletor procura dentro do nav o nó .toggle e salva ele em uma constante toggle//
for (const element of toggle) {
  //separa cada um dos elementos que são atribuidos ao toggle//
  element.addEventListener('click', function () {
    //"ouve" quando eu der um click em algum dos elementos e executa uma função
    nav.classList.toggle('show') // a função é pegar o nav na sua classList e aplicar o toggle de show (quando tiver tira e quando não tiver coloca)//
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// ----- chama o swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2
    }
  }
})

//---------wpp buton

const wpp = document.querySelector('main .wpp')

console.log(wpp)

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 300) {
    wpp.classList.add('show')
  } else {
    wpp.classList.remove('show')
  }
})
