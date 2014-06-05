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
  
  // listen for click events
  map.data.addListener("click", function(event) {
    // show an infowindow on click
    infoWindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;">' event.feature.getName() "<br>" + event.feature.getAddress() + "</div>");

    var anchor = new google.maps.MVCObject();
        anchor.set("position",event.latLng);
        infoWindow.open(map,anchor);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
