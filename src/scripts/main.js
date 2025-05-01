import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination'
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {

const swiper = new Swiper('.swiper-container', {
  modules: [Pagination],
  direction: 'horizontal',
  loop:true,
  pagination: {
    el: '.swiper-pagination',
  },

});
});
console.log('scropt loaded')
