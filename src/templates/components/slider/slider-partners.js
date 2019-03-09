import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css'

var sliderPartners = new Swiper('.slider__partners-container', {
  slidesPerView: 8,
  loop: true,
  autoplay: {
    delay: 1800,
    speed: 800,
    disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4,
    }
  }
});