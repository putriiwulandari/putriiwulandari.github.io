var swiper = new Swiper('.client-review-slider', {
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testi-button-next",
    prevEl: ".testi-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});



// Doctor Swiper
var swiper = new Swiper('.client-review-slider-02', {
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testi-button-next-doctor",
    prevEl: ".testi-button-prev-doctor",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }
});

// Yoga Swiper
var swiper = new Swiper('.yoga-review-slider', {
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  }
});

// Yoga Follower Slider
var swiper = new Swiper('.followSwiper', {
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 5,
    },
    1025: {
      slidesPerView: 5,
    },
  }
});