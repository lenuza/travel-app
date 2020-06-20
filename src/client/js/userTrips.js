const allTrips = document.getElementById('saved-trips')

if(localStorage.getItem('trips')) {
    const getSavedTrips = JSON.parse(localStorage.getItem('trips'))
    // const trips = getSavedTrips[0].trips
    console.log(getSavedTrips)
    for (var i = 0; i < getSavedTrips.length; i++) {
        const holder = document.createElement('div')
        holder.setAttribute('class', 'user-trips')
        const parag1 = document.createElement('p')
        const parag2 = document.createElement('p')
        // const parag3 = document.createElement('p')
        const parag3 = document.createElement('img')
        const button = document.createElement('button')
        parag1.innerHTML = 'Trip to: ' + getSavedTrips[i].newEntry.city + ' for ' + getSavedTrips[i].newEntry.tripDuration + ' days'
        parag2.innerHTML = 'Weather will be '+ getSavedTrips[i].newEntry.description + ' with temperatures around ' + getSavedTrips[i].newEntry.temperature + ' °C.'
        // parag3.innerHTML = getSavedTrips[i].newEntry.temperature + ' °C'
        parag3.setAttribute('src', getSavedTrips[i].newEntry.image)
        parag3.setAttribute('alt', getSavedTrips[i].newEntry.imgTag)
        button.setAttribute('class', 'button')
        button.setAttribute('id', 'remove-trip')
        button.innerHTML = "remove trip"
        holder.setAttribute('id', getSavedTrips[i].newEntry.city + getSavedTrips[i].newEntry.tripDuration)
        holder.appendChild(parag1)
        holder.appendChild(parag2)
        holder.appendChild(parag3)
        holder.appendChild(button)
        allTrips.appendChild(holder)
    }
}

const displaySavedTrips = () => {
    let getSavedTrip = JSON.parse(localStorage.getItem('trips'))
    let trip = getSavedTrip[getSavedTrip.length - 1]
    console.log(trip)

    if(getSavedTrip) {
        console.log(getSavedTrip)
        const holderDiv = document.createElement('div')
        holderDiv.setAttribute('class', 'user-trips')
        const parag5 = document.createElement('p')
        const parag6 = document.createElement('p')
        // const parag7 = document.createElement('p')
        const parag7 = document.createElement('img')
        parag5.innerHTML = 'Trip to: ' + trip.newEntry.city + ' for ' + trip.newEntry.tripDuration  + ' days'
        parag6.innerHTML = 'Weather will be '+ trip.newEntry.description + ' with temperatures around ' + trip.newEntry.temperature + ' °C.'
        // parag7.innerHTML = trip.newEntry.temperature + ' °C'
        parag7.setAttribute('src', trip.newEntry.image)
        parag7.setAttribute('alt', trip.newEntry.imgTag)
        holderDiv.setAttribute('id', trip.newEntry.city + trip.newEntry.tripDuration)
        holderDiv.appendChild(parag5)
        holderDiv.appendChild(parag6)
        holderDiv.appendChild(parag7)
        // holderDiv.appendChild(parag8)
        allTrips.appendChild(holderDiv)
    }
}

exports.displaySavedTrips = displaySavedTrips