var buttons = document.querySelectorAll('.form-button-color__btn');
var inputColor = document.querySelectorAll('[name=color-paste]');
var banner = document.querySelector('.banner');
var btnPaste = document.querySelectorAll('.btn__paste');


buttons.forEach(
  function (btn) {
    var dataColor = btn.getAttribute('data-color');
    document.addEventListener('DOMContentLoaded', function () {
      btn.style.backgroundColor = dataColor;

      inputColor.forEach(
        function (input) {
          input.value =  dataColor;
        }
      );

    });
    btn.addEventListener('click', function () {

      buttons.forEach(
        function (btn) {
          btn.classList.remove('is-picked');
        }
      );

      this.classList.add('is-picked');

      inputColor.forEach(
        function (input) {
          input.value = btn.getAttribute('data-color');
        }
      );

      banner.style.backgroundColor = this.getAttribute('data-color');
    });
  }
);


if (inputColor) {
  inputColor.forEach(function (input) {
    input.addEventListener('input', function () {
      var color = new RegExp(/^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/);
      var value = this.value;
      if (color !== '') {
        banner.style.backgroundColor = value;
      }

      btnPaste.forEach(
        function(color) {
          color.style.backgroundColor = value;
        }
      );

    });
  });
}