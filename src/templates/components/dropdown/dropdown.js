//dropdown menu
var trigger = document.querySelectorAll('.dropdown__trigger');

document.addEventListener('DOMContentLoaded', function () {
  trigger.forEach(
    function (dropdown) {
      var menu = dropdown.parentElement.lastChild.previousSibling;
      dropdown.addEventListener('click', function (event) {
        menu.classList.toggle('is-active');
        event.stopPropagation(); //prevent detect outside click on call
      });

      document.addEventListener('click', function (event) {//detect outside click
        var isClickInside = menu.contains(event.target);// set click target to menu of current dropdown
        if (!isClickInside) {
          menu.classList.remove('is-active');
        }
      });
    });
});