// expand header search form
var expander = document.querySelector('.expand-form');
var headerSearchForm = document.querySelector('.form__search-header');
var inputSearchHeader = document.querySelector('.form__search-header-input');

function expandForm() {
  headerSearchForm.classList.toggle('collapsed');
}

expander.addEventListener('click', function () {
  expandForm();
  inputSearchHeader.focus();
});

inputSearchHeader.addEventListener('blur', function () {
  expandForm();
});

//dropdown menu
var trigger = document.querySelector('.dropdown__trigger');
if (trigger) {
  trigger.addEventListener('click', function () {
    this.parentElement.lastChild.previousSibling.classList.toggle('is-active');
  });
}