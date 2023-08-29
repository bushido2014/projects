const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});

// let resizeTimer;
// window.addEventListener("resize", () => {
//   document.body.classList.add("resize-animation-stopper");
//   clearTimeout(resizeTimer);
//   resizeTimer = setTimeout(() => {
//     document.body.classList.remove("resize-animation-stopper");
//   }, 400);
// });