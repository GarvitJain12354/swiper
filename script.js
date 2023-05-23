var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    speed: 600,
    spaceBetween: 30,

    breakpoints: {
      1024: {
        slidesPerView: "5",
      },
    },


    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 2,
    },

  });
