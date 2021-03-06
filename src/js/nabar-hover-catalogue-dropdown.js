const catalogueTrigger = document.querySelector('.dropdown-catalogue-trigger')
if (catalogueTrigger) {
  const catalogue = document.querySelector('.dropdown-catalogue')
  const container = catalogue.querySelector('.dropdown-catalogue__container')
  const menuItem = document.querySelectorAll('.nav__menu-item')
  const isActiveMenuItem = document.querySelector('.nav__menu-item.is-active')
  const logo = document.querySelector('.logo__wrapper')
  const header = document.querySelector('header')
  let offsetPos = window.scrollY
  let header_offset = header.offsetHeight

  logo.addEventListener('mouseover', () => {
    if (isActiveMenuItem !== catalogueTrigger) {
      catalogueTrigger.classList.remove('is-active')
    }
    catalogue.classList.remove('is-show')
  })
  catalogueTrigger.addEventListener('click', e => e.preventDefault())
  catalogueTrigger.addEventListener('mouseover', () => {
    catalogue.classList.add('is-show')
    header.classList.remove('--transparent', '--toggle')
    header.classList.add('--white', '--no-toggle')
  })
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
