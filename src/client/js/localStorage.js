const {
    getData
} = require('./getDisplayData')
const {
    displaySavedTrips
} = require('./userTrips')
let tripObject = {
    trip: []
}

document.getElementById('saved-trips').addEventListener('click', removeTrip)

//create localStorage or add to it
const setData = () => {
    getData()
        .then(data => {
            if (!JSON.parse(localStorage.getItem('trips'))) {
                tripObject.trip.push(data)
                return localStorage.setItem('trips', JSON.stringify(tripObject.trip))
            } else {
                const savedTrips = JSON.parse(localStorage.getItem('trips'))
                savedTrips.push(data)
                return localStorage.setItem('trips', JSON.stringify(savedTrips))
            }
        })
        .then(() => displaySavedTrips())
}

function removeTrip() {

    if (event.target.nodeName === 'BUTTON') {
        const tripToDelete = document.getElementById('saved-trips').removeChild(event.target.parentNode)
        const storedTrips = JSON.parse(localStorage.getItem('trips'))

        const tripsLeft = storedTrips.filter(trip => {
            return trip.newEntry.city + trip.newEntry.tripDuration != tripToDelete.id //in case there are more then 1 trip to one destination
        })
        return localStorage.setItem('trips', JSON.stringify(tripsLeft))
    }

}

exports.setData = setData
exports.removeTrip = removeTrip