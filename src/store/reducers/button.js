import { BUTTON_SUCCESS, BUTTON_PENDING, BUTTON_ERROR } from "../actions/constants";

const initialState = {
    buttonStatus : "default"
}

export function buttonReducer(state = initialState, action){
    switch (action.type) {
        case BUTTON_PENDING:
            return {
                ...state,
                buttonStatus : "pending"
            };
        case BUTTON_SUCCESS:
            return {
                ...state,
                buttonStatus : "success"
            };
        case BUTTON_ERROR:
            return {
                ...state,
                buttonStatus : "error"
            };
        default:
            return state;
    }
}