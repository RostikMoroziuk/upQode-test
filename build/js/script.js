$(function () {
  function initMap() {
    var coords = {
      lat: 49.834050,
      lng: 24.008120
    };
    new google.maps.Map(document.querySelector(".js-map"), {
      zoom: 16,
      center: coords
    });
  }

  window.initMap = initMap;
});