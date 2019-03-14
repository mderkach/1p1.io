import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'

var slider_bg_container = document.querySelector('.slider-bg__container');
if (slider_bg_container) {
  var slider_bg = new Swiper(slider_bg_container, {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      speed: 2000,
      disableOnInteraction: false,
    },
  });
}