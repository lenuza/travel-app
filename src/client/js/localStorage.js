const { getData } = require('./getDisplayData')
const { displaySavedTrips } = require('./userTrips')
let tripObject = {trip: []}

const setData = () => {
    getData()
    .then(data => {
        tripObject.trip.push(data)
        localStorage.setItem('trips', JSON.stringify(tripObject.trip))
        displaySavedTrips()
    })
}

function removeData (){
    localStorage.removeItem('trips')
}

exports.setData = setData
exports.removeData = removeData
