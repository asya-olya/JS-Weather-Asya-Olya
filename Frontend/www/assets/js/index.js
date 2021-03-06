// var City_Navbar = require("./City_Navbar");

const appKey = "87be80b3a9c0deea79109c12867a53db";


let searchButton = document.getElementById("search-btn");
let plusButton = document.getElementById("plus-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let city = document.getElementById("city");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let cloudiness = document.getElementById("cloudiness");
let wind = document.getElementById("wind");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let loc = document.getElementById("my-loc");
let numberOfCity=0;

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keydown", enterPressed);
loc.addEventListener("click", findMyDetails);
plusButton.addEventListener("click",addCity);

var lat;
var lon;
var cityN=[];
var place="";

function initialize() {
    var input = document.getElementById('search-txt');
    var options = {
        types: ['(cities)'],
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', function(){
        place = autocomplete.getPlace();
        cityN[0] = place.name + ", "+place.address_components[2].long_name +", "+ place.address_components[3].long_name;
        // cityN = place.name;
        cityN[1]=place.geometry.location.lat();
        cityN[2]=place.geometry.location.lng();
        lat = place.geometry.location.lat();
        lon = place.geometry.location.lng();
    });
}
google.maps.event.addDomListener(window, 'load', initialize);

function addCity(){
    if (searchInput.value === ""){
       alert("Type city!");
    }else{
        if(numberOfCity===10){
            alert("Delete 1 city!");
            return;
        }
        $("#city-template").each(function(i,elem){
               if($(elem).find('.nav-link').text()===cityN[0]){
                   alert("Look! City is already in menu!")
                   return;
               }
        })
        const CITY_TEMPLATE = $('#city-template');
        var $clone = CITY_TEMPLATE.clone();
        $clone.find('.nav-link').text(cityN[0]);
        $clone.find(".latitude").text(cityN[1]);
        $clone.find(".longitude").text(cityN[2]);
        $clone.find('.remove').click(function(){
            $clone.slideUp("400");
            numberOfCity--;
        })
        $clone.find('.nav-link').click(function(){
            // searchInput.value=$clone.find('.nav-link').text();
            lat=$clone.find('.latitude').text();
            lon=$clone.find('.longitude').text();
             findWeatherDetails();
        })
        $clone.show();
        $clone.find('.latitude').hide();
        $clone.find('.longitude').hide();
        $('.navbar-nav').append($clone);
        numberOfCity++;
    }
}

function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}
var lat1;
var lon1;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat1=position.coords.latitude;
        lon1=position.coords.longitude;
        $("#city-name").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    });
}

function findMyDetails(){
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?lat="+lat1+"&lon="+lon1+"&appid="+appKey;
    httpRequestAsync(searchLink, theResponse);
}

function findWeatherDetails() {
    if (searchInput.value === "") {
        alert("Type city!");
    }else {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+appKey;
        httpRequestAsync(searchLink, theResponse);
    }
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    city.innerHTML = jsonObject.name;

    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°C";
    pressure.innerHTML = "<span>Pressure: </span>"+parseInt(jsonObject.main.pressure*0.75006375541921) + " mmhg";
    humidity.innerHTML = "<span>Humidity: </span>"+jsonObject.main.humidity + "%";
    wind.innerHTML = "<span>Wind: </span>"+ jsonObject.wind.speed + " meter/sec";
    var date = new Date(jsonObject.sys.sunrise*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    sunrise.innerHTML = "<span>Sunrise: </span>"+ formattedTime;
    date = new Date(jsonObject.sys.sunset*1000);
    hours = date.getHours();
    minutes = "0" + date.getMinutes();
    seconds = "0" + date.getSeconds();
    formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    sunset.innerHTML = "<span>Sunset: </span>"+ formattedTime;
    cloudiness.innerHTML = "<span>Cloudiness: </span>"+jsonObject.clouds.all + "%";
}

function httpRequestAsync(url, callback)
{
    console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
    db.checkType('shirt', temperature, cloudiness, wind);
}
