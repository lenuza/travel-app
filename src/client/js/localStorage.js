const { getData } = require('./getDisplayData')
const { displaySavedTrips } = require('./userTrips')
let tripObject = {trip: []}

function setData (){
    getData()
    .then(data => {
        console.log(data)
        tripObject.trip.push(data)
        localStorage.setItem('trips', JSON.stringify(tripObject.trip))
        displaySavedTrips(data)
    })
}

function removeData (){
    localStorage.removeItem('trips')
}


exports.setData = setData
exports.removeData = removeData
