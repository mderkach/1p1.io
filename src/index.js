//libs
import Inputmask from "inputmask";
var im = new Inputmask("+7(999)999-99-99");
im.mask(document.querySelector('input[name=phone]'));

import 'bootstrap.native'
// core
import './js/common'
import './scss/main.scss'
// js component
import './templates/components/slider/slider-bg'
import './templates/components/slider/slider-reviews-landing'
import './templates/components/slider/slider-partners'
//pages
var template = require('./index.twig')