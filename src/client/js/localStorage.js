const { getData } = require('./getDisplayData')
const { savedTrips } = require('./userTrips')
const tripArray = []

function setData (){
    getData()
    .then(data => {
        console.log(data)
        tripArray.push(data)
        localStorage.setItem('trips', JSON.stringify(tripArray))
    })
    .then( () => {
        savedTrips()
    })
}

function removeData (){
    localStorage.removeItem('trips')
    console.log('removed')
}


exports.setData = setData
exports.removeData = removeData
