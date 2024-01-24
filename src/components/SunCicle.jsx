import Col from "react-bootstrap/Col"

function SunCyrcle (props) {

    const sunriseValue = props.sunrise
    const sunsetValue = props.sunset

    const sunriseDate = new Date(sunriseValue * 1000)
    const sunsetDate = new Date(sunsetValue * 1000)

    let hourSunrise = sunriseDate.getHours()
    let minutesSunrise = sunriseDate.getMinutes()
    if (minutesSunrise < 10) {
        minutesSunrise = "0" + minutesSunrise
    } else if (minutesSunrise == 0){
        minutesSunrise = "00"
    }

    let hourSunset = sunsetDate.getHours()
    let minutesSunset = sunsetDate.getMinutes()
    if (minutesSunset < 10) {
        minutesSunset = "0" + minutesSunset
    } else if (minutesSunset == 0){
        minutesSunset = "00"
    }

    const sunrise = `${hourSunrise}:${minutesSunrise}`
    const sunset = `${hourSunset}:${minutesSunset}`

    // return console.log(sunrise, sunset)
    return (
        <div className="d-flex gap-5 justify-content-evenly mt-4">
            <Col className="weatherBox col-7 text-center p-2">
                <div>
                    <svg className="mt-2" width={"50px"} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707m11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0M11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                <div className="fs-2">
                    {sunrise}
                </div>
            </Col>
            <Col className="weatherBox col-7 text-center p-2">
                <div>
                <svg className="mt-2" width={"50px"} xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                    <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7m3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10m13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
                </svg>
                </div>
                <div className="fs-2">
                    {sunset}
                </div>
            </Col>
        </div>
    )
   
}

export default SunCyrcle