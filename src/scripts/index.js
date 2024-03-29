import '../styles/style.css';
import fetchWeather from './fetch';
import setForecast from './forecast';

let city = 'guwahati';

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', async () => {
    if (!searchInput.value) {
        return;
    }
    try {
        city = searchInput.value.trim().toLowerCase().split(' ').join('+');
        const data = await fetchWeather(city);
        setForecast(data);
    } catch (error) {
        alert('error');
        console.log(error);
    }
    searchInput.value = '';
});

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

setForecast(await fetchWeather(city));