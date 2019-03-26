var controls = document.querySelectorAll('.form__popup-inputNumberMini-controls');
var input = document.querySelectorAll('.form__popup-inputNumberMini');
controls.forEach(
  function (control) {
    var inputValue = control.parentNode.parentNode.querySelector('input');
    var action = control.getAttribute('data-action');
    control.addEventListener('click', function () {
      if (action == 'increase') {
        // var integer = parseInt(inputValue.value);
        // inputValue.value = integer += 1;
        // inputValue.setAttribute('value', parseInt(inputValue.value));
        inputValue.stepUp();
        inputValue.onchange = console.log('plus');
      } else {
        // var integer = parseInt(inputValue.value);
        // inputValue.value = integer -= 1;
        // inputValue.setAttribute('value', parseInt(inputValue.value));
        inputValue.stepDown();
      }
    });
  }
);