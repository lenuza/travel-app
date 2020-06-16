const allTrips = document.getElementById('saved-trips')

if(JSON.parse(localStorage.getItem('trips'))) {
    const getSavedTrip = JSON.parse(localStorage.getItem('trips'))

    for (var i = 0; i < getSavedTrip.length; i++) {
        const holder = document.createElement('div')
        holder.setAttribute('class', 'user-trips')
        const parag1 = document.createElement('p')
        const parag2 = document.createElement('p')
        const parag3 = document.createElement('p')
        const parag4 = document.createElement('img')
        parag1.innerHTML = getSavedTrip[i].newEntry.city
        parag2.innerHTML = getSavedTrip[i].newEntry.description
        parag3.innerHTML = getSavedTrip[i].newEntry.temperature + ' °C'
        parag4.setAttribute('src', getSavedTrip[i].newEntry.image)
        parag4.setAttribute('alt', getSavedTrip[i].newEntry.imgTag)
        holder.appendChild(parag1)
        holder.appendChild(parag1)
        holder.appendChild(parag3)
        holder.appendChild(parag4)
        allTrips.appendChild(holder)
    }
}

// const savedTrips = () => {
//     const savedTrip = JSON.parse(localStorage.getItem('trips'))
//     console.log(savedTrip)
//     displaySavedTrips(savedTrip)
// }

const displaySavedTrips = (data) => {
        console.log(data)
        // const holderDiv = document.createElement('div')
        // holderDiv.setAttribute('class', 'user-trips')
        // const parag5 = document.createElement('p')
        // const parag6 = document.createElement('p')
        // const parag7 = document.createElement('p')
        // const parag8 = document.createElement('img')
        // parag5.innerHTML = data.newEntry.city
        // parag6.innerHTML = data.newEntry.description
        // parag7.innerHTML = data.newEntry.temperature + ' °C'
        // parag8.setAttribute('src', data.newEntry.image)
        // parag8.setAttribute('alt', data.newEntry.imgTag)
        // holderDiv.appendChild(parag5)
        // holderDiv.appendChild(parag6)
        // holderDiv.appendChild(parag7)
        // holderDiv.appendChild(parag8)
        // allTrips.appendChild(holderDiv)
}

// exports.savedTrips = savedTrips
exports.displaySavedTrips = displaySavedTrips