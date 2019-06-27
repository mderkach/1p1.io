// add class to header on scroll
var scrollpos = window.scrollY
var header = document.querySelector('.header')

function add_class_on_scroll() {
  if (header.classList.contains('--transparent') && header.classList.contains('--toggle')) {
    header.classList.toggle('--transparent')
    header.classList.toggle('--white')
  } else if (header.classList.contains('--white') && header.classList.contains('--no-toggle')) {
  }
  header.classList.add('--fixed')
}

function remove_class_on_scroll() {
  if (header.classList.contains('--white') && header.classList.contains('--toggle')) {
    header.classList.toggle('--transparent')
    header.classList.toggle('--white')
  } else if (header.classList.contains('--white') && header.classList.contains('--no-toggle')) {
  }
  header.classList.remove('--fixed')
}

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY

  if (scrollpos >= 0.1) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})
