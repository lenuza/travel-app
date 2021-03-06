const {
    parseGeoData
} = require('./parseGeoData')
const {
    displayData
} = require('./getDisplayData')
const {
    setData
} = require('./localStorage')

document.getElementById('button').addEventListener('click', getCityData)
document.getElementById('save-trip').addEventListener('click', setData)

function getCityData() {

    const city = document.getElementById('trip-destination').value
    //clearing the input field
    document.getElementById('trip-destination').value = ''

    passCityData(city, process.env.GEONAMES_APP_ID)
}

const passCityData = (city, key) => {

    parseGeoData(city, key)
        .then(output =>
            fetchPixabay(output.geonames[0].name, output.geonames[0].countryName)
            .then(imgData => {
                fetchWeatherBit(output.geonames[0].lat, output.geonames[0].lng, output.geonames[0].name, imgData)
            }))
        .catch(console.log)
}

//fetch image of city, if there is not, fetch of country
const fetchPixabay = (city, country) => {
    return fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_APP_KEY}&q=${city}&image_type=photo&pretty=true&category=nature`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.total > 0) {
                return data
            } else {
                return fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_APP_KEY}&q=${country}&image_type=photo&pretty=true&category=nature`)
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        return data
                    })
            }
        })
        .catch(console.log)
}

const fetchWeatherBit = (lat, lng, city, imgData) => {
    const start = Date.now()
    const startDate = document.getElementById('start-date').valueAsNumber

    //taking start date in a format which will be used in the post request
    const tripStart = document.getElementById('start-date').valueAsDate
    const tripStartString = String(tripStart).slice(0, 16)

    const returnDate = document.getElementById('return-date').valueAsNumber

    //clearing the input fields
    document.getElementById('start-date').value = ''
    document.getElementById('return-date').value = ''

    //calculate which weather data to get current or after one week
    const diff = startDate - start
    //calculate trip duration and turn it into days
    const tripDuration = Math.floor((returnDate - startDate) / 86400000)

    if (diff <= 535041095) {
        return fetch(`http://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                return postData('http://localhost:8000/weatherData', {
                    city: data.data[0].city_name,
                    description: data.data[0].weather.description,
                    temperature: data.data[0].temp,
                    tripDuration: tripDuration,
                    image: imgData.hits[0].webformatURL,
                    imgTag: imgData.hits[0].tags,
                    tripStart: tripStartString
                }).then(() => displayData())
            })
            .catch(console.log)
    } else {
        return fetch(`http://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                postData('http://localhost:8000/weatherData', {
                    city: city,
                    description: data.data[0].weather.description,
                    temperature: data.data[0].temp,
                    tripDuration: tripDuration,
                    image: imgData.hits[0].webformatURL,
                    imgTag: imgData.hits[0].tags,
                    tripStart: tripStartString
                }).then(() => displayData())
            })
            .catch(console.log)
    }
}

//async post request
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const newData = await response.json()
    return newData
}

exports.setData = setData