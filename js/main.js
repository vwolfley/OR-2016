var map;
function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.708, -77.959)
  };
  google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Load a GeoJSON from the same server as our demo.
  map.data.loadGeoJson('data/ncVacationData.json');

}

google.maps.event.addDomListener(window, 'load', initialize);