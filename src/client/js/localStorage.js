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

function removeData (){
    localStorage.removeItem('trips')
}

exports.setData = setData
exports.removeData = removeData
