export const SET_FORECAST = "SET_FORECAST"
export const SET_CITY_SEARCHED = "SET_CITY_SEARCH"

export const setForecast = (newForecastArray) => {
    return {
        type: SET_FORECAST,
        payload: newForecastArray
    }
}

export const setCitySearched = (newCitySearched) => {
    return {
        type: SET_CITY_SEARCHED,
        payload: newCitySearched
    }
}