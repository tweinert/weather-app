const key = config.MY_API_TOKEN;

async function getWeatherByLocation() {
  const locationText = document.querySelector("input");
  const location = locationText.value;

  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + key + "&units=metric"
  );
  const weatherData = await response.json();
  
  console.log(weatherData);
}

const btn = document.querySelector("button");
btn.addEventListener("click", getWeatherByLocation, false);