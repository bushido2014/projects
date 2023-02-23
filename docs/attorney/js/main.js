const navMobile = document.querySelector(".nav-mobile");
const navbar = document.querySelector(".navigation");
navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("mb-active");
  navbar.classList.toggle("mb-overlay");
});