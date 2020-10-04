var FiveDaysData = getElement('weather_for_next_days');

var newApi = '3b9fda37f8b846bb32e13f8f05c65ac8';
var newWetherData;

// new request to get data by city name
function newFetchWeatherData(name) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=' + newApi + '&units=metric' )
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        newWetherData = data;
    console.log(newWetherData);
    // displayDataForFiveDays();
    
    newWeatherArray(newWetherData);
    })
    .catch(function (err) {
        return err;
    })
}

function getCurrentDataName(){
    if(navigator.geolocation) {
        var newName = weatherData.name;
        newFetchWeatherData(newName);
        // newWeatherArray();
    }
}


function newWeatherArray(myWetherData) {
    if(myWetherData){
        var wetherForNextDayData = new Array();
        var dateArr = new Array();
        var currDay = new Date(myWetherData.list[0].dt*1000).getDate();
        var nextDay;
        var conterDays = 0;
        
        dateArr[0] = new Date(myWetherData.list[0].dt*1000); //.toISOString();
        wetherForNextDayData[conterDays] = new Array();

        for (var i = 0; i < myWetherData.list.length; i++ ) {
            nextDay = new Date(myWetherData.list[i].dt*1000).getDate();
            if (nextDay == currDay) {      
                wetherForNextDayData[conterDays].push(myWetherData.list[i].main.temp);
            } else {
                conterDays = conterDays + 1;
                wetherForNextDayData[conterDays] = new Array();
                wetherForNextDayData[conterDays].push(myWetherData.list[i].main.temp);
                currDay = nextDay;
                dateArr[conterDays] = new Date(myWetherData.list[i].dt*1000); //.toISOString();
            } 
        }
        console.log(wetherForNextDayData);
        var maxTemp = new Array();
        var minTemp = new Array();

        for (var day = 0; day < wetherForNextDayData.length; day++) {
            maxTemp[day] = wetherForNextDayData[day][0];
            minTemp[day] = wetherForNextDayData[day][0];
        }
        for (var day = 0; day < wetherForNextDayData.length; day++) {
            for (var indexTemp = 0; indexTemp < wetherForNextDayData[day].length; indexTemp++) {
                if (maxTemp[day] < wetherForNextDayData[day][indexTemp]) { 
                    maxTemp[day] = wetherForNextDayData[day][indexTemp];
                }
                if (minTemp[day] > wetherForNextDayData[day][indexTemp]) { 
                    minTemp[day] = wetherForNextDayData[day][indexTemp];
                }
            }
        }
        console.log(dateArr);
        console.log(maxTemp);
        console.log(minTemp);
        for (var i = 0; i < dateArr.length; i++) {
            var date = (dateArr[i].getDate()) + '.' + (dateArr[i].getMonth()+1)
            createNewBlock(date, minTemp[i], maxTemp[i]);
        }
    }
}

function createNewBlock(data, minT, maxT) {
    var newSection = document.createElement('section');
    FiveDaysData.appendChild(newSection);
    newSection.className = 'weather_for_next_day';

    var sectionData = document.createElement('section');
    newSection.appendChild(sectionData);
    sectionData.className = 'section_data';
    sectionData.innerHTML = data;

    var sectionMinTemp = document.createElement('section');
    newSection.appendChild(sectionMinTemp);
    sectionMinTemp.className = 'section_min_temp';
    sectionMinTemp.innerHTML ='min' + ' ' + minT + '°';

    var sectionMaxTemp = document.createElement('section');
    newSection.appendChild(sectionMaxTemp);
    sectionMaxTemp.className = 'section_max_temp';
    sectionMaxTemp.innerHTML ='max' + ' ' + maxT + '°';
};
