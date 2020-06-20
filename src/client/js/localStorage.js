const { getData } = require('./getDisplayData')
const { displaySavedTrips } = require('./userTrips')
let tripObject = {trip: []}

const setData = () => {
    getData()
    .then(data => {
        if(!JSON.parse(localStorage.getItem('trips'))) {
            console.log(data)
            tripObject.trip.push(data)
            return  localStorage.setItem('trips', JSON.stringify(tripObject.trip))
        }
        else {
            const savedTrips = JSON.parse(localStorage.getItem('trips'))
            savedTrips.push(data)
            return  localStorage.setItem('trips', JSON.stringify(savedTrips))
        }
    })
    .then( () => displaySavedTrips())
}

// function removeData() {
//     localStorage.removeItem('trips')
// }

document.getElementById('saved-trips').addEventListener('click', removeTrip)

function removeTrip() {

    if (event.target.nodeName === 'BUTTON') {   const tripToDelete = document.getElementById('saved-trips').removeChild(event.target.parentNode)
        console.log(event.target.parentNode)
        const storedTrips = JSON.parse(localStorage.getItem('trips'))
        console.log(storedTrips)

        const tripsLeft = storedTrips.filter(trip => {
            console.log(trip)
            return trip.newEntry.city+trip.newEntry.tripDuration != tripToDelete.id //in case there are more then 1 trip to one destination
        })
        console.log(tripsLeft)
        return  localStorage.setItem('trips', JSON.stringify(tripsLeft))
    }

}

exports.setData = setData
// exports.removeData = removeData
exports.removeTrip = removeTrip
