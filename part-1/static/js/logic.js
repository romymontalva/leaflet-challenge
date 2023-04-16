

let basmap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data: &copy; '
});

let map = L.map("map", {
    center: [ 40.7, -94.5],
    zoom: 3
})

bassmap.addTo(map);

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data);
    L.geojson(data).addTo(map);
    


})

