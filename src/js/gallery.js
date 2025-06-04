import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    loop: false,
    slidesPerView: 1.6,
    spaceBetween: 32,
    grabCursor: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: false,
      eventsTarget: 'container',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3.3,
        spaceBetween: 24,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      },
    },
  });
});
