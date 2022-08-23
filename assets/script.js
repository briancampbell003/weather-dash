let searchBtn = $('#searchBtn');
let today= dayjs(Date(dayjs())).format('M/DD/YYYY');
console.log(today);

function showStoredCities () {
    let storedCities = JSON.parse(localStorage.getItem("savedData")) || [];
    for (let i = 0; i < storedCities.length; i++) {
        let oldCity = storedCities[i].city;
        let oldCityEl = $("#oldCitiesList");
        oldCityEl.append( $('<li>' + oldCity + '</li>'));
        oldCityEl.children().eq(i).on('click', function() {
            let city = storedCities[i].city;
            let weatherData = storedCities[i].weather;
            let forecastData = storedCities[i].forecast;
            displayWeatherData(city, weatherData);
            displayForecastData(city, forecastData);
            console.log(city, weatherData);
        })
       
    }
}

let searchBtnHandler = (event) => {
    event.preventDefault();
    let cityInputEl = $('#cityName');
    let city = cityInputEl.val().trim();
    
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ea1fe9ddea793eb6b3591286439bab76&units=imperial';
    let forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=ea1fe9ddea793eb6b3591286439bab76&units=imperial';


    fetch(weatherUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    let weatherData = data;
                    localStorage.setItem("storeWeather", JSON.stringify(weatherData));
                    displayWeatherData(city, weatherData);
                });
            } else {
                // ADD alert modal
            }
        })
    let weatherData = JSON.parse(localStorage.getItem("storeWeather"));

    console.log(weatherData);

    fetch(forecastUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    let forecastData = data;
                    localStorage.setItem("storeForecast", JSON.stringify(forecastData));
                    displayForecastData(city, forecastData);
                });
            } else {
                // ADD alert modal
            }
        })
    let forecastData = JSON.parse(localStorage.getItem("storeForecast"));
    console.log(forecastData);

    saveData(city, weatherData, forecastData);

}

let displayWeatherData = (city, weatherData) => {
    console.log(weatherData);
    let cityNowEl = $('#thisCityNow');
    let cityNowIconUrl = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';

    cityNowEl.children('h2').text(city + ' (' + today + ')');

    cityNowEl.children('section').empty();

    cityNowEl.children('section').append( $('<p><img src="' + cityNowIconUrl + '"></p>'));
    cityNowEl.children('section').append( $('<p>Temperature: ' + weatherData.main.temp + '° F</p>'));
    cityNowEl.children('section').append( $('<p>Humidity: ' + weatherData.main.humidity + '%</p>'));
    cityNowEl.children('section').append( $('<p>Wind: ' + weatherData.wind.speed + 'mph</p>'));
    cityNowEl.children('section').append( $('<p>UV Index: ' + '??' + '</p>'));

}

let displayForecastData = (city, forecastData) => {
    console.log(forecastData);
    let cityFiveDayEl = $('#thisCity5day');
    cityFiveDayEl.children('h3').text("5-Day Forecast");

    for (let i = 1; i < 6; i++) {
        let forecastDate = dayjs(today).add(i, 'day').format('M/DD/YYYY');
        let forecastIconUrl = 'http://openweathermap.org/img/wn/' + forecastData.list[(i*8)-1].weather[0].icon + '@2x.png';
        
        cityFiveDayEl.children(1).children().eq(i-1).text(forecastDate);
            // retrieve information at 24 hr intervals from forecast data and append to corresponding cards
        cityFiveDayEl.children(1).children().eq(i-1).append( $('<p><img src="' + forecastIconUrl + '"></p>'));
        cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Temperature: ' + forecastData.list[(i*8)-1].main.temp + '° F</p>'));
        cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Humidity: ' + forecastData.list[(i*8)-1].main.humidity + '%</p>'));
        cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Wind: ' + forecastData.list[(i*8)-1].wind.speed + 'mph</p>'));
        
    }
}

let saveData = (city, weatherData, forecastData) => {
    // Create city weather data object and add to array kept on localStorage
    let savedData = {city: city, weather: weatherData, forecast: forecastData}
    let savedDataArr = JSON.parse(localStorage.getItem("savedData")) || [];
    savedDataArr.push(savedData);
    localStorage.setItem("savedData", JSON.stringify(savedDataArr));

    console.log(JSON.parse(localStorage.getItem("savedData")));

    showStoredCities();
}




// let displayWeatherData = function(data) {
//     console.log(data);
// }
// function displayWeatherData(data) {
//     console.log(data);
// }

searchBtn.on('click', searchBtnHandler);