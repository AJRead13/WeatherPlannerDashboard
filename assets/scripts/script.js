var apiKey = "69b306c955b2b853b681d7ca8dfd46f3";
var cityName = document.querySelector("#cityInput");
var citySearchButton = document.querySelector("#citySearchButton");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//var apiURL = "https://api.openweather.org/data/2.5/weather?q=" + cityName + "appid=" + apiKey
var citySearchReturn = document.querySelector("#citySearchReturn");



function returnCities() {
    localStorage.getItem(savedCity, cityName)
    if (null){
        return;
    }
};

var getWeather = function (cityName) {
    var apiURL = "https://api.openweather.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
  
    fetch(apiURL)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayWeather(data, cityName);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Weather');
      });
  };

//localStorage.setItem(savedCity, cityName)

var showForcast = function (weather, cityWeather) {
    if (weather.length === 0) {
        citySearchReturn.textContent = "No Weather Data Available";
        return;
    }
    cityName.textContent = city;    

    for (var i = 0; i < weather.length; i++ ) {
        var weatherDay = weather[i].data
        var forcastDay = document.createElement("div");
        forcastDay.classList = "";
        forcastDay.setAttribute("id", );

    }
}


citySearchButton.addEventListener("submit", getWeather())


//var savedCities = document.createElement("button");


