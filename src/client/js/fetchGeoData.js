const fetchGeoName = (city, key) => {
    const url = 'http://api.geonames.org/searchJSON?q='

    return fetch(url + city + '&maxRows=1&username=' + key)
        .then(res => {
            return res.text()
        })
        .catch(console.log)
}

exports.fetchGeoName = fetchGeoName