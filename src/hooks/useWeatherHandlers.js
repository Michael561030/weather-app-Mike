import {useDispatch, useSelector} from "react-redux";

export function useWeatherHandlers() {

    const { city } = useSelector(state => state)

    const dispatch = useDispatch()

    function changeCityHandler(e) {
        dispatch({
            type: 'CHANGE_CITY',
            payload: {value: e.target.value}
        })
    }

    function cityForecastsHandler(){
        dispatch({
            type: 'GET_CITY_FORECASTS',
            payload: {cityName: city}
        })
    }

    function cityForecastHandler() {
        dispatch({
            type: 'GET_CITY_FORECAST',
            payload: {cityName: city}
        })
    }


    return {
        changeCityHandler,
        cityForecastsHandler,
        cityForecastHandler
    }
}