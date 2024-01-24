import {combineReducers} from "redux"
import forecastReducer from "./forecastReducer";
import citySearchedReducer from "./citySearchedReducer";

const rootReducer = combineReducers({
    forecast: forecastReducer,
    citySearched: citySearchedReducer
})

export default rootReducer
