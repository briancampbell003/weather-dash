# Weather Dashboard

## Purpose
This project required using HTML, CSS and Javascript to create from scratch a "weather dashboard" that would respond to user input by displaying the immediate weather information as well as 5-day forecasts for any city submitted.

## Coding Process and Obstacles
I began with an HTML wireframe that I used Javascript to populate with the relevant information. I faced a series of obstacles in coding the script, most whose details I cannot precisely remember. For example, one challenge involved passing my data objects between functions, because displayWeatherData needed the current weater object, displayForecastData needed the forecast object, but saveData needed both, for successful population in the showStoredCities function.

## Future developments
I could not find a UV index anywhere in the responses I received from my two API calls. I would like to investigate and fix that in a future version. I have a bug that causes all stored cities to work as clickable objects spare the first stored city. I would also like to fix that bug. Additionally, I would like to hide all elements prior to the first search submission, and include alert modals for bad user inputs and/or bad fetch responses.

## Credits
Tutor David Elutilo helped me iron out the syntax around my fetch request and response. I used part of some code I found on StackOverflow for capitalizing the first letter in a string: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript


Here is a screenshot:
![screenshot of coding quiz webpage](demo.png)

I hope you appreciate this Coding Quiz, you can quiz yourself at the [deployed GitHub webpage.](https://briancampbell003.github.io/module-6-weather-dash)
