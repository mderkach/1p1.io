var catalogueTrigger = document.querySelector('.dropdown-catalogue-trigger');
var catalogue = document.querySelector('.dropdown-catalogue');
var menuItem = document.querySelectorAll('.nav__menu-item');

if (catalogueTrigger) {
  catalogueTrigger.addEventListener('click', function (event) {
    event.preventDefault();
  });
  catalogueTrigger.addEventListener('mouseover', function (event) {
    catalogueTrigger.classList.add('is-active');
    catalogue.classList.add('is-show');
  });
  catalogue.addEventListener('mouseleave', function (event) {
    catalogueTrigger.classList.remove('is-active');
    catalogue.classList.remove('is-show');
  });

  for (var i = 0; i < menuItem.length; i++) {
    if (menuItem[i] == catalogueTrigger) {

    } else {
      menuItem[i].addEventListener('mouseover', function () {
        catalogueTrigger.classList.remove('is-active');
        catalogue.classList.remove('is-show');
      });
    }
  }
}