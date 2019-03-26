var controls = document.querySelectorAll('.form__popup-inputNumberMini-controls');
var input = document.querySelectorAll('.form__popup-inputNumberMini');
controls.forEach(
  function(control) {
    var inputValue = control.parentNode.parentNode.querySelector('input');
    var action = control.getAttribute('data-action');
    control.addEventListener('click', function(){
      if (action == 'increase') {
        var integer = parseInt(inputValue.value);
        inputValue.value = integer += 1;
        inputValue.setAttribute('value', parseInt(inputValue.value));
        //inputValue.stepUp();
      } else {
        var integer = parseInt(inputValue.value);
        inputValue.value = integer -= 1;
        inputValue.setAttribute('value', parseInt(inputValue.value));
        //inputValue.stepDown();
      }
    });
  }
);
// TO:DO сделать реплейс процентов
input.forEach (
  function (input) {
    var type = input.getAttribute('data-type');
    if (type == 'percent') {
      console.log(type);
      this.addEventListener('change', function(){
        var currentValue = parseInt(this.value);
        this.value = currentValue + '%';
      });
    }
    
  }
);
