    var c = function(pos) {
    var lat = pos.coords.latitude,
    logn = pos.coords.longitude,
        coords = lat + "," + long;
    document.getElementById('google_gmap').setAttribute('src', 'https://map.google.co.uk//?q='+ coords +'&z=60&output=embed');
}
    

document.getElementById('get_location').onclick = function() {
    
    navigator.geolocation.getCurrentPosition(c);
    return false;
}