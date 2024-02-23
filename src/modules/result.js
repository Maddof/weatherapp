import { getWeather } from "..";

function renderResults(weatherForecast) {
  console.log(weatherForecast);
  renderCityName(weatherForecast.location.name);
  renderCurrentTemp(weatherForecast.current.temp_c);
  renderWeatherIcon(weatherForecast.current.condition.icon);
  renderCurrentWeatherMessage(weatherForecast.current.condition.text);
  renderCurrentHourForecast(weatherForecast.forecast.forecastday[0].hour);
  renderDaysForecast(weatherForecast);
}

function renderCityName(cityName) {
  const cityNameHeader = document.getElementById("cityname");
  cityNameHeader.textContent = cityName;
}

function renderCurrentTemp(currentTemp) {
  const currentCityTemp = document.querySelector(".current-temp");
  currentCityTemp.textContent = currentTemp;
}

function renderWeatherIcon(iconUrl) {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.src = iconUrl;
}

function renderCurrentWeatherMessage(textMsg) {
  const currentWeatherStatus = document.getElementById(
    "current-weather-status"
  );
  currentWeatherStatus.textContent = `${textMsg} currently`;
}

function renderCurrentHourForecast(currentHourForecast) {
  const currentTempTableBody = document.getElementById(
    "current-temp-table__body"
  );
  currentTempTableBody.innerHTML = "";
  for (let i = 3; i < currentHourForecast.length; i += 4) {
    const htmlCurrentHourTemp = `
      <tr>
        <td>${i.toString().padStart(2, "0")}</td>
        <td>${currentHourForecast[i].temp_c} °C</td>
      </tr>
    `;
    currentTempTableBody.insertAdjacentHTML("beforeend", htmlCurrentHourTemp);
  }
}

function renderDaysForecast(weatherForecast) {
  const forecastTableBody = document.getElementById("forecast-table__body");
  const daysForecast = weatherForecast.forecast.forecastday;
  forecastTableBody.innerHTML = "";
  daysForecast.forEach((day) => {
    const htmlDayForecast = `
      <tr>
      <td>${getDayName(day)}</td>
      <td>${day.day.daily_chance_of_rain}%</td>
      <td>${day.day.daily_chance_of_snow}%</td>
      <td>${day.day.mintemp_c} / ${day.day.maxtemp_c} °C</td>
      </tr>
    `;
    forecastTableBody.insertAdjacentHTML("beforeend", htmlDayForecast);
  });
}

function getDayName(day) {
  const currentDay = new Date(day.date);
  const dayIndex = currentDay.getDay();
  // Array of day names, starting with Sunday because getDay() is zero-based
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayIndex];
}

export { renderResults };
