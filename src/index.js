//libs
import Inputmask from "inputmask";
var phone = new Inputmask("+7(999)999-99-99");
var cardNumber = new Inputmask("9{4} 9{4} 9{4} 9{4}");
var cardValidity = new Inputmask({ regex: "[0-9]|1[0-2]/[0-9][0-9]",});


var phoneInput = document.querySelectorAll('input[type=tel]');
if (phoneInput.length != 0) {
  phoneInput.forEach(
    function(input){
      phone.mask(input);
    }
  );
}

var cardNumberInput = document.querySelector('input[name=card-number]');
if (cardNumberInput) {
  cardNumber.mask(cardNumberInput);
}

var cardValidityInput = document.querySelector('input[name=card-validity]');
if (cardValidityInput) {
  cardValidity.mask(cardValidityInput);
}

import autosize from 'autosize';
autosize(document.querySelectorAll('textarea'));

// core
import './js/common';
import './scss/main.scss';

// js component
import './templates/components/slider/slider-bg';
import './templates/components/slider/slider-reviews-landing';
import './templates/components/slider/slider-partners';
import './templates/components/dropdown/dropdown';
import './templates/components/tabs/tabs';
//import './templates/components/fineuploader/fineuploader'; moved to theme
import './templates/components/tooltip/tooltip';
import './templates/components/filter/filter';
import './templates/components/cards/cards-marketplace'
import './templates/components/lot/lot-bet-place'
import './templates/components/lot/lot-bet-details'
import './templates/components/slider/slider-lot-img'
import './templates/components/slider/slider-card-bookmarks'
//pages
// var landing = require('./index.twig');
// var loginMobile = require('./templates/pages/login-mobile.twig');
// var regMobile = require('./templates/pages/registration-mobile.twig');
// var regMobileSuccess = require('./templates/pages/registration-mobile-success.twig');
// var landingAuthorised = require('./templates/pages/index.html--authorised.twig');
// var landingCelebrities = require('./templates/pages/landing-celebrities.twig');
// var accountPublic = require('./templates/pages/account-public.twig');
// var accountPrivate = require('./templates/pages/account-private.twig');
// var accountPrivateColor = require('./templates/pages/account-private-color.twig');
// var accountPrivatePhoto = require('./templates/pages/account-private-photo.twig');
// var catalogue = require('./templates/pages/catalogue.twig');
// var sellItemMobile = require('./templates/pages/sell-item-mobile.twig');
// var sellItemMobileSucess = require('./templates/pages/sell-item-success-mobile.twig');