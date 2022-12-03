//Кнопки для открытия формы с бокового меню
const buttonCallAside = document.querySelector('.icon-contact-menu-left__phone')
const buttonMessengAside = document.querySelector(
  '.icon-contact-menu-left__chat'
)
//Кнопки для открытия формы с хедера
const buttonCallHeader = document.querySelector('.icon-contact__phone')
const buttonMessengeHeader = document.querySelector('.icon-contact__chat')

//Кнопки для закрытия
const closeCallAside = document.querySelector('.call__button-close')
const closeMessengAside = document.querySelector('.app__button-close')
//Область для закрытия
const layoutCall = document.querySelector('.call__layout')
const layoutMessenge = document.querySelector('.app__container')

// Popap
const popupCall = document.querySelector('.call')
const popupMessenge = document.querySelector('.app')

//Открытие и закрытие заказать звонок c бокового меню
buttonCallAside.addEventListener('click', () => {
  popupCall.classList.add('active-call')
})

closeCallAside.addEventListener('click', () => {
  popupCall.classList.remove('active-call')
})

//Открытие и закрытие заказать обратная связь c бокового меню
buttonMessengAside.addEventListener('click', () => {
  popupMessenge.classList.add('active-app')
})

closeMessengAside.addEventListener('click', () => {
  popupMessenge.classList.remove('active-app')
})

//Открытие  заказать звонок c хедера
buttonCallHeader.addEventListener('click', () => {
  popupCall.classList.add('active-call')
})

//Открытие   заказать обратная связь  c хедера
buttonMessengeHeader.addEventListener('click', () => {
  popupMessenge.classList.add('active-app')
})

//Закрытие при нажатие на область
layoutCall.addEventListener('click', (event) => {
  if (event.target === layoutCall) {
    popupCall.classList.remove('active-call')
  }
})
layoutMessenge.addEventListener('click', (event) => {
  if (event.target === layoutMessenge) {
    popupMessenge.classList.remove('active-app')
  }
})
