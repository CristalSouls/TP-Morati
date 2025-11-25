const x = document.querySelector("#demo");
const button = document.querySelector("#button");

function showPosition(position) {
  const crd = position.coords;
  x.innerHTML =
    "Latitude: " +
    crd.latitude +
    "<br>Longitude: " +
    crd.longitude +
    "<br>Présition: " +
    crd.accuracy;

  var map = L.map("map").setView([crd.latitude, crd.longitude], 16);
  var marker = L.marker([crd.latitude, crd.longitude])
    .addTo(map)
    .bindPopup("Vous êtes par la a peut près a " + Math.trunc(crd.accuracy) + " m de présition")
    .openPopup();
  var circle = L.circle([crd.latitude, crd.longitude], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: crd.accuracy,
  }).addTo(map);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
  }).addTo(map);
}

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
});
