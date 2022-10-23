const searchForm = document.getElementById('search-form');
const loader = document.querySelector('.loader');
const humidity = document.getElementById('humidity');
const temperature = document.getElementById('temperature');
const min = document.getElementById('min');
const max = document.getElementById('max');
const table = document.querySelector('table');
const caption = document.querySelector('caption');

searchForm.onsubmit = async (e) => {
    e.preventDefault();
    loader.classList.remove('hidden');
    
    const city = searchForm.city.value;
    searchForm.reset();

    const data = await getWeatherByCity(city);
    
    loader.classList.add('hidden');

    if (data) {
        humidity.innerText = data.humidity;
        temperature.innerText = data.temp;
        min.innerText = data.temp_min;
        max.innerText = data.temp_max;
        table.classList.remove('hidden');
        caption.innerText = city;
    } else {
        alert('city not found');
    }
}

async function getWeatherByCity(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;

    const response = await fetch(endpoint, {mode: "cors"});
    
    const data = await response.json();
    return data.main;
}