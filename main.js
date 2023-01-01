let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

//Function to fetch
let getWeather = () => {
    let cityValue = cityRef.value;
    //IF Input field is empty
  let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;
};
window.addEventListener("load", getWeather);

