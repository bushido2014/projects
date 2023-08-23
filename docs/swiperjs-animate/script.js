const swiperQuiz = new Swiper(".animeslide", {
    // Optional parameters
    effect: "fade",
    loop: true,
    speed: 900,
    centeredSlides: true,
    pagination: {
      el: ".animeslide-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        let indT = total >= 5 ? total : `${total}`;
        let indC = current >= 5 ? current : `${current}`;
        return `<b>${indC}</b><span>/</span>${indT}`;
      }
    },
    navigation: {
      nextEl: ".animeslide-button-next",
      prevEl: ".animeslide-button-prev"
    },
    scrollbar: {
      el: ".animeslide-scrollbar",
      draggable: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    runCallbacksOnInit: true
  });