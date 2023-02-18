const testimoinal = new Swiper(".testimonial-slide", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next"
  }
});

/*--accordion--*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/*--end accordion--*/

const navMobile = document.querySelector(".nav-mobile");
const navbar = document.querySelector(".nav");
navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("mb-active");
  navbar.classList.toggle("mb-overlay");
});
