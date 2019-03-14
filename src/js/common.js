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

// modal for video
var video = document.querySelector('#video');
$('.btn-video').fancybox({
  modal: false,
  hideScrollbar: true,
  buttons: ["close"],
  video: {
    autoStart: false
  },
  onActivate: function () {
    playButton.classList.remove('is-played');
  }

});
var playButton = document.querySelector("#play-pause");
//videoplayer
window.onload = function () {
  // Video
  var video = document.querySelector("video");
  if (video) {
    video.controls = false;
    video.autoplay = false;
  }
  if (playButton) {
    // Event listener for the play/pause button
    playButton.addEventListener("click", function () {
      if (video.paused == true) {
        // Play the video
        video.play();
        playButton.classList.toggle('is-played');
      } else {
        // Pause the video
        video.pause();
      }
    });
  }
}
// add class to header on scroll
var scrollpos = window.scrollY;
var header = document.querySelector(".header");
var header_height = header.offsetHeight;

function add_class_on_scroll() {
  if (header.classList.contains("--transparent") && header.classList.contains("--toggle")) {
    header.classList.toggle("--transparent");
    header.classList.toggle("--white");
  } else if (header.classList.contains("--white") && header.classList.contains("--no-toggle")) {}
  header.classList.add("--fixed");
};

function remove_class_on_scroll() {
  if (header.classList.contains("--white") && header.classList.contains("--toggle")) {
    header.classList.toggle("--transparent");
    header.classList.toggle("--white");
  } else if (header.classList.contains("--white") && header.classList.contains("--no-toggle")) {}
  header.classList.remove("--fixed");
};

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

// expand header search form
var expander = document.querySelector('.expand-form');
var headerSearchForm = document.querySelector('.form__search-header');
var inputSearchHeader = document.querySelector('.form__search-header-input');

function expandForm() {
  headerSearchForm.classList.toggle('collapsed');
};

expander.addEventListener('click', function () {
  expandForm();
  inputSearchHeader.focus();
});

inputSearchHeader.addEventListener('blur', function () {
  expandForm();
});


