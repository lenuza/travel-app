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
    const tripToDelete = document.getElementById('saved-trips').removeChild(event.target.parentNode)
    console.log(tripToDelete.id)
    const tripsLeft = JSON.parse(localStorage.getItem('trips')).filter(trip => {
        trip.newEntry.city+trip.newEntry.tripDuration != tripToDelete.id //in case there are more then 1 trip to one destination
    })
    return  localStorage.setItem('trips', JSON.stringify(tripsLeft))
}

exports.setData = setData
exports.removeData = removeData
exports.removeTrip = removeTrip
