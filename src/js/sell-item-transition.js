//form sell item switch
var fieldsets = document.querySelectorAll('.form__popup-sell-fieldset');
var switcher = document.querySelector('.swith__fieldset');
var footers = document.querySelectorAll('.popup__fullscreen-footer');

window.addEventListener("load", function () {
  if (switcher) {
    switcher.addEventListener('click', switchFieldset);
  }

  function switchFieldset(fieldset) {
    fieldsets.forEach(function (allFieldsets) {
      allFieldsets.classList.remove('is-active');
    });
    footers.forEach(function (allFooters) {
      allFooters.classList.remove('is-active');
    });
    fieldset.preventDefault();
    fieldsetActiveId = fieldset.target.getAttribute('href');
    footerActiveId = fieldset.target.getAttribute('data-step');
    var fieldsetActive = document.querySelector(fieldsetActiveId);
    var footerActive = document.querySelector('#' + footerActiveId);
    fieldsetActive.classList.add('is-active');
    footerActive.classList.add('is-active');
    document.querySelector('.popup__fullscreen-outer').scrollTop = 0;
  }
});