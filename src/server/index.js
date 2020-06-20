require('dotenv').config()
//endpoint for all routes
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

app.post('/weatherData', (req, res) => {
    var newEntry = {
        city: req.body.city,
        description: req.body.description,
        temperature: req.body.temperature,
        tripDuration: req.body.tripDuration,
        image: req.body.image,
        imgTag: req.body.imgTag
    }

    // projectData.trips.push(newEntry)
    projectData['newEntry'] = newEntry
    console.log(newEntry)

    res.json(newEntry)
})

app.get('/getWeatherData', (req, res) => {
    res.send(projectData);
    console.log('data sent')
    console.log(projectData)
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

module.exports = app