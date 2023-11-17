/* abre e fecha menu = icone hamburguer */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar no item do menu fecha o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll(movimento de rolagem da pag)*/
function changeHeaderWhenScroll() {
  const header = document.querySelector('header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    // scroll é mior q a aultura do header
    header.classList.add('scroll')
  } else {
    // menor q a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel sliders swiper */
/*const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})*/

/* SCROLLREVEAL: Mostrar elementos ao rolar a pagina */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* botao voltar para o topo */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (this.window.scrollY >= 700) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
