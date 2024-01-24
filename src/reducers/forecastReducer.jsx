import { SET_FORECAST } from "../actions/userActions"

const initialState = {
    forecastArray: []
}

const forecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state, 
                forecastArray: action.payload
            };
        default:
            return state;
    }
}

export default forecastReducer