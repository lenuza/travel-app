const url = 'http://api.geonames.org/searchJSON?q='

document.getElementById('button').addEventListener('click', getCityData)

//get the city and then fetch city data
function getCityData() {
    const city = document.getElementById('trip-destination').value
    //clearing the input field
    document.getElementById('trip-destination').value = ''
    const key = process.env.GEONAMES_APP_ID

    return fetch(url + city + '&maxRows=1&username=' + key)
        .then(res => {
            return res.text()
        })
        .catch(err => {
            console.log(err)
        })
}
