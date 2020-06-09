//endpoint for all routes
require('dotenv').config()
const projectData = {};
const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('src/client/view/index.html')
})

// set port
const port = process.env.port || 8000;
const server = app.listen(port, () => {
    console.log(`Hello, listening on port ${port} ${process.env.GEONAMES_APP_ID}`);
});

app.get('/getWeatherData', (req, res) => {
    res.send(projectData);
    console.log('data sent')
});

app.post('/weatherData', (req, res) => {
    var newEntry = {
        temperature: req.body.temperature,
        city: req.body.city,
        date: req.body.date,
        content: req.body.content
    }

    projectData['newEntry'] = newEntry;
    console.log(projectData)
})

function getWeather() {
    console.log(API_ID)
    const city = document.getElementById('trip-destination').value
    cityWeather(url, city, API_ID)
        .then(function (data) {
            console.log(data);
            postData('/weatherData', {
                temperature: data.main.temp,
                city: data.name,
                date: new Date(),
                content: content.value
            })
        })
        .then(function () {
            getData();
        })

}
