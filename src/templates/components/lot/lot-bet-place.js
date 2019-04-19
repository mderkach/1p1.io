var placeBet = document.querySelector('.btn-lot-place');
var input = document.querySelector('.lot__bet--place-input');
var wrapper = document.querySelector('.lot__bet--place-input-outer');

if (input) {
  input.addEventListener('input', function(){
    var value = input.value;
    input.setAttribute('value', parseInt(value));
  });

  placeBet.addEventListener('click', function(){
    var validValue = input.dataset.minimum;
    var step = input.dataset.step;
    var value = input.value;
  
    if ((value - step) < validValue) {
      wrapper.classList.add('is-invalid');
    } else {
      wrapper.classList.remove('is-invalid');
    }
  });
}
