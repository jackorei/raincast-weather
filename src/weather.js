export async function weatherData(search) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${search}?unitGroup=us&key=BDH93GK7EJBZUC4QNBKK6FPTP&contentType=json`)
        const data = await response.json()
        console.log(myData(data))
    }
    catch(error) {
        console.log('An error occurred: ', error)
    }
}

export function myData(data) {
    return {
        location: data.address,
        temperature: data.currentConditions.temp,
        uvindex: data.currentConditions.uvindex,
        condition: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
        wind: data.currentConditions.windspeed,
    }
}