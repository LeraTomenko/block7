const buttonBurger = document.querySelector('.menu-burger__link')
const menuLeft = document.querySelector('.menu-left')
const buttonClose = document.querySelector('.menu-left-top__button')

buttonBurger.addEventListener('click', () => {
  menuLeft.classList.add('menu-left-active')
})

buttonClose.addEventListener('click', () => {
  menuLeft.classList.remove('menu-left-active')
})
