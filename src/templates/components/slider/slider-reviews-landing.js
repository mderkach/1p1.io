import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

var sliderRviewLanding = new Swiper('.slider-reviews-landing__container', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    speed: 600,
    disableOnInteraction: true,
  },
  pagination: {
    el: '.review__dots',
    clickable: true,
    bulletClass: 'review-bullet',
    bulletActiveClass: 'review-bullet-active',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
});