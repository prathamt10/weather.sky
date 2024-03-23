const WEATHER_API_KEY = 'd2186eafb07340fe89c172958242103';

async function fetchWeather(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`;
    
    const response = await fetch(url);
    if (response.status == 400) {
        alert('city not found');
        return new Error('city not found');
    }
    const data = await response.json();
    return data;
}

export default fetchWeather;