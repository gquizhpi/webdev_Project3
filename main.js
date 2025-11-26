// main.js
// Giovanni Quizhpi — Project 3

// ===== Question button event listener (all pages) =====
document.addEventListener("DOMContentLoaded", function () {
  const questionBtn = document.getElementById("question-btn");

  if (questionBtn) {
    questionBtn.addEventListener("click", function () {
      alert("If you have questions, contact me at:\n" +
            "giovanniquizhpi@gmail.com");
    });
  }
});

// ===== Google Maps init function (Maps page) =====
function initMap() {
  // Feature 1: custom center on IIT
  const iit = { lat: 41.8349, lng: -87.6270 };

  // Feature 2: extra markers
  const montrose = { lat: 41.9614, lng: -87.6498 };
  const downtown = { lat: 41.8781, lng: -87.6298 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: iit,
    zoom: 12,
    mapTypeId: "roadmap",
    // Feature 3: custom controls
    mapTypeControl: true,
    streetViewControl: true,
    zoomControl: true
  });

  const iitMarker = new google.maps.Marker({
    position: iit,
    map,
    title: "Illinois Institute of Technology"
  });

  const montroseMarker = new google.maps.Marker({
    position: montrose,
    map,
    title: "Montrose Beach"
  });

  const downtownMarker = new google.maps.Marker({
    position: downtown,
    map,
    title: "Downtown Chicago"
  });

  // Feature 4 (extra): info window for IIT
  const info = new google.maps.InfoWindow({
    content: "<strong>Illinois Institute of Technology</strong><br>Where I study."
  });

  iitMarker.addListener("click", () => {
    info.open(map, iitMarker);
  });
}
