var apiKey = "69b306c955b2b853b681d7ca8dfd46f3";
//var cityName = document.querySelector("#cityInput");
var citySearchButton = document.querySelector("#citySearchButton"); 
var cityList = document.querySelector("#previousCities");
var cityArray = JSON.parse(localStorage.getItem("history")) || []
var weatherContainer = document.querySelector("#weather-container");
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "appid=" + apiKey
var citySearchReturn = document.querySelector("#citySearchReturn");
var dayOne = document.querySelector("#dayOne");
var dayTwo = document.querySelector("#dayTwo");
var dayThree = document.querySelector("#dayThree");
var dayFour = document.querySelector("#dayFour");
var dayFive = document.querySelector("#dayFive");

function returnCities() {
    localStorage.getItem(savedCity, cityName)
    if (null){
        return;
    }
};

var getWeather = function (event) {
  //event.preventDefault();
  var searchedCity = document.querySelector("#citySearchInput");
  var city = searchedCity.value;
    dailyWeather(city);
  };

//localStorage.setItem(savedCity, cityName)

var displayWeather = function (weather, cityWeather) {
    if (fData.length === 0) {
        citySearchReturn.textContent = "No Weather Data Available";
        return;
    }
    cityName.textContent = city;    

    for (var i = 0; i < fData.daily.length-3; i++ ) {
        var weatherDay = weather[i].data
        var forcastDay = document.createElement("div");
        forcastDay.classList = "list-item flex-row align-center justify-space-between weather-channel";
        forcastDay.textContent = weatherDay;
        weatherContainer.append(forcastDay);
        citySearchReturn.innerText = cityName;
        var oneTemp = document.createElement("p");
        oneTemp.textContent = fData.daily[0].feels_like.day; 
        dayOne.append(oneTemp);


    }
}

function dailyWeather(city){
  if (cityArray.indexOf(city)===-1){
    cityArray.push(city);
    renderCities();
  }
  var apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=" + apiKey
  
    fetch(apiURL)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            console.log(data.name);
            console.log(data.weather[0]);
            console.log(data.main.feels_like);
            // displayWeather(data, cityName);
            // console.log(data);
            var cityLon = data.coord.lon;
            var cityLat = data.coord.lat;
            console.log(cityLon);
            console.log(cityLat);
           // .then(function ())
           var weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + cityLat + "&lon=" + cityLon + "&exclude=hourly,&appid=" + apiKey;
          fetch(weatherAPI)
            .then(function (response) {
              if (response.ok)  {
                response.json().then(function (fData) {
                  console.log(fData);
                  console.log(fData.daily);
                  console.log(fData.daily[0]);
                  console.log(fData.daily[0].feels_like);
                  console.log(fData.daily[0].feels_like.day);
                  
                })
              }
            })
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Weather');
      });
displayWeather();return fData;
}

function renderCities() {
  var citySearch = JSON.stringify(cityArray);
  localStorage.setItem("history", citySearch);
  cityList.innerHTML = "";
  for (var i = 0; i < cityArray.length; i++) {
  var previousCities = document.createElement("li");
  previousCities.classList = "list-item"
  previousCities.textContent = cityArray[i];
  previousCities.addEventListener("click", function(event){
    var city = event.target.innerText;
    dailyWeather(city);
  })
  cityList.append(previousCities);
  }


}
// var namedCity = data.name;
// var cityWeather = data.main



citySearchButton.addEventListener("click", getWeather)


//var savedCities = document.createElement("button");


renderCities();