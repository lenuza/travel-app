import './styles/styles.scss'
import "regenerator-runtime/runtime";
import { postData } from './js/fetchGeoNames'
import { getWeather } from './js/fetchGeoNames'
import { cityWeather } from './js/fetchGeoNames'
import { getData } from './js/displayTripData'
import { setData } from './js/localStorage'

export {
    postData,
    getWeather,
    cityWeather,
    getData,
    setData
}