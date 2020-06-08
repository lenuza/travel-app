const url = 'https://http://api.geonames.org/searchJSON?q='


document.getElementById('trip-destination').addEventListener()
// 'paris,FR&maxRows=1&username=lenuza'

//async post request
// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     });

//     try {
//         const newData = await response.json();
//         return newData;
//     } catch (error) {
//         console.log("error", error);
//     }
// }

//get the city and then fetch, post and update UI
function getWeather() {
    const city = document.getElementById('trip-destination').value
    cityWeather(url, city, apiID)
        .then(function (data) {
            console.log(data);
            // postData('/weatherData', {
            //     temperature: data.main.temp,
            //     city: data.name,
            //     date: new Date(),
            //     content: content.value
            // })
        })
        // .then(function () {
        //     getData();
        // })

}

//fetch data from the weather api
const cityWeather = async (url, city, key) => {

    const res = await fetch(`${url}${city}&maxRows=1&username=${key}`)
    try {
        const weatherData = await res.json();

        return weatherData;
    } catch (error) {
        console.log('error', error);
    }
}

// async get request
// const getData = async (url = '/getWeatherData') => {

//     const request = await fetch(url);

//     try {
//         const allData = await request.json();
//         // document.getElementById('city').innerHTML = allData.newEntry.city;
//         // document.getElementById('date').innerHTML = allData.newEntry.date;
//         // document.getElementById('temp').innerHTML = allData.newEntry.temperature + ' °F';
//         // document.getElementById('content').innerHTML = allData.newEntry.content;

//         // feelings.value = '';
//     } catch (error) {
//         console.log("error", error);
//     }
// }