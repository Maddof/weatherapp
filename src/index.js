import "./main.css";

const form = document.getElementById("search-form");
const formInput = document.getElementById("search-form__city");
const errorMsgPara = document.querySelector(".error-msg");

async function getWeather(city = "Stockholm") {
  try {
    const responseForecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0b40ae3fcca84b2e9f6142531241902&q=${city}&days=3&aqi=no&alerts=no
      `,
      { mode: "cors", cache: "no-cache" }
    );
    const weatherForecast = await responseForecast.json();

    if (responseForecast.status === 400) {
      console.log(responseForecast);
      console.log(weatherForecast);
      throw new Error(weatherForecast.error.message);
    }
    // if (weatherData.data.length === 0) {
    //   errorDomMsg();
    //   throw new Error("Undefined (original)");
    // }
    logForecast(weatherForecast);
    errorMsgPara.textContent = "";
  } catch (error) {
    displayErrorMsg(error);
    console.log("Error1: ", error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchCity = formInput.value;
  getWeather(searchCity);
  form.reset();
});

function logForecast(currentCityForecast) {
  console.log(currentCityForecast);
}

function displayErrorMsg(errorMsg) {
  errorMsgPara.textContent = errorMsg;
}

getWeather();
