import { weatherData } from "./weather";

const searchform = document.querySelector('#searchform')
const weathersearch = document.querySelector('#weathersearch')
const temptext = document.querySelector('#temp')
const conditiontext = document.querySelector('#conditions')
const topleft = document.querySelector('.top-left')
const location = document.querySelector('#locationtitle')
const loading = document.querySelector('.fulldiv')
const uv = document.querySelector('#uv')
const wind = document.querySelector('#wind')

async function startWeather() {
    const data = await weatherData('Chicago')
    if (data) {
        topleft.style.display = 'flex'
        const displaytemp = `${Math.round(data.temperature)}°F`
        temptext.textContent = displaytemp
        conditiontext.textContent = data.condition
        location.textContent = data.location
        uv.textContent = `UV Index: ${data.uvindex}`
        wind.textContent = `Wind Speed: ${data.wind} mph`
        
        console.log(data)
    }
}
startWeather()

searchform.addEventListener('submit', async (event) => {
    event.preventDefault()
    loading.style.display = 'flex'
    if (weathersearch.value === '') {
        console.log('Invalid search.')
    }
    const formsearch = weathersearch.value
    const data = await weatherData(formsearch)
    if (data) {
        loading.style.display = 'none'
        const displaytemp = `${Math.round(data.temperature)}°F`
        temptext.textContent = displaytemp
        conditiontext.textContent = data.condition
        location.textContent = data.location
        uv.textContent = `UV Index: ${data.uvindex}`
        wind.textContent = `Wind Speed: ${data.wind} mph`
        console.log(data)
        
    }
    
})

