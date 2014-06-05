var map;
function initialize() {
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(34.708, -77.959),
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL
    }
  };
  
  google.maps.visualRefresh=true;
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Load a GeoJSON from the same server as our demo.
  var jsonData = "data/ncVacationData.json";
  map.data.loadGeoJson(jsonData);
  
  var infoWindow = new google.maps.InfoWindow();
  
  // Set mouseover event for each feature.
  map.data.addListener('click', function(event) {
    name = event.feature.getProperty("Name");
    fam = event.feature.getProperty("Family");
    name = event.feature.getProperty("Name");
    address = event.feature.getProperty("Address");
    city = event.feature.getProperty("City");
    phone = event.feature.getProperty("Phone");
    web = event.feature.getProperty("Website");
    
    content = fam + "</br>" + name + "</br>" + address + "</br>" + city + "</br>" + phone + "</br>" + web;
    console.log(content);
    
    var anchor = new google.maps.MVCObject();
	anchor.set("position",event.latLng);
	infoWindow.open(map,anchor);
  });

  

}

google.maps.event.addDomListener(window, 'load', initialize);
