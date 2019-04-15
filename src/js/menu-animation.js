//menu animation
var menuBtn = document.querySelectorAll('.mobile-menu__toggle');
var menu = document.querySelector('.mobile-menu-wrapper');

function menuTransition() {
  menu.classList.toggle("is-active");
  document.body.classList.toggle('modal-open');
}
menuBtn.forEach(
  function (btn) {
    btn.addEventListener("click", function () {
      menuTransition();
    });
  }
);

//catalogue mobile menu
var mobileMenu = document.querySelectorAll('.mobile-menu--catalogue');
var windowHeight = window.innerHeight;

function setHeight(item) {
  if (window.innerWidth < 992) {
    var itemHeight = item.clientHeight;
    if (itemHeight < windowHeight) {
      item.style.height = windowHeight + 'px';
    }
  }
}


if (mobileMenu.length > 0) {
  mobileMenu.forEach(function (menu) {
    setHeight(menu);
  });
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 992) {
    for (var i = 0; i <= mobileMenu.length; i++) {
      if (mobileMenu[i] !== undefined) {
        var height = mobileMenu[i].clientHeight;
        if (height < window.innerHeight) {
          mobileMenu[i].style.height = window.innerHeight + 'px';
        } else {
          mobileMenu[i].style.height = 'auto'
        }
      }
    }
  }
});