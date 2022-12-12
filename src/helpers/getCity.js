export default function getCity(states, cityName) {
    if (!states || !cityName) return
    let city;
    states = Object.values(states)
    states.forEach(stateName => {
        const cityForecast = stateName?.cities?.filter(item => item.name === cityName)
        if (cityForecast.length)  {
            city = cityForecast
        }
    })
    return city?.[0]
}
