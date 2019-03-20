var bookmark = document.querySelectorAll('.btn-bookmark');
var userStatus = document.querySelector(".header");
var error = document.querySelector('.bookmark-error');
bookmark.forEach(
  function(btn) {
    btn.addEventListener("click", function () {
      //AJAX sucees here
      if (userStatus.classList.contains("--authorised")){
        this.querySelector('.ads__bookmark-img').classList.toggle('is-bookmarked');
      }
      //AJAX false here
      if (userStatus.classList.contains("--unauthorised")){
        error.classList.toggle('is-error');
        setTimeout(function() {
          error.classList.toggle('is-error');
        }, 3000);
      }
    });
  }
);