var myLat = 42.39674;
var myLng = -71.121815;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var myOptions = {
  zoom: 13, // The larger the zoom number, the bigger the zoom
  center: me,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map;
var marker;
var infowindow = new google.maps.InfoWindow();
var places;

var Stations = [
  {
    "Line":"Blue",
    "Station":"Airport",
    "Lat":42.374262,
    "Long":-71.030395
  },
  {
    "Line":"Blue",
    "Station":"Aquarium",
    "Lat":42.359784,
    "Long":-71.051652
  },
  {
    "Line":"Blue",
    "Station":"Beachmont",
    "Lat":42.39754234,
    "Long":-70.99231944
  },
  {
    "Line":"Blue",
    "Station":"Bowdoin",
    "Lat":42.361365,
    "Long":-71.062037
  },
  {
    "Line":"Blue",
    "Station":"Government Center",
    "Lat":42.359705,
    "Long":-71.05921499999999
  },
  {
    "Line":"Blue",
    "Station":"Maverick",
    "Lat":42.36911856,
    "Long":-71.03952958000001
  },
  {
    "Line":"Blue",
    "Station":"Orient Heights",
    "Lat":42.386867,
    "Long":-71.00473599999999
  },
  {
    "Line":"Blue",
    "Station":"Revere Beach",
    "Lat":42.40784254,
    "Long":-70.99253321
  },
  {
    "Line":"Blue",
    "Station":"State Street",
    "Lat":42.358978,
    "Long":-71.057598
  },
  {
    "Line":"Blue",
    "Station":"Suffolk Downs",
    "Lat":42.39050067,
    "Long":-70.99712259
  },
  {
    "Line":"Blue",
    "Station":"Wonderland",
    "Lat":42.41342,
    "Long":-70.991648
  },
  {
    "Line":"Blue",
    "Station":"Wood Island",
    "Lat":42.3796403,
    "Long":-71.02286539000001
  },
  {
    "Line":"Orange",
    "Station":"Back Bay",
    "Lat":42.34735,
    "Long":-71.075727
  },
  {
    "Line":"Orange",
    "Station":"Chinatown",
    "Lat":42.352547,
    "Long":-71.062752
  },
  {
    "Line":"Orange",
    "Station":"Community College",
    "Lat":42.373622,
    "Long":-71.06953300000001
  },
  {
    "Line":"Orange",
    "Station":"Downtown Crossing",
    "Lat":42.355518,
    "Long":-71.060225
  },
  {
    "Line":"Orange",
    "Station":"Forest Hills",
    "Lat":42.300523,
    "Long":-71.113686
  },
  {
    "Line":"Orange",
    "Station":"Green Street",
    "Lat":42.310525,
    "Long":-71.10741400000001
  },
  {
    "Line":"Orange",
    "Station":"Haymarket",
    "Lat":42.363021,
    "Long":-71.05829
  },
  {
    "Line":"Orange",
    "Station":"Jackson Square",
    "Lat":42.323132,
    "Long":-71.099592
  },
  {
    "Line":"Orange",
    "Station":"Malden Center",
    "Lat":42.426632,
    "Long":-71.07411
  },
  {
    "Line":"Orange",
    "Station":"Mass Ave",
    "Lat":42.341512,
    "Long":-71.083423
  },
  {
    "Line":"Orange",
    "Station":"North Station",
    "Lat":42.365577,
    "Long":-71.06129
  },
  {
    "Line":"Orange",
    "Station":"Oak Grove",
    "Lat":42.43668,
    "Long":-71.07109699999999
  },
  {
    "Line":"Orange",
    "Station":"Roxbury Crossing",
    "Lat":42.331397,
    "Long":-71.095451
  },
  {
    "Line":"Orange",
    "Station":"Ruggles",
    "Lat":42.336377,
    "Long":-71.088961
  },
  {
    "Line":"Orange",
    "Station":"State Street",
    "Lat":42.358978,
    "Long":-71.057598
  },
  {
    "Line":"Orange",
    "Station":"Stony Brook",
    "Lat":42.317062,
    "Long":-71.104248
  },
  {
    "Line":"Orange",
    "Station":"Sullivan",
    "Lat":42.383975,
    "Long":-71.076994
  },
  {
    "Line":"Orange",
    "Station":"Tufts Medical",
    "Lat":42.349662,
    "Long":-71.063917
  },
  {
    "Line":"Orange",
    "Station":"Wellington",
    "Lat":42.40237,
    "Long":-71.077082
  },
  {
    "Line":"Red",
    "Station":"Alewife",
    "Lat":42.395428,
    "Long":-71.142483
  },
  {
    "Line":"Red",
    "Station":"Andrew",
    "Lat":42.330154,
    "Long":-71.057655
  },
  {
    "Line":"Red",
    "Station":"Ashmont",
    "Lat":42.284652,
    "Long":-71.06448899999999
  },
  {
    "Line":"Red",
    "Station":"Braintree",
    "Lat":42.2078543,
    "Long":-71.0011385
  },
  {
    "Line":"Red",
    "Station":"Broadway",
    "Lat":42.342622,
    "Long":-71.056967
  },
  {
    "Line":"Red",
    "Station":"Central Square",
    "Lat":42.365486,
    "Long":-71.103802
  },
  {
    "Line":"Red",
    "Station":"Charles/MGH",
    "Lat":42.361166,
    "Long":-71.070628
  },
  {
    "Line":"Red",
    "Station":"Davis",
    "Lat":42.39674,
    "Long":-71.121815
  },
  {
    "Line":"Red",
    "Station":"Downtown Crossing",
    "Lat":42.355518,
    "Long":-71.060225
  },
  {
    "Line":"Red",
    "Station":"Fields Corner",
    "Lat":42.300093,
    "Long":-71.061667
  },
  {
    "Line":"Red",
    "Station":"Harvard Square",
    "Lat":42.373362,
    "Long":-71.118956
  },
  {
    "Line":"Red",
    "Station":"JFK/UMass",
    "Lat":42.320685,
    "Long":-71.052391
  },
  {
    "Line":"Red",
    "Station":"Kendall/MIT",
    "Lat":42.36249079,
    "Long":-71.08617653
  },
  {
    "Line":"Red",
    "Station":"North Quincy",
    "Lat":42.275275,
    "Long":-71.029583
  },
  {
    "Line":"Red",
    "Station":"Park Street",
    "Lat":42.35639457,
    "Long":-71.0624242
  },
  {
    "Line":"Red",
    "Station":"Porter Square",
    "Lat":42.3884,
    "Long":-71.11914899999999
  },
  {
    "Line":"Red",
    "Station":"Quincy Adams",
    "Lat":42.233391,
    "Long":-71.007153
  },
  {
    "Line":"Red",
    "Station":"Quincy Center",
    "Lat":42.251809,
    "Long":-71.005409
  },
  {
    "Line":"Red",
    "Station":"Savin Hill",
    "Lat":42.31129,
    "Long":-71.053331
  },
  {
    "Line":"Red",
    "Station":"Shawmut",
    "Lat":42.29312583,
    "Long":-71.06573796000001
  },
  {
    "Line":"Red",
    "Station":"South Station",
    "Lat":42.352271,
    "Long":-71.05524200000001
  },
  {
    "Line":"Red",
    "Station":"Wollaston",
    "Lat":42.2665139,
    "Long":-71.0203369
  }
];

function init()
{
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  getMyLocation();

  xhr = new XMLHttpRequest();
  xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
  xhr.onreadystatechange = dataReady;
  xhr.send(null);
}

function dataReady() 
{
  if (xhr.readyState == 4 && xhr.status == 200) {
    schedData = JSON.parse(xhr.responseText);
    alert(schedData.Line);
    createMarker();
    //Station = xhr.responseText("Station");
    //Lat = xhr.responseText("Lat");
    //Long = xhr.responseText("Long");
  }
  else if (xhr.readyState == 4 && xhr.status == 500) {
    alert("Something went wrong!");
    //internal error
  }
}

function getMyLocation()
  {
    if (navigator.geolocation) 
    { // the navigator.geolocation object is supported on your browser
      navigator.geolocation.getCurrentPosition(function(position) {
          myLat = position.coords.latitude;
          myLng = position.coords.longitude;
         renderMap();
      });
    }
    else {
      alert("Geolocation is not supported by your web browser.  What a shame!");
    }
  }

function myDistance(lat1,lon1){
  return function(lat2,lon2){
    var R = 3959;

    var x1 = lat1-lat2;
    var dLat = toRad(x1);  
    var x2 = lon1-lon2; 
    var dLon = toRad(x2); 
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2);  
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; 
    return d;
  };
}

function renderMap()
{
  me = new google.maps.LatLng(myLat, myLng);
        
  // Update map and go there...
  map.panTo(me);
  
  // Create a marker
  marker = new google.maps.Marker({
    position: me,
    title: "Here I Am!"
  });
  marker.setMap(map);
          
// Open info window on click of marker
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(marker.title);
    infowindow.open(map, marker);
  });
    
// Calling Google Places API
//  var request = {
//    location: me,
//    radius: '500',
//    types: ['food']
//  };
        
//  service = new google.maps.places.PlacesService(map);
// service.search(request, callback);
}
      
// Taken from http://code.google.com/apis/maps/documentation/javascript/places.html
function callback(results, status)
{
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    alert("Got places back!");
    places = results;
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}
      
function createMarker() 
{
  Stations.forEach(function(Station) 
  {
    var image = 'purplemarker.png';
        image.style.height = "59px";
        image.style.width = "37px";
    var coordinates = new Array();
    if(Stations.Line == Line) 
    {
          var placeLoc = new google.maps.LatLng(schedData.Lat, schedData.Long);
          var marker = new google.maps.Marker({
            map: map,
            title: Station,
            icon: image,
            position: placeLoc
          });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.close();
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      }); 
    }
  });
}
