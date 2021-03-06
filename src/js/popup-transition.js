//check user agent
var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)|(Mac)/i)

function checkMobile() {
  if (!isMobile) {
    document.body.classList.add('--scrollbar-hidden')
  }
}
// popup transition
var callers = document.querySelectorAll('.popup--toggle')
var popups = document.querySelectorAll('.popup--target')
var closers = document.querySelectorAll('.btn--close-popup')

callers.forEach(function(btn) {
  btn.addEventListener('click', openPopup)
})

closers.forEach(function(btn) {
  btn.addEventListener('click', closePopup)
})

function openPopup(popupCaller) {
  popupCaller.preventDefault()
  checkMobile()
  document.body.classList.add('modal-open')
  popups.forEach(function(close) {
    close.classList.remove('is-active')
  })
  popupActiveId = popupCaller.target.getAttribute('href')

  if (popupActiveId == null) {
    //detect click nested objects
    var id = popupCaller.target.parentElement.getAttribute('href') // get href of parent
    if (popupCaller.target.classList.contains('hamburger-inner')) {
      id = popupCaller.target.parentElement.parentElement.getAttribute('href')
    }
    popupActiveId = id // set href
  }
  var popupActive = document.querySelector(popupActiveId)
  popupActive.classList.add('is-active')
}

function closePopup(popupCloser) {
  document.body.classList.remove('modal-open', '--scrollbar-hidden')
  popups.forEach(function(close) {
    close.classList.remove('is-active')
  })
}

// popup edit modal
var editBtn = document.querySelectorAll('.btn-edit-ads')
var removeAds = document.querySelectorAll('.btn-remove-ads')
var modalAbout = document.querySelector('#edit-about')
var modalRemove = document.querySelector('#remove-ads')
var modalTextarea = document.querySelector('.popup-edit__textarea')
var closeModal = document.querySelectorAll('.popup-edit-reset')

editBtn.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (this.parentElement.parentElement.classList.contains('card-about')) {
      modalAbout.classList.add('is-active')
      document.body.classList.add('modal-open')
      checkMobile()
      auto_grow(modalTextarea)
    }
  })
})

function auto_grow(element) {
  element.style.height = element.scrollHeight + 2 + 'px'
}

//popup delete ads
removeAds.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if (this.parentElement.parentElement.parentElement.classList.contains('ads-card')) {
      modalRemove.classList.add('is-active')
      document.body.classList.add('modal-open')
      checkMobile()
    }
  })
})

//close modal edit and remove
closeModal.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    event.preventDefault()
    if (modalAbout) {
      modalAbout.classList.remove('is-active')
    }
    if (modalRemove) {
      modalRemove.classList.remove('is-active')
    }
    document.body.classList.remove('modal-open', '--scrollbar-hidden')
  })
})

//close button for mobile filters popup
var filterPopup = document.querySelector('.popup__filter')
var closeFilterPopup = document.querySelector('.hamburger')
var openFilterPopup = document.querySelector('.btn__marketplace-filter')
if (filterPopup && closeFilterPopup && openFilterPopup) {
  openFilterPopup.addEventListener('click', function() {
    if (filterPopup.classList.contains('is-active')) {
      var mobileMenuBtn = document.querySelector('.btn--mobile--menu')
      mobileMenuBtn.style.width = 0
      closeFilterPopup.classList.add('is-active')
      checkMobile()

      closeFilterPopup.addEventListener('click', function() {
        filterPopup.classList.remove('is-active')
        closeFilterPopup.classList.remove('is-active')
        mobileMenuBtn.style.width = 'auto'
        document.body.classList.remove('modal-open', '--scrollbar-hidden')
      })
    }
  })
}

//bookmark items popup
var button = document.querySelector('.btn-lot-fav')
if (button) {
  var modal = document.querySelector(button.dataset.modal)
  var close = modal.querySelector('.popup-bookmark-close')

  button.addEventListener('click', function(event) {
    event.preventDefault()
    modal.classList.add('is-active')
  })

  close.addEventListener('click', function(event) {
    event.preventDefault()
    modal.classList.remove('is-active')
  })
}
