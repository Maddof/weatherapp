import { getWeather } from "..";

const form = document.getElementById("search-form");
const formInput = document.getElementById("search-form__city");
const errorMsgPara = document.querySelector(".error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchCity = formInput.value;
  getWeather(searchCity);
  form.reset();
});

function displayErrorMsg(errorMsg) {
  if (errorMsgPara.textContent.length === 0) {
    errorMsgPara.textContent = errorMsg;
  } else {
    errorMsgPara.textContent = "";
  }
}

export { displayErrorMsg };
