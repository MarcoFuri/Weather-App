import { useSelector } from "react-redux"
import Col from "react-bootstrap/Col"
import weatherIcons from "./WeatherCondition"


function NextDaysForecast () {

    const forecastArray = useSelector(state => state.forecast.forecastArray)

    const filteredArray = forecastArray.filter((el) => {
        return el.hour == 12
    })
    console.log("all right buddy, you got your filtered array", filteredArray)

    return (
        <>
            {filteredArray.map((el, index) => 
                <Col key={index} className="weatherBox col-2 d-flex flex-column align-items-center py-4 mb-3 gap-2">
                    <div className="fs-6 mb-2">
                        {el.day}/{el.month}
                    </div>
                    <div>
                        {weatherIcons[el.weathersForecast] ? weatherIcons[el.weathersForecast] : el.weathersForecast}
                    </div>
                    <div className="fs-3">
                        {el.temperaturesForecast}°C
                    </div>
                </Col>
            
            )}
        </>
    )
}

export default NextDaysForecast