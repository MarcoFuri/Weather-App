import {useEffect, useState} from "react"
import weatherIcons from "./WeatherCondition"

const urlEndpoint = "http://api.openweathermap.org/data/2.5/forecast?q="
const apiKeyFetch = "&APPID=0b11e5502dd818d7a1d24f57f3232a4b"


function Forecast (props) {
    const [dataToRender, setDataToRender] = useState([])
    
    const fetchData = async () => {
        try {
            const res = await fetch(urlEndpoint + props.city + apiKeyFetch)
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
    }, [])

    const init = async () => {
        const result = await fetchData()
        saveData(result.list)
    }

    
    function saveData(array) {
        let forecastArray = []
        for (let i = 0 ; i < 8 && i < array.length ; i++) {
            const forecast = array[i]
            console.log(forecast)
            const hourForecast = forecast.dt_txt.substring(11, 13)
            console.log(hourForecast)
            const weathersForecast = forecast.weather[0].main
            console.log(weathersForecast)
            const temperaturesForecast = Math.floor(forecast.main.temp - 273.15)
            console.log(temperaturesForecast)
            const feelingLikeTemperaturesForecast = Math.floor(forecast.main.feels_like - 273.15)
            console.log(feelingLikeTemperaturesForecast)
            forecastArray.push({
                hour: hourForecast,
                weathersForecast,
                temperaturesForecast,
                feelingLikeTemperaturesForecast
            })
        }
        console.log(forecastArray)
        setDataToRender(forecastArray)
    }

    return (
        <>
            
        {dataToRender.map((el, index) => 
                <div key={index} className="d-flex flex-column">
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