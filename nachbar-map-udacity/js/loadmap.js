var mapApiUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAGdCSIYAyehRihAmyF3J1pjyzluPHZ1LU&callback=initMap"
$.getScript(mapApiUrl)
  .fail(function () {
    window.alert("Map couldn't be loaded.");
    // console.log("map error");
  });
