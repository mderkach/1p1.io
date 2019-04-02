var Masonry = require('masonry-layout');

var cards = document.querySelector('.marketplace-card-wrapper');
if (cards) {
  var msnry = new Masonry(cards, {
    itemSelector: '.marketplace-card',
    columnWidth: '.marketplace-card',
    gutter:'.marketplace-card-gutter',
    horizontalOrder: true,
    initLayout: false, //не инициализируем
  });
  msnry.on('layoutComplete', function () {
    cards.classList.add('masonry-active'); //по окончании инициализации разметки masonry, добавляем обертке класс, чтобы не было видно рывков
  });
  msnry.layout(); //инициализируем masonry
}

var tags = document.querySelectorAll('.btn__marketplace-tag');
if (tags) {
  tags.forEach(function (toggleCards) { // при клике на кнопку тега уничтожаем текущую разметку masonry, вызывать новую разметку по окончании загрузки контента
    toggleCards.addEventListener('click', function () {
      msnry.destroy();
      cards.classList.remove('masonry-active');
    });
  });
}