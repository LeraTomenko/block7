//Блок info
const buttonForInfo = document.querySelector('.info__button')
const containerInfo = document.querySelector('.info__text')

buttonForInfo.addEventListener('click', () => {
  containerInfo.classList.toggle('hiddenText')
  buttonForInfo.classList.toggle('rotate')
  if (containerInfo.classList.contains('hiddenText')) {
    buttonForInfo.textContent = 'Читать далее'
  } else {
    buttonForInfo.textContent = 'Скрыть'
  }
})

//Блок slider-brands
const buttonForBrands = document.querySelector('.slider-brands-btn__button')
const containerBrands = document.querySelector('.container-for-hidden-brands')

buttonForBrands.addEventListener('click', () => {
  containerBrands.classList.toggle('hidden')
  buttonForBrands.classList.toggle('rotate')
  if (containerBrands.classList.contains('hidden')) {
    buttonForBrands.textContent = 'Показать все'
  } else {
    buttonForBrands.textContent = 'Скрыть'
  }
})

//Блок slider-repair

const buttonForRepair = document.querySelector('.slider-repair__btn')
const containerForRepair = document.querySelector('.container-for-hidden')

buttonForRepair.addEventListener('click', () => {
  containerForRepair.classList.toggle('hidden-repair')
  buttonForRepair.classList.toggle('rotate')
  if (containerForRepair.classList.contains('hidden-repair')) {
    buttonForRepair.textContent = 'Показать все'
  } else {
    buttonForRepair.textContent = 'Скрыть'
  }
})
