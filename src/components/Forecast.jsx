import {useSelector} from "react-redux";
import {useRef} from "react";

export default function Forecast ({data}){
    const {city, loaded} = useSelector(state => state)
    const prevCity = useRef(city)

    if (!data) return;

    const {Date: date, Time: time, temprature: temperature, feels} = data

    return(
        <div className='border rounded py-4 px-5 m-1'>
            <p>Date: {date}</p>
            <p>City: {loaded ? city : prevCity.current}</p>
            <p>Time: {time}</p>
            <p>Temperature: {temperature}</p>
            <p>Feels like: {feels}</p>
        </div>

    )
}