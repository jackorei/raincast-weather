import { weatherData } from "./weather";

const searchform = document.querySelector('#searchform')
const weathersearch = document.querySelector('#weathersearch')

searchform.addEventListener('submit', (event) => {
    event.preventDefault()
    if (weathersearch.value === '') {
        console.log('Invalid search.')
    }
    const formsearch = weathersearch.value
    weatherData(formsearch)
})
