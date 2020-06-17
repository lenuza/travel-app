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
        document.getElementById('city').innerHTML = data[data.length - 1].city
        document.getElementById('description').innerHTML = data[data.length - 1].description
        document.getElementById('temp').innerHTML = data[data.length - 1].temperature + ' °C'
        document.getElementById('trip-img').setAttribute('src', data[data.length - 1].image)
        document.getElementById('trip-img').setAttribute('alt', data[data.length - 1].imgTag)
    })
}


exports.displayData = displayData
exports.getData = getData