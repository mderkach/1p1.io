//menu animation
var menuBtn = document.querySelectorAll('.mobile-menu__toggle');
var menu = document.querySelector('.mobile-menu-wrapper');

function menuTransition() {
  menu.classList.toggle("is-active");
}
menuBtn.forEach(
  function (btn) {
    btn.addEventListener("click", function () {
      menuTransition();
    });
  }
);