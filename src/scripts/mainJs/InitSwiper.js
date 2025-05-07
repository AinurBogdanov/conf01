import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'

export function initSwiper() {
  document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Pagination, Autoplay],

    direction: 'horizontal',
    loop:true,
    touchRatio: 0.6,
    autoplay: {
      delay: 5000,
      disableOnInteraction:false,
    },
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">
          <svg width="25" height="25" viewbox="0 0 40 40">
            <circle class="white-circle" cx="20" cy="20" r="14" fill="none" stroke="
            rgb(2, 2, 2)" stroke-width="2"/>

            <circle class="progress-ring" cx="20" cy="20" r="12" fill="none" stroke="#EC9697" stroke-width="6" stroke-dasharray="101" stroke-dashoffset="100" />
          </svg>
        </span>
        `
      }
    },
  });
  });
}

export function initSecondSwiper() {
 const swiper = new Swiper('.swiper-container-main',{
  modules: [Pagination],
  loop: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination-fraction',
    type: 'fraction',
  }
 }) 
}