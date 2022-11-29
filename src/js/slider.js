import Swiper, { Pagination } from 'swiper'
const slider = document.querySelector('.swiper')
let mySwiper

function checkSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper('.swiper', {
      modules: [Pagination],
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 16
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2.7,
          spaceBetween: 16
        },
        768: {}
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    slider.dataset.mobile == 'true'
  }
  if (window.innerWidth > 767) {
    slider.dataset.mobile == 'false'

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy()
    }
  }
}

checkSlider()

window.addEventListener('resize', () => {
  checkSlider()
})
