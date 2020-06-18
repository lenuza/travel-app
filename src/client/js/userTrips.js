const allTrips = document.getElementById('saved-trips')

if(JSON.parse(localStorage.getItem('trips'))) {
    const getSavedTrips = JSON.parse(localStorage.getItem('trips'))
    console.log(getSavedTrips)
    for (var i = 0; i < getSavedTrips.length; i++) {
        const holder = document.createElement('div')
        holder.setAttribute('class', 'user-trips')
        const parag1 = document.createElement('p')
        const parag2 = document.createElement('p')
        const parag3 = document.createElement('p')
        const parag4 = document.createElement('img')
        const button = document.createElement('button')
        parag1.innerHTML = getSavedTrips[i].newEntry.city
        parag2.innerHTML = getSavedTrips[i].newEntry.description
        parag3.innerHTML = getSavedTrips[i].newEntry.temperature + ' °C'
        parag4.setAttribute('src', getSavedTrips[i].newEntry.image)
        parag4.setAttribute('alt', getSavedTrips[i].newEntry.imgTag)
        button.setAttribute('class', 'button')
        button.setAttribute('id', 'remove-trip')
        button.innerHTML = "remove trip"
        holder.setAttribute('id', getSavedTrips[i].newEntry.city)
        holder.appendChild(parag1)
        holder.appendChild(parag2)
        holder.appendChild(parag3)
        holder.appendChild(parag4)
        holder.appendChild(button)
        allTrips.appendChild(holder)
    }
}

const displaySavedTrips = () => {
    const getSavedTrips = JSON.parse(localStorage.getItem('trips'))

    if(getSavedTrips) {
        console.log(getSavedTrips)
        const holderDiv = document.createElement('div')
        holderDiv.setAttribute('class', 'user-trips')
        const parag5 = document.createElement('p')
        const parag6 = document.createElement('p')
        const parag7 = document.createElement('p')
        const parag8 = document.createElement('img')
        parag5.innerHTML = getSavedTrips[getSavedTrips.length -1].newEntry.city
        parag6.innerHTML = getSavedTrips[getSavedTrips.length -1].newEntry.description
        parag7.innerHTML = getSavedTrips[getSavedTrips.length -1].newEntry.temperature + ' °C'
        parag8.setAttribute('src', getSavedTrips[getSavedTrips.length -1].newEntry.image)
        parag8.setAttribute('alt', getSavedTrips[getSavedTrips.length -1].newEntry.imgTag)
        holderDiv.appendChild(parag5)
        holderDiv.appendChild(parag6)
        holderDiv.appendChild(parag7)
        holderDiv.appendChild(parag8)
        allTrips.appendChild(holderDiv)
    }
}

exports.displaySavedTrips = displaySavedTrips