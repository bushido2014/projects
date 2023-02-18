const videoBtn = document.querySelector("#video-link");
const videoPicture = document.querySelector(".video-picture");
const videoWrapp = document.querySelector(".videoreel-video");
const video = document.querySelector("#video-file");

videoWrapp.addEventListener("click", () => {
  if (video.paused) {
    videoPicture.classList.add("none");
    videoBtn.classList.add("none");
    video.play();
  } else {
    videoPicture.classList.remove("none");
    videoBtn.classList.remove("none");
    video.pause();
  }
});

/* End Video */

var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoidnNvbHRhbiIsImEiOiJjajY2YnF2NW0xMmN0Mndxb3hxMzFnMHd1In0.IJPgIi9H2vtCQssF10zqGQ"
  }
).addTo(map);
