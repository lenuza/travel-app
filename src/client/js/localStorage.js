const { getData } = require('./getDisplayData')
const { displaySavedTrips } = require('./userTrips')
let tripObject = {trip: []}

const setData = () => {
    getData()
    .then(data => {
        console.log(data)
        tripObject.trip.push(data)
        return  localStorage.setItem('trips', JSON.stringify(tripObject.trip))
    })
    .then( () => displaySavedTrips())
}

function removeData() {
    localStorage.removeItem('trips')
}

document.getElementById('saved-trips').addEventListener('click', removeTrip)

function removeTrip() {
    document.getElementById('saved-trips').removeChild(event.target.parentNode)
    console.log(event.target.parentNode)
}

exports.setData = setData
exports.removeData = removeData
exports.removeTrip = removeTrip
