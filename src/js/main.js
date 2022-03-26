const mainSwiper = new Swiper('.main-swiper', {
  loop: true,
  effect: 'fade',
  pagination: {
    el: '.main-slider-pagination',
  }
});

const materialsSwiper = new Swiper('.materials-swiper', {
  loop: true,
  slidesPerView: 4,
  pagination: {
    el: '.materials-slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.materials-slider-next',
    prevEl: '.materials-slider-prev',
  },
});