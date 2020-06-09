const url = 'http://api.geonames.org/searchJSON?q='

document.getElementById('button').addEventListener('click', getCityData)

//get the city and then fetch city data
function getCityData() {
    const city = document.getElementById('trip-destination').value
    //clearing the input field
    document.getElementById('trip-destination').value = ''
    const key = process.env.GEONAMES_APP_ID

    displayData(city, key)
}

const fetchGeoName = (city, key) => {
    return fetch(url + city + '&maxRows=1&username=' + key)
            .then(res => {
                return res.text()
            })
            .catch(err => {
                console.log(err)
            })
}

const parseGeoData = (city, key) => {
    return fetchGeoName(city, key)
        .then(text => {
            return JSON.parse(text)
        })
        .catch(console.log)
}


const displayData = (city, key) => {
    console.log(process.env.WEATHERBIT_APP_KEY)
    parseGeoData(city, key)
        .then(output => {
            fetchWeatherBit(output.geonames[0].lat,output.geonames[0].lng)
            fetchPixabay(output.geonames[0].countryName)
        })
        .catch(console.log)
}

const fetchWeatherBit = (lat, lng) => {
    const start = Date.now()
    const tripDate = document.getElementById('trip-date').valueAsNumber
    console.log(tripDate - start)
    //clearing the input field
    document.getElementById('trip-date').value = ''
    const diff = tripDate - start

    if(diff <= 535041095) {
        return fetch(`http://api.weatherbit.io/v2.0/current?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
        .then(res => {
            return res.text()
        })
        .catch(err => {
            console.log(err)
        })
    }
    else {
        return fetch(`http://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${lng}&key=${process.env.WEATHERBIT_APP_KEY}`)
        .then(res => {
            return res.text()
        })
        .catch(err => {
            console.log(err)
        })
    }
}

const fetchPixabay = (city) => {
    return fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_APP_KEY}&q=${city}&image_type=photo&pretty=true`)
            .then(res => {
                return res.text()
            })
            .catch(err => {
                console.log(err)
            })
}


