import "./main.css";

console.log("Hello world");

const fetchUrl =
  "http://api.weatherapi.com/v1/current.json?key=0b40ae3fcca84b2e9f6142531241902&q=London&aqi=no";

async function getWeather(searchTag = "cat") {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0b40ae3fcca84b2e9f6142531241902&q=London&aqi=no`,
      { mode: "cors", cache: "no-cache" }
    );
    const weatherData = await response.json();
    // if (weatherData.data.length === 0) {
    //   errorDomMsg();
    //   throw new Error("Undefined (original)");
    // }
    console.log(weatherData);
  } catch (error) {
    console.log("Error1: ", error);
  }
}

getWeather();
