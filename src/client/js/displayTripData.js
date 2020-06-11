// async get request
const getData = async (url = 'http://localhost:8000/getWeatherData') => {
    console.log('Got the data, mam')
    const request = await fetch(url);
    try {
        const allData = await request.json();
        console.log(allData)
        // document.getElementById('city').innerHTML = allData.newEntry.city;
        // document.getElementById('description').innerHTML = allData.newEntry.description;
        // document.getElementById('temp').innerHTML = allData.newEntry.temperature + ' °C';
    } catch (error) {
        console.log("error", error);
    }
}

exports.getData = getData
