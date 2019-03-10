//menu animation
var menuBtn = document.querySelector('.nav__menu-mobile-trigger');
var menu = document.querySelector('.mobile-menu');

function menuTransition() {
  menu.classList.toggle("is-active");
  menuBtn.classList.toggle("is-active");
}
menuBtn.addEventListener("click", function(){
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

popupCaller.addEventListener("click", function(){
  popupTransition();
  body.classList.toggle('modal-open');
});

popupClose.addEventListener("click", function(){
  popupTransition();
  body.classList.toggle('modal-open');
});