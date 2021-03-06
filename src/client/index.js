import './styles/styles.scss'
import './styles/saved-trips.scss'
import 'regenerator-runtime/runtime'
import { postData } from './js/fetchPostData'
import { getWeather } from './js/fetchPostData'
import { cityWeather } from './js/fetchPostData'
import { getData } from './js/getDisplayData'
import { displayData } from './js/getDisplayData'
import { clearData } from './js/getDisplayData'
import { setData } from './js/localStorage'
import { displaySavedTrips } from './js/userTrips'
import { removeTrip } from './js/localStorage'
import { fetchGeoName } from './js/fetchGeoData'
import { parseGeoData } from './js/parseGeoData'

export {
    postData,
    getWeather,
    cityWeather,
    getData,
    setData,
    displaySavedTrips,
    removeTrip,
    fetchGeoName,
    parseGeoData,
    clearData,
    displayData
}