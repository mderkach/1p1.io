const catalogueTrigger = document.querySelector('.dropdown-catalogue-trigger')
if (catalogueTrigger) {
  const catalogue = document.querySelector('.dropdown-catalogue')
  const container = catalogue.querySelector('.dropdown-catalogue__container')
  const menuItem = document.querySelectorAll('.nav__menu-item')
  const isActiveMenuItem = document.querySelector('.nav__menu-item.is-active')
  const logo = document.querySelector('.logo__wrapper')

  logo.addEventListener('mouseover', () => {
    if (isActiveMenuItem !== catalogueTrigger) {
      catalogueTrigger.classList.remove('is-active')
    }
    catalogue.classList.remove('is-show')
  })
  catalogueTrigger.addEventListener('click', e => e.preventDefault())
  catalogueTrigger.addEventListener('mouseover', () => catalogue.classList.add('is-show'))
  // catalogueTrigger.addEventListener('mouseleave', () => catalogue.classList.remove('is-show'))
  container.addEventListener('mouseleave', () => {
    catalogue.classList.remove('is-show')
  })
  container.addEventListener('mouseover', () => catalogueTrigger.classList.add('is-active'))
  menuItem.forEach(el => {
    if (el !== catalogueTrigger) {
      el.addEventListener('mouseover', () => {
        if (isActiveMenuItem !== catalogueTrigger) {
          catalogueTrigger.classList.remove('is-active')
        }
        catalogue.classList.remove('is-show')
      })
    }
  })
}
