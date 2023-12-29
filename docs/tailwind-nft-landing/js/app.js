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
  slidesPerView: 2,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next"
  }
});
