const savedTrips = () => {
    const savedTrip = JSON.parse(localStorage.getItem('trips'))
    console.log(savedTrip)
    displaySavedTrips(savedTrip)
}

const displaySavedTrips = (savedTrip) => {
    const allTrips = document.getElementById('saved-trips')
    for (var i = 0; i < savedTrip.length; i++) {
        const holder = document.createElement('div')
        holder.setAttribute('class', 'user-trips')
        const parag1 = document.createElement('p')
        const parag2 = document.createElement('p')
        const parag3 = document.createElement('p')
        const parag4 = document.createElement('image')
        parag1.innerHTML = savedTrip[i].newEntry.city
        parag2.innerHTML = savedTrip[i].newEntry.description
        parag3.innerHTML = savedTrip[i].newEntry.temperature + ' °C'
        parag4.setAttribute('src', savedTrip[i].newEntry.image)
        parag4.setAttribute('alt', savedTrip[i].newEntry.imgTag)
        holder.appendChild(parag1)
        holder.appendChild(parag1)
        holder.appendChild(parag3)
        holder.appendChild(parag4)
        allTrips.appendChild(holder)
    }
}

exports.savedTrips = savedTrips
exports.displaySavedTrips = displaySavedTrips