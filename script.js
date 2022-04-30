const key = config.MY_API_TOKEN;

async function getWeatherByLocation() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=adelaide&appid=" + key
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeatherByLocation();