import { getWeather } from "./weather.js";
import { updateUI } from "./ui.js";


$(document).ready(function () {
  $("#weather-form").on("submit", async function (e) {
    e.preventDefault();

    const city = $("#city").val();

    try {
      const weatherData = await getWeather(city);

      updateUI(weatherData);
    } catch (error) {
      updateUI({ error: error.message });
    }
  });
});
