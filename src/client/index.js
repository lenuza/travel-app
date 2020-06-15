import './styles/styles.scss'
import "regenerator-runtime/runtime";
import { postData } from './js/fetchPostData'
import { getWeather } from './js/fetchPostData'
import { cityWeather } from './js/fetchPostData'
import { getData } from './js/getDisplayData'
import { setData } from './js/localStorage'
import { removeData } from './js/localStorage'

export {
    postData,
    getWeather,
    cityWeather,
    getData,
    setData,
    removeData
}