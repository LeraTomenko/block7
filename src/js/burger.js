const buttonBurger = document.querySelector('.menu-burger__link')
const menuLeft = document.querySelector('.menu-left')
const buttonClose = document.querySelector('.menu-left-top__button')
const layoutMenu = document.querySelector('.menu-left__layout')

buttonBurger.addEventListener('click', () => {
  menuLeft.classList.add('menu-left-active')
})

buttonClose.addEventListener('click', () => {
  menuLeft.classList.remove('menu-left-active')
})

layoutMenu.addEventListener('click', (event) => {
  if (event.target === layoutMenu) {
    menuLeft.classList.remove('menu-left-active')
  }
})
