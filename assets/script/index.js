const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = `block`;
    document.querySelector(".weather").style.display = `none`;
  } else {
    document.querySelector(".error").style.display = `none`;
  }
  let data = await response.json();

  console.log(data);
  city.innerHTML = data.name;
  temp.innerHTML = data.main.temp + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.setAttribute("src", "../assets/img/clouds.png");
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.setAttribute("src", "../assets/img/clear.png");
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.setAttribute("src", "../assets/img/rain.png");
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.setAttribute("src", "../assets/img/drizzle.png");
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.setAttribute("src", "../assets/img/mist.png");
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});
