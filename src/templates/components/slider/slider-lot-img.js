import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

var lotImgSlider = document.querySelector('.lot__img-main-slider-container');

if (lotImgSlider) {
  var lotImg = new Swiper(lotImgSlider, {
    wrapperClass: 'lot__img-main-slider-wrapper',
    slideClass: 'lot__img-main-wrapper',
    navigation: {
      nextEl: '.lot__img-button-next',
      prevEl: '.lot__img-button-prev',
      disabledClass: 'disabled'
    },
  });
}