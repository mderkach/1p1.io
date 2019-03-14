import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

var sliderReviewsLanding_container = document.querySelector('.slider-reviews-landing__container');
if (sliderReviewsLanding_container) {
  var sliderReviewsLanding = new Swiper(sliderReviewsLanding_container, {
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
}