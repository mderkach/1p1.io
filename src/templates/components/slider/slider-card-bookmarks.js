import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

var sliderBookmarks = document.querySelectorAll('.card-bookmarks__slider-container');

if (sliderBookmarks) {
  sliderBookmarks.forEach(function(slider) {
    var cardBookmarksSLider = new Swiper(slider, {
      wrapperClass: 'card-bookmarks__slider-wrapper',
      slideClass: 'card-bookmarks-img',
      navigation: {
        nextEl: '.card-bookmarks__slider-button-next',
        prevEl: '.card-bookmarks__slider-button-prev',
        disabledClass: '--disabled'
      },
    });
  });
}