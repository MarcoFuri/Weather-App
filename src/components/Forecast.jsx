import {useEffect, useState} from "react"
import weatherIcons from "./WeatherCondition"
import { useSelector, useDispatch } from "react-redux"
import { setForecast } from "../actions/userActions"

const urlEndpoint = "http://api.openweathermap.org/data/2.5/forecast?q="
const apiKeyFetch = "&APPID=0b11e5502dd818d7a1d24f57f3232a4b"


function Forecast () {

    const nameCitySearched = useSelector(state => state.citySearched)

    const dispatch = useDispatch()
    const forecast = useSelector(state => state.forecast.forecastArray)
    
    const [hourlyForecastArray, setHourlyForecastArray] = useState([])
    
    const fetchData = async () => {
        try {
            const res = await fetch(urlEndpoint + nameCitySearched + apiKeyFetch)
            console.log(res)
            if (!res.ok) {
                console.log("response not successful")
            } else {
                console.log("response successful")
                let data = await res.json()
                console.log("res body from NTs component", data)
                return data
            }
        }
        catch (error) {
            alert("Something went wrong", error)
        }
    } 

    useEffect( () => {
        init()
    }, [nameCitySearched])

    const init = async () => {
        const result = await fetchData()
        saveData(result.list)
    }
    
    function saveData(array) {
        let forecastArray = []
        for (let i = 0 ; i < array.length ; i++) {

            const forecast = array[i]
            const hourForecast = forecast.dt_txt.substring(11, 13)
            const dayForecast = forecast.dt_txt.substring(8, 10)
            const monthForecast = forecast.dt_txt.substring(5, 7)
            const weathersForecast = forecast.weather[0].main
            const temperaturesForecast = Math.floor(forecast.main.temp - 273.15)
            const feelingLikeTemperaturesForecast = Math.floor(forecast.main.feels_like - 273.15)

            forecastArray.push({
                hour: hourForecast,
                day: dayForecast,
                month: monthForecast,
                weathersForecast,
                temperaturesForecast,
                feelingLikeTemperaturesForecast
            })
        }
        console.log("i'm printing the forecast before setting it in the store", forecastArray)
        dispatch(setForecast(forecastArray))
        
        setHourlyForecastArray(forecastArray.slice(0, 9))
        
    }

    return (
        <>
            
        {hourlyForecastArray.map((el, index) => 
                <div key={index} className="d-flex flex-column ms-1">
                    <div>
                        {el.hour}
                    </div>
                    <div className="fs-5 m-1">
                        {weatherIcons[el.weathersForecast] ? weatherIcons[el.weathersForecast] : el.weathersForecast}
                    </div>
                    <div className="fs-5 m-1">
                        {el.temperaturesForecast}°
                    </div>
                </div>
                )}
            
        </>
    )
}

export default Forecast