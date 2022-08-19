// let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=ea1fe9ddea793eb6b3591286439bab76';
let searchBtn = $('#searchBtn');
let cityInputEl = $('#cityName');

let searchBtnHandler = function (event) {
    event.preventDefault();

    let city = cityInputEl.val();
    console.log(city);
}

// fetch(weatherUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log('City Weather Data \n----------');
//         console.log(data);
//     })

searchBtn.on('click', searchBtnHandler);