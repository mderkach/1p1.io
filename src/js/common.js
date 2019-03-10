//menu animation
var menuBtn = document.querySelector('.nav__menu-mobile-trigger');
var menu = document.querySelector('.mobile-menu');

function menuTransition() {
  menu.classList.toggle("is-active");
  menuBtn.classList.toggle("is-active");
}
menuBtn.addEventListener("click", function () {
  menuTransition();
});
// popup transition
var popupFullscreen = document.querySelector('.popup__fullscreen');
var popupCaller = document.querySelector('.popup--registration');
var popupClose = document.querySelector('.popup__close');
var body = document.querySelector('body');
function popupTransition() {
  popupFullscreen.classList.toggle("is-active");
}

popupCaller.addEventListener("click", function () {
  popupTransition();
  body.classList.toggle('modal-open');
});

popupClose.addEventListener("click", function () {
  popupTransition();
  body.classList.toggle('modal-open');
});

// custom validation
var setInvalid = 'is-invalid';
var password = document.querySelector('input[name=password]');
var forms = document.querySelectorAll('.validate');
var inputs = document.querySelectorAll('input');

window.addEventListener('load', function () {
  // Loop over forms and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      validateInput();
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();

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
      input.parentElement.children[1].classList.add('visible');
    });
    // Remove the class when the input becomes valid.
    // 'input' will fire each time the user types
    input.addEventListener('input', function () {
      if (input.validity.valid) {
        input.classList.remove(setInvalid);
        input.parentElement.children[1].classList.remove('visible');
      }
    });
  });
}
