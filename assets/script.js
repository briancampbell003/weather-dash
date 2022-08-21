let searchBtn = $('#searchBtn');
let today= dayjs(Date(dayjs())).format('M/DD/YYYY');
console.log(today);



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
                    displayWeatherData(city, weatherData);
                });
            } else {
                // ADD alert modal
            }
        })

    fetch(forecastUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    let forecastData = data;
                    displayForecastData(city, forecastData);
                });
            } else {
                // ADD alert modal
            }
        })
}

let displayWeatherData = (city, weatherData) => {
    console.log(weatherData);
    let cityNowEl = $('#thisCityNow');
    let cityNowIconUrl = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png';

    cityNowEl.children('h2').text(city + ' (' + today + ')');

    cityNowEl.children('ul').append( $('<li><img src="' + cityNowIconUrl + '"></li>'));
    cityNowEl.children('ul').append( $('<li>Temperature: ' + weatherData.main.temp + '° F</li>'));
    cityNowEl.children('ul').append( $('<li>Humidity: ' + weatherData.main.humidity + '%</li>'));
    cityNowEl.children('ul').append( $('<li>Wind: ' + weatherData.wind.speed + 'mph</li>'));
    cityNowEl.children('ul').append( $('<li>UV Index: ' + '??' + '</li>'));

}

let displayForecastData = (city, forecastData) => {
    console.log(forecastData);
    let cityFiveDayEl = $('#thisCity5day');

    for (let i = 1; i < 6; i++) {
       let forecastDate = dayjs(today).add(i, 'day').format('M/DD/YYYY');
       let forecastIconUrl = 'http://openweathermap.org/img/wn/' + forecastData.list[(i*8)-1].weather[0].icon + '@2x.png';
       
       cityFiveDayEl.children(1).children().eq(i-1).text(forecastDate);
        // retrieve information at 24 hr intervals from forecast data and append to corresponding cards
        cityFiveDayEl.children(1).children().eq(i-1).append( $('<li><img src="' + forecastIconUrl + '"></li>'));
       cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Temperature: ' + forecastData.list[(i*8)-1].main.temp + '° F</p>'));
       cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Humidity: ' + forecastData.list[(i*8)-1].main.humidity + '%</p>'));
       cityFiveDayEl.children(1).children().eq(i-1).append( $('<p>Wind: ' + forecastData.list[(i*8)-1].wind.speed + 'mph</p>'));
        
    }

}




// let displayWeatherData = function(data) {
//     console.log(data);
// }
// function displayWeatherData(data) {
//     console.log(data);
// }

searchBtn.on('click', searchBtnHandler);