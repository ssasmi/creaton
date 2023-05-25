import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 7,
  spaceBetween: 20,
  loop: true,
  scrollbar: {
    el: '.swiper-slide',
    draggable: true,
  },
  navigation: {
    nextEl: '.swiper-btn--next',
    prevEl: '.swiper-btn--prev',
  },
});
