import Forecast from './Forecast'
import {useSelector} from "react-redux";
import {useWeatherHandlers} from "../hooks/useWeatherHandlers";
import {Button} from "./Button";

export default function WeatherApp (){
    const {forecasts, forecast, city, moreForecasts} = useSelector(state => state)

    const {
        changeCityHandler,
        cityForecastsHandler,
        cityForecastHandler
    } = useWeatherHandlers()

    return (
        <div className="container d-flex flex-column align-items-center py-3">
            <h2>Weather App</h2>
            <input
                className='form-text'
                defaultValue={city}
                onChange={changeCityHandler}
            />
            <Button
                onCLickHandler={cityForecastHandler}
                title='Submit'
                className='btn btn-primary m-2'
            />
            <p>Some content</p>

            {!moreForecasts && forecast && <Forecast data={forecast} city={city} /> }


            {
                forecast && <Button
                    onCLickHandler={cityForecastsHandler}
                    title='Show 5 Day Weather'
                    className='btn btn-light m-2'
                />
            }
            <div className='d-flex w-100 justify-content-around'>
                {moreForecasts && forecasts?.length ? forecasts?.map(cityForecast=>  <Forecast data={cityForecast} />): null}
            </div>

        </div>
    )
}