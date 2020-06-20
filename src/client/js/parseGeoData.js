const { fetchGeoName } = require('./fetchGeoData')

const parseGeoData = (city, key) => {
    return fetchGeoName(city, key)
        .then(text => {
            return JSON.parse(text)
        })
        .catch(console.log)
}

exports.parseGeoData = parseGeoData
