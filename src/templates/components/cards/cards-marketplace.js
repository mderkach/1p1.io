var Masonry = require('masonry-layout');

var cards = document.querySelector('.marketplace-card-wrapper');
if (cards) {
  var msnry = new Masonry(cards, {
    itemSelector: '.marketplace-card',
    columnWidth: '.marketplace-card',
    gutter: 10,
    horizontalOrder: true,
    initLayout: false,
  });
  msnry.on('layoutComplete', function () {
    cards.classList.add('masonry-active');
  });
  msnry.layout();
  
  var tags = document.querySelectorAll('.btn__marketplace-tag');

  tags.forEach(function (toggleCards) {
    toggleCards.addEventListener('click', function () {
      msnry.destroy();
      cards.classList.remove('masonry-active');
    });
  });
}