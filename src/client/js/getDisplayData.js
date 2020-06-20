document.getElementById('clear-trip').addEventListener('click', clearData)

// async get request
const getData = async (url = 'http://localhost:8000/getWeatherData') => {
    const request = await fetch(url)
    try {
        const allData = await request.json()
        return allData
    } catch (error) {
        console.log("error", error)
    }
}

const displayData = () => {
    getData()
        .then(data => {
            document.getElementById('city').innerHTML = 'Trip to: ' + data.newEntry.city
            document.getElementById('trip-start').innerHTML = 'Departing: ' + data.newEntry.tripStart
            document.getElementById('trip-duration').innerHTML = 'Going for: ' + data.newEntry.tripDuration + ' days'
            document.getElementById('description').innerHTML = 'Weather will be: ' + data.newEntry.description
            document.getElementById('temp').innerHTML = 'Temperatures around: ' + data.newEntry.temperature + ' °C'
            document.getElementById('trip-img').setAttribute('src', data.newEntry.image)
            document.getElementById('trip-img').setAttribute('alt', data.newEntry.imgTag)
        })
}

const clearData = () => {
    document.getElementById('city').innerHTML = ''
    document.getElementById('trip-start').innerHTML = ''
    document.getElementById('trip-duration').innerHTML = ''
    document.getElementById('description').innerHTML = ''
    document.getElementById('temp').innerHTML = ''
    document.getElementById('trip-img').setAttribute('src', 'paolo-nicolello-unsplash.jpg')
    document.getElementById('trip-img').setAttribute('alt', 'beach waves')
}

exports.displayData = displayData
exports.clearData = clearData
exports.getData = getData