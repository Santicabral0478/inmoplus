/*=============== swiper JS IMAGENES-DESLIZABLE ===============*/
let swiperCards = new swiper(".imagenes-deslizable-cards", {
  loop: true,
  loopedSlides: 5,
  cssMode: true,
  effect: 'fade',
});
  
let swiperThumbs = new swiper(".imagenes-deslizable-thumbs", {
  loop: true,
  loopedSlides: 5,
  slidesPerView: 3,
  centeredSlides: true,
  slideToClickedSlide: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbs.controller.control = swiperCards;