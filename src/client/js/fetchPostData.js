const { displayData } = require('./getDisplayData')

document.getElementById('button').addEventListener('click', getCityData)

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
                    console.log(imgData)
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

const fetchPixabay = (city, country) => {
    return fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_APP_KEY}&q=${city}&image_type=photo&pretty=true&category=nature`)
            .then( res => {
                return res.json()
            })
            .then( data => {
                if(data.total > 0) {
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
    const startDate = document.getElementById('start-date').valueAsNumber
    const returnDate = document.getElementById('return-date').valueAsNumber
    //clearing the input fields
    document.getElementById('start-date').value = ''
    document.getElementById('return-date').value = ''
    //calculate which wetaher data to get current or after one week
    const diff = startDate - start
    //calculate trip duration and turn it into days
    const tripDuration = Math.floor((returnDate - startDate)/86400000)
    console.log(Math.floor((returnDate - startDate)/86400000))

    if(diff <= 535041095) {
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
                imgTag: imgData.hits[0].tags
            }).then( () =>  displayData())
        })
        .catch(console.log)
    }
    else {
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
                imgTag: imgData.hits[0].tags
            }).then( () =>  displayData())
        })
        .catch(console.log)
    }
}

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

    const newData =  await response.json()
    return newData
}
