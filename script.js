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
