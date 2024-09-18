export function updateUI(weatherData) {
  if (weatherData.error) {
    $("#weather-info").text(`Error: ${weatherData.error}`);
  } else {
    $("#weather-info").text(
      `The weather in ${weatherData.city} is ${weatherData.temperature}`
    );

    const forecastCards = weatherData.forecast.map(day => {
        const dayName = day.date.toLocaleDateString('en-US', { weekday: 'long' });
        return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${dayName}</h5>
                    <img src="${day.icon}" class="card-img-top mb-3" alt="${day.condition}" style="max-height: 100px;">
                    <p class="card-text">Temperature: ${day.temp}°C</p>
                    <p class="card-text">Condition: ${day.condition}</p>
                </div>
            </div>
        `;
    }).join('');
    
    $("#forecast-cards").html(forecastCards);
  }
}

