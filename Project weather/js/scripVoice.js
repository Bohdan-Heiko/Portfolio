window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

var getCity = getElement('get-city');
var words = document.querySelector('.words');
var cityName;

recognition.addEventListener('result', function(event) {
    cityName = Array.from(event.results)
    .map(function(result){
        return result[0];
    })
    .map(function(result){
        return result.transcript;
    })

    .join();

    fetchWeatherDataCity();
})

words.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        getWeatherAroundTown();
    }
});

getCity.addEventListener('click', startRecognition);

function getWeatherAroundTown(){
    cityName = words.value;
    fetchWeatherDataCity();
    newWeatherArray();
};

function startRecognition() {
    recognition.start();
}



function fetchWeatherDataCity() {
fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        weatherData = data;
        console.log(weatherData)
        displayWeatherData();
        
    })
    .catch(function (err) {
        return err;
    })
};
