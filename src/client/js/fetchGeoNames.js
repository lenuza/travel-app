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

const buildData = (city, key) => {
    return fetchGeoName(city, key)
        .then(text => {
            return JSON.parse(text)
        })
        .catch(console.log)
}


const displayData = (city, key) => {
    buildData(city, key)
        .then(output => {
            console.log(output)
        })
        .catch(console.log)
}