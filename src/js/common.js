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
var popupRegistration = document.querySelector('#registration');
var popupSucess = document.querySelector('#success');
var popupLogin = document.querySelector('#login');
var popupCaller = document.querySelectorAll('.popup--toggle');
var popupClose = document.querySelectorAll('.btn--close-popup');
var body = document.querySelector('body');

for (i = 0; i < popupCaller.length; ++i) {
  popupCaller[i].addEventListener("click", function () {
    if (this.getAttribute('data-modal') == 'registration') {
      event.preventDefault();
      popupLogin.classList.remove("is-active");
      popupRegistration.classList.toggle("is-active");
    }
    else if (this.getAttribute('data-modal') == 'login') {
      event.preventDefault();
      popupLogin.classList.toggle("is-active");
    } else {
      event.preventDefault();
      popupSucess.classList.toggle("is-active");
    }
    body.classList.toggle('modal-open');
  });
}

for (i = 0; i < popupClose.length; ++i) {
  popupClose[i].addEventListener("click", function () {
    if (this.getAttribute('data-modal') == 'registration') {
      event.preventDefault();
      popupRegistration.classList.toggle("is-active");
    } else if (this.getAttribute('data-modal') == 'login') {
      event.preventDefault();
      popupLogin.classList.toggle("is-active");
    } else {
      event.preventDefault();
      popupSucess.classList.toggle("is-active");
    }
    body.classList.toggle('modal-open');
  });
}


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


lightGallery(document.querySelector('.btn-video'), {
  mode: 'lg-fade',
  cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
  loop: false,
  controls: false,
  download: false,
  counter: false,
}); 
