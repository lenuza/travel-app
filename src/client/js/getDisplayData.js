// async get request
const getData = async (url = 'http://localhost:8000/getWeatherData') => {
    const request = await fetch(url)
    try {
        const allData = await request.json()
        console.log(allData)
        return allData
    } catch (error) {
        console.log("error", error)
    }
}

const displayData = () => {
    getData()
    .then(data => {
        console.log(data)
        document.getElementById('city').innerHTML = data.newEntry.city
        document.getElementById('description').innerHTML = data.newEntry.description
        document.getElementById('temp').innerHTML = data.newEntry.temperature + ' °C'
        document.getElementById('trip-img').setAttribute('src', data.newEntry.image)
        document.getElementById('trip-img').setAttribute('alt', data.newEntry.imgTag)
    })
}


exports.displayData = displayData
exports.getData = getData