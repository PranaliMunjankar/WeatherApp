const apiKey = 'YOUR_API_KEY';

export async function getWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`);
    if(!response.ok){
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
  
    const dailyForecasts = data.forecast.forecastday.map(day => ({
        date: new Date(day.date),
        icon: day.day.condition.icon,
        temp: day.day.avgtemp_c,
        condition: day.day.condition.text
    }));

    return {
        temperature : data.current.temp_c,
        city: data.location.name,
        forecast: dailyForecasts,
    }
}
