import { SET_CITY_SEARCHED } from "../actions/userActions";

const initialState = ""

const citySearchedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY_SEARCHED:
            return state = action.payload

        default:
            return state
    }
}

export default citySearchedReducer