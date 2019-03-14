//libs
import Inputmask from "../node_modules/inputmask/dist/inputmask/inputmask";
var im = new Inputmask("+7(999)999-99-99");
var phoneInput = document.querySelector('input[name=phone]');
if (phoneInput) {
  im.mask(phoneInput);
}
import '@fancyapps/fancybox'
// core
import './js/common';
import './scss/main.scss';
// js component
import './templates/components/slider/slider-bg';
import './templates/components/slider/slider-reviews-landing';
import './templates/components/slider/slider-partners';
//pages
var landing = require('./index.twig');
var loginMobile = require('./templates/pages/login-mobile.twig');
var regMobile = require('./templates/pages/registration-mobile.twig');
var regMobileSuccess = require('./templates/pages/registration-mobile-success.twig');