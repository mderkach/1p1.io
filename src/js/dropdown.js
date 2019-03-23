//dropdown menu
var trigger = document.querySelectorAll('.dropdown__trigger');

trigger.forEach(
  function(dropdown) {
    dropdown.addEventListener('click', function () {
      this.parentElement.lastChild.previousSibling.classList.toggle('is-active');
    });
  }
);