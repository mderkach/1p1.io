var bookmark = document.querySelectorAll('.btn-bookmark');
var userStatus = document.querySelector(".header");
var error = document.querySelector('.ads__bookmark-error');
bookmark.forEach(
  function(btn) {
    btn.addEventListener("click", function () {
      //AJAX sucees here
  
      //AJAX false here
      if (userStatus.classList.contains("--unauthorised")){
        error.classList.toggle('is-error');
      }
    });
  }
);