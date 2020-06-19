const fetchGeoName = () => {
    return Promise.resolve(`{
        "city":"Gondor",
        "country": "Middle Earth"
    }`)
}

exports.fetchGeoName = fetchGeoName