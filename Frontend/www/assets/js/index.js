const appKey = "87be80b3a9c0deea79109c12867a53db";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let cloudiness = document.getElementById("cloudiness");
let wind = document.getElementById("wind");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
    }
}

function findWeatherDetails() {
    if (searchInput.value === "") {

    }else {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
        httpRequestAsync(searchLink, theResponse);
    }
}
function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
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
}