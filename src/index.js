import "./main.css";
import { displayErrorMsg } from "./modules/form";
import { renderResults } from "./modules/result";
import { displayLoader, hideLoader } from "./modules/loader";

async function getWeather(city = "Stockholm") {
  try {
    displayLoader();
    const responseForecast = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=0b40ae3fcca84b2e9f6142531241902&q=${city}&days=7&aqi=no&alerts=no
      `,
      { mode: "cors", cache: "no-cache" }
    );
    const weatherForecast = await responseForecast.json();

    if (responseForecast.status === 400) {
      throw new Error(weatherForecast.error.message);
    }
    hideLoader();
    renderResults(weatherForecast);
    displayErrorMsg();
  } catch (error) {
    displayErrorMsg(error);
    console.log("Error1: ", error);
  }
}

getWeather();

export { getWeather };
