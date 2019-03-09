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
console.log (menuBtn, menu);