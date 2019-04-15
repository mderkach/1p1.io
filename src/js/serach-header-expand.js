// expand header search form
var expander = document.querySelector('.expand-form');
var headerSearchForm = document.querySelector('.form__search-header');
var inputSearchHeader = document.querySelector('.form__search-header-input');

function expandForm() {
  headerSearchForm.classList.toggle('collapsed');
  if (window.innerWidth < 992) {
    headerSearchForm.classList.toggle('--mobile-expand');
    var btn = document.querySelector('.btn-header.popup--toggle');
    var cart = document.querySelector('.menu-bar__regular-popup.popup--toggle');
    if (headerSearchForm.classList.contains('--mobile-expand')) {
      btn.classList.add('is-hidden');
      cart.classList.add('is-hidden');

    } else {
      btn.classList.remove('is-hidden');
      cart.classList.remove('is-hidden');
    }
  }
}

expander.addEventListener('click', function () {
  expandForm();
  inputSearchHeader.focus();
});

inputSearchHeader.addEventListener('blur', function () {
  expandForm();
});