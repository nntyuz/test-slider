const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 5,
  breakpoints: {
    600: {
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});
