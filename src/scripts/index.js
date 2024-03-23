import '../styles/style.css';
import getBackground from './background';
import fetchWeather from './fetch';

let city = 'london';

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const locationName = document.getElementById('location-name');
const conditionText = document.getElementById('condition-text');
const tempActual = document.getElementById('temp-actual');
const tempApparant = document.getElementById('temp-apparant');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const visibility = document.getElementById('visibility');
const lastUpdated = document.getElementById('last-updated');

function setLocation(data) {
    locationName.textContent = `${data.location.name.toLowerCase()}, ${data.location.country.toLowerCase()}`;
}

function setCondition(data) {
    conditionText.textContent = data.current.condition.text.toLowerCase();
}

function setTemp(data) {
    tempActual.textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    tempApparant.textContent = `feels like ${data.current.feelslike_c}°C / ${data.current.feelslike_f}°F`;
}

function setHumidity(data) {
    humidity.textContent = `humidity ${data.current.humidity}%`;
}

function setWind(data) {
    wind.textContent = `wind ${data.current.wind_kph} km/h`;
}

function setVisibility(data) {
    visibility.textContent = `visibility ${data.current.vis_km} km`;
}

function setLastUpdated(data) {
    lastUpdated.textContent = `last updated ${data.current.last_updated}`;
}

function setBackground(data) {
    if (data.current.is_day === 1) {
        document.body.style.backgroundImage = getBackground(parseInt(data.current.condition.code), true);
    } else {
        document.body.style.backgroundImage = getBackground(parseInt(data.current.condition.code), false);
    }
}

async function setInfo(data) {
    setLocation(data);
    setCondition(data);
    setTemp(data);
    setHumidity(data);
    setWind(data);
    setVisibility(data);
    setLastUpdated(data);
    setBackground(data);
}

searchButton.addEventListener('click', async () => {
    if (!searchInput.value) {
        return;
    }
    try {
        city = searchInput.value.trim().toLowerCase().split(' ').join('+');
        const data = await fetchWeather(city);
        setInfo(data);
    } catch (error) {
        alert('city not found');
        console.log(error);
    }
    searchInput.value = '';
});

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

setInfo(await fetchWeather(city));