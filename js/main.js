var map;
function initialize() {
  var mapOptions = {
    zoom: 9,
    enter: new google.maps.LatLng(34.708, -77.959),
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
    }
  };
  
  google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Load a GeoJSON from the same server as our demo.
  var jsonData = "data/ncVacationData.json";
  map.data.loadGeoJson(jsonData);
  
  // Set mouseover event for each feature.
  map.data.addListener('mouseover', function(event) {
    content = event.feature.getProperty('Name');
  });

  var infoWindow = new google.maps.InfoWindow({
    // content: content
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
