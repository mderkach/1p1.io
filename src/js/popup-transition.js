
// popup transition
var popupRegistration = document.querySelector('#registration');
var popupSucess = document.querySelector('#success');
var popupLogin = document.querySelector('#login');
var popupCaller = document.querySelectorAll('.popup--toggle');
var popupClose = document.querySelectorAll('.btn--close-popup');
var body = document.querySelector('body');

for (i = 0; i < popupCaller.length; ++i) {
  popupCaller[i].addEventListener("click", function (event) {
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
    body.classList.add('modal-open');
  });
}

for (i = 0; i < popupClose.length; ++i) {
  popupClose[i].addEventListener("click", function (event) {
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
    body.classList.remove('modal-open');
  });
}
