const ws = new WebSocket('ws://localhost:3000')

 
ws.addEventListener('open',()=>{
  console.log('Connected to server')
})

var lat = 0.0
var long = 0.0
// default map layer
let map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [12.9337, 77.6921],
    zoom: 18,
    attributionControl: true
  });
  
  ws.addEventListener('message',(event)=>{
    const data = JSON.parse(event.data);
    lat=parseFloat(data.lat)
    long=parseFloat(data.long)
    console.log(lat)
    L.marker([lat,long]).addTo(map);
  })

  function runDirection(start, end) {
  
    map = L.map('map', {
      layers: MQ.mapLayer(),
      center: [12.9337, 77.6921],
      zoom: 18
    });    
  
    console.log("Yessssss")
    L.marker([lat, long]).addTo(map);

    var dir = MQ.routing.directions().on('success', function(data){

      if(data.route.shape){
        var distance = Math.round((data.route.distance * 1.609344)*10)/10;
        var time = Math.round((data.route.time/60)*10)/10;
        document.getElementById('dist').innerHTML = "Distance: " + distance + 'km';
        document.getElementById('time').innerHTML = "Time: " + time + "min";
      }
    });
  
    dir.route({
      maxRoutes: 2,
      timeOverage: 25,
      locations: [
        start,
        end
      ]
    });
  
    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
      createStartMarker: (location) => {
        var custom_icon;
        var marker;
  
        custom_icon = L.icon({
          iconUrl: 'images/red.png',
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29]
        });
  
        marker = L.marker(location.latLng, {
          icon: custom_icon
        }).addTo(map);
  
        return marker;
      },
  
      createEndMarker: (location) => {
        var custom_icon;
        var marker;
  
        custom_icon = L.icon({
          iconUrl: 'images/blue.png',
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29]
        });
  
        marker = L.marker(location.latLng, {
          icon: custom_icon
        }).addTo(map);
  
        return marker;
      }
    });
  
    map.addLayer(new CustomRouteLayer({
      directions: dir,
      
      ribbonOptions: {
        ribbonDisplay: { color: '#5882FA', opacity: 0.7 },
        widths: [ 10, 15, 10, 15, 10, 13, 10, 12, 10, 11, 10, 11, 10, 12, 10, 14, 10 ]
      },
  
      altRibbonOptions: {
        show: true,
        ribbonDisplay: { color: '#F78181', opacity: 0.7},
        hoverDisplay: { color: 'red', opacity: 0.6 }
      },
  
      fitBounds: true
    }));
  }
  
  
  // function for form submission
  function submitForm(event) {
    event.preventDefault();
  
    // delete current map layer
    map.remove();
  
    // getting form data
    start = document.getElementById("start").value;
    end = document.getElementById("destination").value;
  
    // run directions function
    runDirection(start, end);
  
    document.getElementById("start").value = "";
    document.getElementById("destination").value = "";
  }
  
  const form = document.getElementById('form');
  form.addEventListener('submit', submitForm);

