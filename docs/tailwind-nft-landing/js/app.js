const header = document.getElementById("header");


const sticky = header.offsetTop;


window.onscroll = function() {
 
  if (window.pageYOffset > sticky) {
    
    header.classList.add("scrolled");
  } else {
   
    header.classList.remove("scrolled");
  }
};

const testimoinal = new Swiper(".collection", {
  // Optional parameters
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 3300,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
