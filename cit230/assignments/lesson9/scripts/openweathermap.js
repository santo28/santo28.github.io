var xmlHttpRequest = new XMLHttpRequest();

xmlHttpRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=55333&appid=bfd7f9a4e83c8736b4774cd387cbaa0a', true);
xmlHttpRequest.responseType = 'json';
xmlHttpRequest.send();

xmlHttpRequest.onload = function() {
    var weather = xmlHttpRequest.response;
    
    console.log(weather);
    
    document.getElementById("name").innerHTML = weather.name;
    document.getElementById("max_temp").innerHTML = weather.main.temp_max;
    document.getElementById("min_temp").innerHTML = weather.main.temp_min;
    document.getElementById("speed").innerHTML = weather.wind.speed;    
}