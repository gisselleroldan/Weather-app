input = prompt("Enter a city name");

// Weather API
let result = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKEY}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.main.temp);

    let kelvin = data.main.temp;
    let degC = Math.floor(kelvin - 273.15);
    console.log(degC);
    let degF = Math.floor(degC * 1.8 + 32);
    console.log(degF);

    let p = document.querySelector("p");
    p.textContent = `Current Temp in ${input} is ${degF.toString()}`;
  });
