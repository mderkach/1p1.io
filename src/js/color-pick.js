var buttons = document.querySelectorAll('.form-button-color__btn');
var inputColor = document.querySelector('[name=color-paste]');
var banner = document.querySelector('.banner');
buttons.forEach(
  function (btn) {
    var dataColor = btn.getAttribute('data-color');
    document.addEventListener('DOMContentLoaded', function () {
      btn.style.backgroundColor = dataColor;
      inputColor.value = dataColor;
    });
    btn.addEventListener('click', function(){
      buttons.forEach(
        function(btn) {
          btn.classList.remove('is-picked');
        }
      );
      this.classList.add('is-picked');
      inputColor.value = this.getAttribute('data-color');
      banner.style.backgroundColor = this.getAttribute('data-color');
    });
  }
);