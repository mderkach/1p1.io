import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'

var mySwiper = new Swiper('.slider-bg__container', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    speed: 2000,
    disableOnInteraction: false,
  },
});