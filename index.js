const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const https = require("https")
const net = require('net');
const WebSocket = require("ws")
const wss = new WebSocket.Server({port:3000})

const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({
    extended: true
}));

var from = "";
var to = "";
var temp = "";
var weather = "";
var lat = 0
var long = 0

//////////////////////////////////////////////////////////HOME//////////////////////////////////////////////////
app.get("/", function(req,res){
    
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&appid=119b4277356c60c983401662e8a384e5&units=metric"
    https.get(url, (res)=>{
        res.on("data", (data)=>{
            const weatherData = JSON.parse(data)
            temp = weatherData.main.temp
            weather = weatherData.weather[0].description
        })
    })
    res.render("Dashboard",{
        temp: temp,
        weather: weather
    });
})

app.post("/map", function(req, res){
    from = req.body.from;
    to = req.body.to;
    console.log(from, to);

    if(from === to){
        res.redirect("/");
    }else{
        res.redirect("/map");
    }
})

///////////////////////////////////////////////////////Navigation/////////////////////////////////////////////////////

app.get("/map", function(req, res){
    res.render("map",{
        st: from,
        dest: to,
        lat: lat,
        long: long
    });
})
////////////////////////////////////////////////////Flood Prone Areas//////////////////////////////////////////////////////////

app.get("/floodProneAreas", (req, res)=>{
    res.render("floodProneAreas")
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const server = net.createServer((socket) => {
    console.log('Connected to Raspberry Pi');
    
    // Listen for data from Raspberry Pi
    socket.on('error', (err) => {
        console.log('caught error');
});
    
    socket.on('data', (data) => {
            console.log('Received data from Raspberry Pi:', data.toString());
            var d1= data.toString()
            var d1split = d1.split(",")
            lat = d1split[0]
            long = d1split[1]
            console.log(lat,long)
            const coords = {
                lat:lat,
                long:long
            };
            wss.on('connection', (ws)=>{
                console.log("Client connected")
                ws.send(JSON.stringify(coords))
                ws.on('message', (message)=>{
                    console.log("Received message: ${message}")
                })
            })
    });
  
    // Send response to Raspberry Pi if needed
    socket.write('Data received');
  });




  server.listen(PORT, () => {
    console.log('Server listening on port', PORT);
  });


////////////////////////////////////////////////////////SERVER/////////////////////////////////////////
app.listen(9000, function(){
    console.log("Server running on port 9000.")
});


