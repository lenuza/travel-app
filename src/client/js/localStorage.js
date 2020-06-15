const { getData } = require('./displayTripData')

function setData (){
    getData()
    .then(data => {
        console.log(data)
        localStorage.setItem('tripTo', JSON.stringify(data))
    })
    .then( ( ) => {
        const savedTrip = JSON.parse(localStorage.getItem('tripTo'))
        console.log(savedTrip)
        return savedTrip
    })
}

exports.setData = setData