(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{Z:()=>c});const e=document.getElementById("search-form"),n=document.getElementById("search-form__city"),o=document.querySelector(".error-msg");function r(t){0===o.textContent.length?o.textContent=t:o.textContent=""}async function c(t="Stockholm"){try{const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0b40ae3fcca84b2e9f6142531241902&q=${t}&days=7&aqi=no&alerts=no\n      `,{mode:"cors",cache:"no-cache"}),n=await e.json();if(400===e.status)throw console.log(e),console.log(n),new Error(n.error.message);(function(t){var e,n,o,r;console.log(t),e=t.location.name,document.getElementById("cityname").textContent=e,n=t.current.temp_c,document.querySelector(".current-temp").textContent=n,o=t.current.condition.icon,document.getElementById("weather-icon").src=o,r=t.current.condition.text,document.getElementById("current-weather-status").textContent=`${r} today`,function(t){const e=document.getElementById("current-temp-table__body");e.innerHTML="";for(let n=3;n<t.length;n+=4){const o=`\n      <tr>\n        <td>${n.toString().padStart(2,"0")}</td>\n        <td>${t[n].temp_c} °C</td>\n      </tr>\n    `;e.insertAdjacentHTML("beforeend",o)}}(t.forecast.forecastday[0].hour),function(t){const e=document.getElementById("forecast-table__body"),n=t.forecast.forecastday;e.innerHTML="",n.forEach((t=>{const n=`\n      <tr>\n      <td>${function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t.date).getDay()]}(t)}</td>\n      <td>${t.day.daily_chance_of_rain}%</td>\n      <td>${t.day.daily_chance_of_snow}%</td>\n      <td>${t.day.mintemp_c} / ${t.day.maxtemp_c} °C</td>\n      </tr>\n    `;e.insertAdjacentHTML("beforeend",n)}))}(t)})(n),r()}catch(t){r(t),console.log("Error1: ",t)}}e.addEventListener("submit",(t=>{t.preventDefault(),c(n.value),e.reset()})),c()})();