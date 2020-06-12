const { getData } = require('./displayTripData')

document.getElementById('button').addEventListener('click', getCityData)

//get the city and then fetch city data
function getCityData() {

    const city = document.getElementById('trip-destination').value
    //clearing the input field
    document.getElementById('trip-destination').value = ''

    passCityData(city, process.env.GEONAMES_APP_ID)
}

const passCityData = (city, key) => {

    parseGeoData(city, key)
        .then(output =>
            fetchPixabay(output.geonames[0].countryName)
                .then(imgData => {
                    fetchWeatherBit(output.geonames[0].lat,output.geonames[0].lng, output.geonames[0].name, imgData)
                }))
        .catch(console.log)
}

const parseGeoData = (city, key) => {
    return fetchGeoName(city, key)
        .then(text => {
            return JSON.parse(text)
        })
        .catch(console.log)
}

const fetchPixabay = (city) => {
    return fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_APP_KEY}&q=${city}&image_type=photo&pretty=true&category=nature`)
            .then(res => {
                return res.json()
            })
            .then( data => {
                return data
            })
            .catch(console.log)
}

// console.log(data.hits[0].webformatURL)
// document.getElementById('trip-img').setAttribute('src', data.hits[0].webformatURL)
// document.getElementById('trip-img').setAttribute('alt', data.hits[0].tags)

const fetchGeoName = (city, key) => {
    const url = 'http://api.geonames.org/searchJSON?q='

    return fetch(url + city + '&maxRows=1&username=' + key)
        .then(res => {
            return res.text()
        })
        .catch(console.log)
}

const fetchWeatherBit = (lat, lng, city, imgData) => {
    const start = Date.now()
    const tripDate = document.getElementById('trip-date').valueAsNumber
    //clearing the input field
    document.getElementById('trip-date').value = ''
    const diff = tripDate - start

    if(diff <= 535041095) {
        return fetch(`http://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(imgData)
            postData('http://localhost:8000/weatherData', {
                city: data.data[0].city_name,
                description: data.data[0].weather.description,
                temperature: data.data[0].temp,
                image: imgData.hits[0].webformatURL,
                imgTag: imgData.hits[0].tags
            }).then( () => { getData() })
        })
        .catch(console.log)
    }
    else {
        return fetch(`http://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(imgData)
            postData('http://localhost:8000/weatherData', {
                city: city,
                description: data.data[0].weather.description,
                temperature: data.data[0].temp,
                image: imgData.hits[0].webformatURL,
                imgTag: imgData.hits[0].tags
            }).then( () => { getData() })
        })
        .catch(console.log)
    }
}

// Promise.all([fetchWeatherBit, fetchPixabay ]).then((values) => {
//     console.log(values)
// })



//async post request
async function postData (url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        console.log(response.json())
        const newData =  await response.json()
        return newData
    } catch (error) {
        console.log("error", error)
    }
}

// exports.displayData = displayData
// exports.buildData = buildData