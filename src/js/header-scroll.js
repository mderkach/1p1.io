// add class to header on scroll
var scrollpos = window.scrollY;
var header = document.querySelector(".header");
var header_height = header.offsetHeight;

function add_class_on_scroll() {
  if (header.classList.contains("--transparent") && header.classList.contains("--toggle")) {
    header.classList.toggle("--transparent");
    header.classList.toggle("--white");
  } else if (header.classList.contains("--white") && header.classList.contains("--no-toggle")) { }
  header.classList.add("--fixed");
}

function remove_class_on_scroll() {
  if (header.classList.contains("--white") && header.classList.contains("--toggle")) {
    header.classList.toggle("--transparent");
    header.classList.toggle("--white");
  } else if (header.classList.contains("--white") && header.classList.contains("--no-toggle")) { }
  header.classList.remove("--fixed");
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});