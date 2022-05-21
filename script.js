const colors = ["green", " #ff4dc4", "rgba(133,122,200)", "#f15025", "yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

const apiKey = "cb31d40abd7041ee91b155743221905";

const getWeather = function (cityName) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=cb31d40abd7041ee91b155743221905&q=" +
      cityName
  )
    .then((data) => data.json())
    .then((data) => {
      const { location, current } = data;
      console.table(current);
      console.log(location);
    })
    .catch((err) => console.error(err));
};
getWeather("mumbai");

const api = function () {
  fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?key=6b0566b706msh38cb79be213cfc4p17bb4ejsn4786d754bb16&q=mumbai"
  )
    .then((response) => response.json())
    .then((response) => {
      const { location, current } = response;
      console.log(response);
      //console.table(location);
      console.log(location.name);
      console.table(current);
      console.log(current.temp_c);
    })
    .catch((err) => console.error(err));
};
//api();
