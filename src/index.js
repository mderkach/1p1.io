//libs
import Inputmask from "../node_modules/inputmask/dist/inputmask/inputmask";
var im = new Inputmask("+7(999)999-99-99");
var phoneInput = document.querySelector('input[name=phone]');
if (phoneInput) {
  im.mask(phoneInput);
}
// core
import './js/common';
import './scss/main.scss';
// js component
import './templates/components/slider/slider-bg';
import './templates/components/slider/slider-reviews-landing';
import './templates/components/slider/slider-partners';
import './templates/components/tabs/tabs';
//pages
var landing = require('./index.twig');
var loginMobile = require('./templates/pages/login-mobile.twig');
var regMobile = require('./templates/pages/registration-mobile.twig');
var regMobileSuccess = require('./templates/pages/registration-mobile-success.twig');
var landingAuthorised = require('./templates/pages/index.html--authorised.twig');
var landingCelebrities = require('./templates/pages/landing-celebrities.twig');
var accountPublic = require('./templates/pages/account-public.twig');
var accountPrivate = require('./templates/pages/account-private.twig');
var accountPrivateColor = require('./templates/pages/account-private-color.twig');