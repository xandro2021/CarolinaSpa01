window.swiper = new Swiper({
  el: '.slider__contenedor',
  slideClass: 'slider__slide',
  createElements: true,
  autoplay: {
    delay: 5000
  },
  loop: true,
  // spaceBetween: 20, // to give space between images
  pagination: true, // they are the dots at the bottom
  navigation: true, // they are the arrows to change the image manually
});
