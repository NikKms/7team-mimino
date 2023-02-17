const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  parallax: true,
  spaceBetween: 30,
  // autoplay
  // autoplay: {
  // 	delay: 2000,
  // 	disableOnInteraction: false,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
