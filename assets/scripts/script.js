var apiKey = "69b306c955b2b853b681d7ca8dfd46f3";
var cityName = document.querySelector("#cityInput");
var citySearchButton = document.querySelector("#citySearchButton");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var apiURL = "https://api.openweather.org/data/2.5/weather?q=" + cityName + ""
var



var getWeather = function (cityChoice) {
    fetch(apiURL)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayWeather(data, cityChoice);
                });
            else {
                alert("Error:  " + response.statusText)
            }
        .catch(function (error) {
                alert(" Unable to Connect to Weather Server");
            }
            )
        }
    }

}