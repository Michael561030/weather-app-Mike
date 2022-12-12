import {getData} from "../mocks/getData";
import getCity from "../helpers/getCity";

export function reducer(state = getData(), {type, payload}) {

    switch (type) {
        case 'CHANGE_CITY':
            return {...state, city: payload.value, loaded: false}
        case 'GET_CITY_FORECAST':
            const city2 = getCity(state.States, payload.cityName)
            return {...state, forecast: city2?.forecast?.[0], moreForecasts: false, loaded: true}
        case 'GET_CITY_FORECASTS':
            const city = getCity(state.States, payload.cityName)
            return {...state, forecasts: city?.forecast, moreForecasts: true, loaded: true}
        default:
            return state
    }
}