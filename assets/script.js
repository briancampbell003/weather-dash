let searchBtn = $('#searchBtn');
let today= dayjs(Date(dayjs())).format('MM/DD/YYYY');
console.log(today);



let searchBtnHandler = (event) => {
    event.preventDefault();
    let cityInputEl = $('#cityName');
    let city = cityInputEl.val().trim();
    let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ea1fe9ddea793eb6b3591286439bab76&units=imperial';
    console.log(city);

    fetch(weatherUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    let weatherData = data;
                    displayWeatherData(city, weatherData);
                });
            } else {
                // ADD alert modal
            }
        })

}

let displayWeatherData = (city, weatherData) => {
    console.log(weatherData);
    let cityNowEl = $('#thisCityNow');
    cityNowEl.children('h2').text(city + ' (' + today + ')');
    cityNowEl.children('ul').append( $("<li>" + weatherData.weather.icon + "</li>"));
    cityNowEl.children('ul').append( $("<li>Temperature: " + weatherData.main.temp + "° F</li>"));
    cityNowEl.children('ul').append( $("<li>Humidity: " + weatherData.main.humidity + "%"));
    cityNowEl.children('ul').append( $("<li>Wind: " + weatherData.wind.speed + "mph"));
    cityNowEl.children('ul').append( $("<li>UV Index: " + "???" + "</li>"));

    
    

}
// let displayWeatherData = function(data) {
//     console.log(data);
// }
// function displayWeatherData(data) {
//     console.log(data);
// }

searchBtn.on('click', searchBtnHandler);