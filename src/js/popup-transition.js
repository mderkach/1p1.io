//check user agent
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(Mac)/i);

function checkMobile() {
  if (!isMobile) {
    body.classList.add('--scrollbar-hidden');
  }
}
// popup transition
var popupRegistration = document.querySelector('#registration');
var popupSucess = document.querySelector('#success');
var popupLogin = document.querySelector('#login');
var popupCaller = document.querySelectorAll('.popup--toggle');
var popupClose = document.querySelectorAll('.btn--close-popup');
var body = document.querySelector('body');
// TO DO: сделать открытие-закрытие универсальным
for (i = 0; i < popupCaller.length; ++i) {
  popupCaller[i].addEventListener("click", function (event) {
    if (this.getAttribute('data-modal') == 'registration') {
      event.preventDefault();
      popupLogin.classList.remove("is-active");
      popupRegistration.classList.toggle("is-active");
    } else if (this.getAttribute('data-modal') == 'login') {
      event.preventDefault();
      popupLogin.classList.toggle("is-active");
    } else {
      event.preventDefault();
      popupSucess.classList.toggle("is-active");
    }
    body.classList.add('modal-open');
    checkMobile();
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
    body.classList.remove('modal-open','--scrollbar-hidden');
  });
}

// popup edit modal
var editBtn = document.querySelectorAll('.btn-edit-ads');
var removeAds = document.querySelectorAll('.btn-remove-ads');
var modalAbout = document.querySelector('#edit-about');
var modalRemove = document.querySelector('#remove-ads');
var modalTextarea = document.querySelector('.popup-edit__textarea');
var closeModal = document.querySelectorAll('.popup-edit-reset');
editBtn.forEach(
  function (btn) {
    btn.addEventListener('click', function () {
      if (this.parentElement.parentElement.classList.contains('card-about')) {
        modalAbout.classList.add('is-active');
        body.classList.add('modal-open');
        checkMobile();
        auto_grow(modalTextarea);
      }
    });
  }
)

function auto_grow(element) {
  element.style.height = (element.scrollHeight) + 2 + "px";
}

//popup delete ads
removeAds.forEach(
  function (btn) {
    btn.addEventListener('click', function () {
      if (this.parentElement.parentElement.parentElement.classList.contains('ads-card')) {
        modalRemove.classList.add('is-active');
        body.classList.add('modal-open');
        checkMobile();
      }
    });
  }
);

//close modal edit and remove
closeModal.forEach(
  function (btn) {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      modalAbout.classList.remove('is-active');
      modalRemove.classList.remove('is-active');
      body.classList.remove('modal-open','--scrollbar-hidden');
    });
  }
);