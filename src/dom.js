import { weatherData } from "./weather";

const searchform = document.querySelector('#searchform')
const weathersearch = document.querySelector('#weathersearch')
const temptext = document.querySelector('#temp')
const conditiontext = document.querySelector('#conditions')
const container = document.querySelector('.container')
const location = document.querySelector('#locationtitle')
const loading = document.querySelector('.fulldiv')
const uv = document.querySelector('#uv')
const wind = document.querySelector('#wind')
const body = document.querySelector('body')

async function startWeather() {
    const data = await weatherData('Chicago')
    if (data) {
        updateUI(data)
        weatherBG(data.condition)
        console.log(data)
    }
    else {
        weathersearch.value = ''
        weathersearch.style.border = '1px solid rgb(227, 66, 66)'
        loading.style.display = 'none'
    }
}
startWeather()

addEventListener('input', () => {
    weathersearch.style.border = ''
    weathersearch.placeholder = 'Search any location'
})

function weatherBG(condition) {
    console.log(condition)
  let image = 'default.jpg';

  if (condition.includes("Clear")) image = 'sunnyday.jpg';
  else if (condition.includes("Rain")) image = 'rainyday.jpg';
  else if (condition.includes("Snow")) image = 'snowyday.jpg';
  else if (condition.includes("Partially cloudy")) image = 'cloudyday.jpg';
  else if (condition.includes("Thunder")) image = 'rainynight.jpg';

  body.style.backgroundImage = `url('images/${image}')`;
}




searchform.addEventListener('submit', async (event) => {
    event.preventDefault()
    loading.style.display = 'flex'
    if (weathersearch.value === '') {
        console.log('Invalid search.')
    }
    const formsearch = weathersearch.value
    const data = await weatherData(formsearch)
    if (data) {
        updateUI(data)
        weatherBG(data.condition)
        console.log(data)   
    }
    else {
        weathersearch.value = ''
        weathersearch.placeholder = 'Location not found!'
        weathersearch.style.border = '1px solid rgb(227, 66, 66)'
        loading.style.display = 'none'
    }
    
})

function updateUI(data) {
    container.style.display = 'flex'
    weathersearch.value = ''
    weathersearch.style.border = ''
    loading.style.display = 'none'
    temptext.textContent = `${Math.round(data.temperature)}°F`
    conditiontext.textContent = data.condition
    location.textContent = data.location
    uv.textContent = `UV Index: ${data.uvindex}`
    wind.textContent = `Wind Speed: ${data.wind} mph`
}