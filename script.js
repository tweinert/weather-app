const key = config.MY_API_TOKEN;

async function getWeatherByLocation() {
  const locationText = document.querySelector("input");
  const location = locationText.value;

  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&appid=" +
      key +
      "&units=metric"
  );
  const weatherData = await response.json();
  // TODO error handling (no response)

  console.log(weatherData);
  displayWeatherInformation(weatherData);
}

async function displayWeatherInformation(weatherData) {
  const tempDisplay = document.getElementById("temperature");
  const descDisplay = document.getElementById("description");
  const locationDisplay = document.getElementById("location");

  let location = weatherData.name;
  let description = weatherData.weather[0].main;
  let temperature = weatherData.main.temp;

  locationDisplay.textContent = location;
  descDisplay.textContent = description;
  tempDisplay.textContent = temperature + "c";

  fetchImage(description);
}

function fetchImage(searchText) {
  const img = document.querySelector("img");

  fetchUrl =
    "https://api.giphy.com/v1/gifs/translate?api_key=46FWr2QGjSa4tN5X3q8DdcSZmzWB4DBu&s=" + searchText;

  fetch(fetchUrl, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (error) {
      throw error;
    });
}

document.addEventListener("DOMContentLoaded", bindEventListeners);

function bindEventListeners() {
  // get weather button
  const btn = document.querySelector("button");
  btn.addEventListener("click", getWeatherByLocation, false);

  // text input enter key
  const textInput = document.querySelector("input");
  textInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("get-weather-btn").click();
      textInput.value = "";
    }
  });
}
