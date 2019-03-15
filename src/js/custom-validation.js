// custom validation
var setInvalid = 'is-invalid';
var password = document.querySelectorAll('input[type=password]');
var forms = document.querySelectorAll('.validate');
var inputs = document.querySelectorAll('input');
window.addEventListener('load', function () {
  // Loop over forms and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      validateInput();
      if (form.checkValidity() === false) { //if errors
        event.preventDefault(); //disable submit
        event.stopPropagation();
      } else { // if no errors
        event.preventDefault(); // disble submit
        popupRegistration.classList.remove("is-active");
        popupSucess.classList.toggle("is-active"); //open sucess modal
        body.classList.toggle('modal-open');
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);

function validateInput() {
  inputs.forEach(function (input) {
    // Add a css class on submit when the input is invalid.
    input.addEventListener('invalid', function () {
      input.classList.add(setInvalid);
      input.parentElement.lastChild.previousSibling.classList.add('visible');
    });
    // Remove the class when the input becomes valid.
    // 'input' will fire each time the user types
    input.addEventListener('input', function () {
      if (input.validity.valid) {
        input.classList.remove(setInvalid);
        input.parentElement.lastChild.previousSibling.classList.add('visible');
      }
    });
  });
}

var formFooter = document.querySelectorAll('.form__footer');
window.addEventListener('load', function () {
  var subscribition = Array.prototype.filter.call(formFooter, function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); //disable submit
      form.classList.add('is-subscribed');
    }, false);
  });
}, false);