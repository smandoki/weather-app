const searchForm = document.getElementById('search-form');

searchForm.onsubmit = async (e) => {
    e.preventDefault();

    const city = searchForm.city.value;

    const data = await getWeatherByCity(city);
    console.log(data);

    searchForm.reset();
}

async function getWeatherByCity(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;

    const response = await fetch(endpoint, {mode: "cors"});
    
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    return data.main;
}