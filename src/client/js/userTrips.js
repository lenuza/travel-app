// const allTrips = document.getElementById('saved-trips')
// const getSavedTrip = JSON.parse(localStorage.getItem('trips'))

// if(JSON.parse(localStorage.getItem('trips'))) {

//     for (var i = 0; i < getSavedTrip.length; i++) {
//         const holder = document.createElement('div')
//         holder.setAttribute('class', 'user-trips')
//         const parag1 = document.createElement('p')
//         const parag2 = document.createElement('p')
//         const parag3 = document.createElement('p')
//         const parag4 = document.createElement('img')
//         const button = document.createElement('button')
//         parag1.innerHTML = getSavedTrip[i].newEntry.city
//         parag2.innerHTML = getSavedTrip[i].newEntry.description
//         parag3.innerHTML = getSavedTrip[i].newEntry.temperature + ' °C'
//         parag4.setAttribute('src', getSavedTrip[i].newEntry.image)
//         parag4.setAttribute('alt', getSavedTrip[i].newEntry.imgTag)
//         button.setAttribute('class', 'button')
//         button.setAttribute('id', 'remove-trip')
//         button.innerHTML = "remove trip"
//         holder.setAttribute('id', i)
//         holder.appendChild(parag1)
//         holder.appendChild(parag1)
//         holder.appendChild(parag3)
//         holder.appendChild(parag4)
//         holder.appendChild(button)
//         allTrips.appendChild(holder)
//     }
// }

// const savedTrips = () => {
//     const savedTrip = JSON.parse(localStorage.getItem('trips'))
//     console.log(savedTrip)
//     displaySavedTrips(savedTrip)
// }
// const displaySavedTrips = () => {

//         const holderDiv = document.createElement('div')
//         holderDiv.setAttribute('class', 'user-trips')
//         const parag5 = document.createElement('p')
//         const parag6 = document.createElement('p')
//         const parag7 = document.createElement('p')
//         const parag8 = document.createElement('img')
//         parag5.innerHTML = getSavedTrip[getSavedTrip.length -1].newEntry.city
//         parag6.innerHTML = getSavedTrip[getSavedTrip.length -1].newEntry.description
//         parag7.innerHTML = getSavedTrip[getSavedTrip.length -1].newEntry.temperature + ' °C'
//         parag8.setAttribute('src', getSavedTrip[getSavedTrip.length -1].newEntry.image)
//         parag8.setAttribute('alt', getSavedTrip[getSavedTrip.length -1].newEntry.imgTag)
//         holderDiv.appendChild(parag5)
//         holderDiv.appendChild(parag6)
//         holderDiv.appendChild(parag7)
//         holderDiv.appendChild(parag8)
//         allTrips.appendChild(holderDiv)
// }

// // exports.savedTrips = savedTrips
// exports.displaySavedTrips = displaySavedTrips