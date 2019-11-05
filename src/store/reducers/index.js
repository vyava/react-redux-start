import { GET_NEWS, NEWS_RECEIVED } from "../actions/constants";

// const initialState = {
//     loading : false,
//     news : []
// }

export function indexReducer(state = {}, action){
    // console.log(action)
    switch (action.type) {
        case GET_NEWS:
            return {
                ...state,
                loading : true
            };
        case NEWS_RECEIVED:
            return {
                ...state,
                loading : false,
                news : action.json
            };
        default:
            return state;
    }
}