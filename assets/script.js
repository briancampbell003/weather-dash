let weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.88&lon=87.63&appid=ea1fe9ddea793eb6b3591286439bab76';

fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('City Weather Data \n----------');
        console.log(data);
    })