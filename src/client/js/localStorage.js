const { getData } = require('./getDisplayData')
const tripArray = []

function setData (){
    getData()
    .then(data => {
        console.log(data)
        tripArray.push(data)
        localStorage.setItem('trips', JSON.stringify(tripArray))
    })
    .then( () => {
        const savedTrip = JSON.parse(localStorage.getItem('trips'))
        console.log(savedTrip)
        return savedTrip
    })
}

function removeData (){
    localStorage.removeItem('trips')
    console.log('removed')
}


exports.setData = setData
exports.removeData = removeData