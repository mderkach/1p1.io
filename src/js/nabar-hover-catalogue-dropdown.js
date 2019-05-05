var catalogueTrigger = document.querySelector('.dropdown-catalogue-trigger');


if (catalogueTrigger) {
  var catalogue = document.querySelector('.dropdown-catalogue');
  var container = catalogue.querySelector('.dropdown-catalogue__container')
  var menuItem = document.querySelectorAll('.nav__menu-item');
  
  catalogueTrigger.addEventListener('click', function (event) {
    event.preventDefault();
  });

  catalogueTrigger.addEventListener('mouseover', function (event) {
    catalogueTrigger.classList.add('is-active');
    catalogue.classList.add('is-show');
  });

  container.addEventListener('mouseleave', function (event) {
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
      document.querySelector('.logo__wrapper').addEventListener('mouseover', function(){
        catalogueTrigger.classList.remove('is-active');
        catalogue.classList.remove('is-show');
      });
    }
  }
}