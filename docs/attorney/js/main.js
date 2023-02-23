const navMobile = document.querySelector(".hamburger");
const navbar = document.querySelector(".navigation");
navMobile.addEventListener("click", () => {
  navMobile.classList.toggle("is-active");
  navbar.classList.toggle("is-overlay");
});