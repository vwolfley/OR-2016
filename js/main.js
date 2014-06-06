var map;
function initialize() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(34.399, -77.755),
    scaleControl: true,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    panControl: false,
    streetViewControl: true,
    streetViewControlOptions: {
    	position: google.maps.ControlPosition.RIGHT_TOP
    }
  };
  
  google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Load a GeoJSON from the same server as our demo.
  var jsonData = "data/ncVacationData.json";
  map.data.loadGeoJson(jsonData);
  
  // Add some style
  map.data.setStyle(function(feature) {
  	return({
  		fillColor: feature.getProperty("color")
  	});
  });
  
  var infoWindow = new google.maps.InfoWindow({
    pixelOffset: new google.maps.Size(0,-25),
  });
  
  // Set mouseover event for each feature.
  map.data.addListener('click', function(event) {
    fam = event.feature.getProperty("Family");
    name = event.feature.getProperty("Name");
    address = event.feature.getProperty("Address");
    city = event.feature.getProperty("City");
    phone = event.feature.getProperty("Phone");
    web = event.feature.getProperty("Website");
    
    content = "<strong>" + name + "</strong>" + "</br>" + address + "</br>" + city + "</br>" + phone + "</br>" + "<a href='" + web + "'>Website</a>";
    
    infoWindow.setContent(content);

    var anchor = new google.maps.MVCObject();
	anchor.set("position",event.latLng);
	infoWindow.open(map,anchor);
  });

  

}
// Load google map
google.maps.event.addDomListener(window, 'load', initialize);
// resize google map on screen change
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});
