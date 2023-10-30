const swiper = new Swiper('#swiper', {
  slidesPerView: 1,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});