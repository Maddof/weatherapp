(()=>{"use strict";console.log("Hello world"),async function(o="cat"){try{const o=await fetch("http://api.weatherapi.com/v1/current.json?key=0b40ae3fcca84b2e9f6142531241902&q=London&aqi=no",{mode:"cors",cache:"no-cache"}),c=await o.json();console.log(c)}catch(o){console.log("Error1: ",o)}}()})();