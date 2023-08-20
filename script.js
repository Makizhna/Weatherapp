const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("locationInput");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  getWeather(location);
});

function getWeather(location) {
  const temperature = Math.floor(Math.random() * 30 + 10); 
  const description = "Partly cloudy"; // Simulated weather description

  const weatherHTML = `
    <h2>${location}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;

  weatherInfo.innerHTML = weatherHTML;
}
function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}