var controls = document.querySelectorAll('.form__popup-inputNumberMini-controls');
var input = document.querySelectorAll('.form__popup-inputNumberMini');
var percent = document.querySelector('[data-type=percent]');

function setValue() {
  var currentValue = percent.value;
  if (percent.value > 100) {
    percent.value = 100;
  } else {
    percent.value = parseInt(currentValue);
  }
  percent.setAttribute('value', parseInt(percent.value));
}

if (percent) {
  percent.addEventListener('input', function () {
    setValue();
  });

  percent.addEventListener('blur', function () {
    if (percent.value == "") {
      percent.value = 0;
      percent.setAttribute('value', parseInt(percent.value));
    } else {
      setValue();
    }
  });
}

if (controls.length != 0) {
  controls.forEach(
    function (control) {
      var inputValue = control.parentNode.parentNode.querySelector('input');
      var action = control.getAttribute('data-action');

      control.addEventListener('click', function () {
        if (action == 'increase') {
          // var integer = parseInt(inputValue.value);
          // inputValue.value = integer += 1;
          inputValue.stepUp();
          inputValue.setAttribute('value', parseInt(inputValue.value));
        } else {
          // var integer = parseInt(inputValue.value);
          // inputValue.value = integer -= 1;
          inputValue.stepDown();
          inputValue.setAttribute('value', parseInt(inputValue.value));
        }
      });
    }
  );
}