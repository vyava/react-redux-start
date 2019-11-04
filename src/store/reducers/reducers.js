const initialState = {
    active : false
}

export function indexReducer(state = initialState, action){
    switch (action.type) {
        case "SET_ACTIVE":
            return {
                ...state,
                active : true
            };
        case "SET_PASSIVE":
            return {
                ...state,
                active : false
            };
        default:
            return state;
    }
}