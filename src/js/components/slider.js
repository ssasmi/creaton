import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.main__content', {
  slidesPerView: 3,
  spaceBetween: 20,
  scrollbar: {
    el: '.main__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.main__slider-btn--next',
    prevEl: '.main__slider-btn--prev',
  },
});
