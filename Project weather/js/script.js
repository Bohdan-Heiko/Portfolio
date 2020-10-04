// 1. Get DOM elements
var humidity = getElement('current-humidity'),
     pressure = getElement('current-pressure'),
     temperature = getElement('current-temperature'),
     windSpeed = getElement('current-wind-speed'),
     weatherSummary = getElement('weather-summary'),
     currentLocation = getElement('current-location'),
     getPosition = getElement('get-weather'),
     days = getElement('current-day'),
     weatherImg = getElement('current-wather-img');

var currentDay = new Date();
var thisDate = currentDay.getDate();
var thisDay = currentDay.getDay();

var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


var apiKey = '1d3b8e97896713130af1817f15ad99d9';  
var weatherData;


 
getPosition.addEventListener('click', getCurrentGeoPosition);
 

// helper function to get DOM elements
function getElement(id) {
 return document.getElementById(id);
}

function dayInWeek() {
    days.innerHTML = daysOfTheWeek[thisDay] + ', ' + thisDate + 'th';
}


// 2. Function to find current geo position
function getCurrentGeoPosition() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            fetchWeatherData(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert('Your browser does not support Geolocation API!');
    }
       
}

// 3. Function to make HTTP request to 3rd party client
function fetchWeatherData(lat, long) {
 fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=' + apiKey)
 
     .then(function (response) {
         return response.json();
     })
     .then(function (data) {
       weatherData = data;
       displayWeatherData();
     })
     .catch(function (err) {
         return err;
     })
}


// 4. Function to display data
function displayWeatherData() {
    if(weatherData.name && weatherData.sys.country) {
        currentLocation.innerHTML = weatherData.name + ', ' + weatherData.sys.country;
        // changeColor();
    }
    humidity.innerHTML      = 'Humidity:' + ' ' + weatherData.main.humidity + '%';
    pressure.innerHTML      =  'Pressure:' + ' ' + transformPressure() + ' mm Hg';
    temperature.innerHTML    = transformFromKelvinToCelsius() + '°'
    windSpeed.innerHTML      = 'Wind Speed:' + transformFromKnotsToMeters() + ' m/s';
    weatherSummary.innerHTML = weatherData.weather[0].main;
    
    var imgUrl = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@4x.png';
    weatherImg.innerHTML = '<img src=' + imgUrl + '>';
    words.value = "";
    
    getCurrentDataName(); 
}



// helpers to transform data
function transformFromKnotsToMeters() {
    return (weatherData.wind.speed * 1.852).toFixed(1);
}

function transformPressure() {
   return (weatherData.main.pressure * 0.75).toFixed();
}

function transformFromKelvinToCelsius() {
    return (weatherData.main.temp - 273.15).toFixed(); 
};

getCurrentGeoPosition();
dayInWeek();




