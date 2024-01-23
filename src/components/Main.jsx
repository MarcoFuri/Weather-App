import { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Forecast from "./Forecast"
// import TemperatureHalf from "../assets/temperature.svg"
import Chart from "./Chart"

const urlEndpoint = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKeyFetch = "&APPID=0b11e5502dd818d7a1d24f57f3232a4b"



function Main() {
   
    const PAGE_STATES = {
        INITIAL_STATE: "INITIAL_STATE",
        SEARCH_ERROR: "SEARCH_ERROR",
        SEARCH_SUCCESS: "SEARCH_SUCCESS"
    }

    const [pageState, setPageState] = useState(PAGE_STATES.INITIAL_STATE)
    const [inputSearch, setInputSearch] = useState("")
    const [citySearched, setCitySearched] = useState("")
    const [city, setCity] = useState({})


    const fetchData = async (citySearched) => {
        try {
            const res = await fetch(urlEndpoint + citySearched + apiKeyFetch)
            console.log(res)
            if (!res.ok) {
                setPageState(PAGE_STATES.SEARCH_ERROR)
                console.log("fetch error")
            } else {
                console.log("fetch ok")
                let data = await res.json()
                console.log("res body", data)
                setCity(data)
                setPageState(PAGE_STATES.SEARCH_SUCCESS)
            }
        }
        catch (error) {
            console.log("error")
        }
    }

    function clickHandler() {
        setCitySearched(inputSearch)
        fetchData(inputSearch)
    }

    function handleKeyDown(e) {
        if (e.key === "Enter"){ 
        setCitySearched(inputSearch)
        fetchData(inputSearch)
        }
    }

    return (
        <>
            <div className="m-3 d-flex gap-2 rounded-pill p-1 w-50 position-absolute bg-warning top-0 end-0">
                <Button className="bg-warning border border-0 rounded-pill" onClick={clickHandler}><svg style={{ width: "15px" }} className="bg-warning p-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg></Button>
                <input className="border border-0 bg-warning search_input" type="search" placeholder="Search" aria-label="search bar" onChange={(e) => setInputSearch(e.target.value)} onKeyDown={handleKeyDown}/>
            </div>  


            {pageState === PAGE_STATES.INITIAL_STATE &&
                <h1 className="m-5">Welcome to the newest <span className="fw-bold display-3">Weather App</span></h1>}

            {/* if the city doesn't exist*/}
            {pageState === PAGE_STATES.SEARCH_ERROR &&
                <h1 className="m-5">I'm sorry, your research "{citySearched}" doesn't exist.</h1>}
                
            {pageState === PAGE_STATES.SEARCH_SUCCESS &&
                <Container fluid>
                    <h2 className="fs-2 my-5 ms-4">Weather for <span className="fw-bold display-3">{city?.name}</span></h2>
                    <h4 className="fs-4 ms-4 mb-4 text-center">Currently: <span className="fs-2 fw-bold ms-2">{city?.weather?.[0]?.main}</span></h4>
                    <Row className="gap-4 justify-content-around row-cols-2">
                        
                        <Col className="col-11 rounded-pill border border-0">
                            <p className="ms-5 pt-3 fs-6 fw-bold">HOURLY FORECAST</p>
                            <div className="text-center text-white d-flex justify-content-evenly pb-4">
                                <Forecast city={citySearched}/>
                            </div>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold"><svg style={{width: "20px"}} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z"/>
                                    </svg><span className="ms-3 fs-6">TEMPERATURE</span></h5>
                                    <hr className="text-white" />
                                    <h5>{(Math.floor(city?.main?.temp - 273.15)) + "° C"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold"><svg style={{width: "20px"}} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/>
                                    </svg><span className="ms-3 fs-6">WIND</span></h5>
                                    <hr className="text-white" />
                                    <h5>{(Math.floor(city?.wind?.speed)) + " Km / H"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold"><svg style={{width: "20px"}} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/>
                                    </svg><span className="ms-3 fs-6">HUMIDITY</span></h5>
                                    <hr className="text-white" />
                                    <h5>{Math.floor(city?.main?.humidity) + "%"}</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-10 col-lg-5">
                            <Card className="rounded-pill border border-0 pt-2 text-center">
                                <Card.Body>
                                    <h5 className="fw-bold fs-6">PRESSURE</h5>
                                    <hr className="text-white" />
                                    <h5>{city?.main?.pressure} hPa</h5>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <hr className="mt-5" />
                    <div className="rounded-pill m-4 p-3">
                        <Chart/>
                    </div>
                </Container>
            }

        </>
    )
}

export default Main