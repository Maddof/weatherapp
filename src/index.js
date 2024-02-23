import "./main.css";
import { displayErrorMsg } from "./modules/form";
import { renderResults } from "./modules/result";

async function getWeather(city = "Stockholm") {
  try {
    const responseForecast = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0b40ae3fcca84b2e9f6142531241902&q=${city}&days=7&aqi=no&alerts=no
      `,
      { mode: "cors", cache: "no-cache" }
    );
    const weatherForecast = await responseForecast.json();

    if (responseForecast.status === 400) {
      console.log(responseForecast);
      console.log(weatherForecast);
      throw new Error(weatherForecast.error.message);
    }
    renderResults(weatherForecast);
    displayErrorMsg();
  } catch (error) {
    displayErrorMsg(error);
    console.log("Error1: ", error);
  }
}

getWeather();

export { getWeather };
