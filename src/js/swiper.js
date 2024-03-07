import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperDirection = new Swiper('.swiper-direction', {
  slidesPerView: 3.6,
  centeredSlides: true,
  loopSlides: 3,
  spaceBetween: 40,
  autoplay: {
    delay: 4000,
  },
  speed: 400,

  breakpoints: {
    1024: {
      spaceBetween: 40,
      slidesPerView: 3.6,
    },
    677: {
      spaceBetween: 40,
      slidesPerView: 2.9,
    },
    432: {
      spaceBetween: 28,
      // slidesPerView: 3,
    },
    0: {
      spaceBetween: 18,
      slidesPerView: 1.9,
    }
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

});


const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});