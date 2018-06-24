var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var cities = request.response;
    showCities(cities);
}


function showCities(jsonObj) {
    var cities = jsonObj['towns'];
    for (var i = 0; i < cities.length; i++) {
        if (cities[i].name != "Placerton") {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');


            myH2.textContent = cities[i].name;
            myPara1.textContent = 'Motto: ' + cities[i].motto;
            myPara2.textContent = 'Year Founded: ' + cities[i].yearFounded;
            myPara3.textContent = 'Current Population:' + cities[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall:' + cities[i].averageRainfall;

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            section.appendChild(myArticle);
        }

    }
}
