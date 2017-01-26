var marker = [];
var red_dot_url = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
var green_dot_url = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
var ParkNames = [['DisneyLand',33.8153,-117.926], ['Knott\'s Berry Farm',33.842783,-117.998362], 
                ['Six Flags Magic Mountain',34.420402,-118.589902], ['Seaworld',32.764104,-117.226260]];
var ParkElements = [['Disney','DisneyPics'], ['Knotts','KnottsPics'], ['SixFlags','SixFlagsPics'], ['SeaWorld','SeaWorldPics']];


function HideAllImages() {
  for(var i = 0; i < 4; i++)
    document.getElementById(ParkElements[i][1]).style.display = 'none';
}

function initMap() {
  HideAllImages();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 33.8, lng: -117.64}
  });
  for(var i = 0; i < 4; i++) {
    marker[i] = new google.maps.Marker({
        position: {lat: ParkNames[i][1], lng: ParkNames[i][2]},
        map: map,
        icon: red_dot_url,
        title: ParkNames[i][0]
    });
    google.maps.event.addListener(marker[i], 'click', (function(marker, i) {
        return function() {
          HideAllImages();
          document.getElementById('start').style.visibility = 'hidden';
          document.getElementById(ParkElements[i][1]).style.display = "block";
          showDivs(slideIndex, ParkElements[i][0]);
          map.setZoom(12);
          map.setCenter(marker.getPosition());
          SetMarkerGreen(marker);
        };
      })(marker[i], i));
  }
}

function SetMarkerGreen(Marker) {
  for(var i = 0; i < marker.length; i++) 
    marker[i].setIcon(red_dot_url);
  Marker.setIcon(green_dot_url);
}
