const apiKey = '0f2fb94282ad6a3dbf2387c407b74806';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
 
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "400" || data.cod === "404") {
            document.querySelector('.weather-info').innerHTML = `<h1>City Not Found</h1>`;
        } else {
          document.querySelector('.weather-info').innerHTML = `<h2 id="city-name">${data.name}</h2>
            <h3 id="weather-desc">${data.weather[0].description}</h3>
            <p class="temp"><span id="temperature">${Math.round(data.main.temp)}</span>°C</p>
            <p class="feels-like">Feels like: <span id="feels-like">${Math.round(data.main.feels_like)}</span>°C</p>
            <p class="humidity">Humidity: <span id="humidity">${data.main.humidity}</span>%</p>`
        }
    }