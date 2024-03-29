const WEATHER_API_KEY = 'd2186eafb07340fe89c172958242103';

/**
 * Fetches the current weather data for a given location using the WeatherAPI.
 *
 * @param {string} location - The name of the location to fetch weather data for.
 * @return {Promise<Object|Error>} A Promise that resolves to the weather data as an object, or rejects with an error if the location is not found.
 */
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