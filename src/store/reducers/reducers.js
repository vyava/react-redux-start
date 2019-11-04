const initialState = {
    active : false
}

export function indexReducer(state = initialState, action){
    switch (action.type) {
        case "SET_ACTIVE":
            return {
                ...state,
                active : action.value
            };
        case "SET_PASSIVE":
            return {
                ...state,
                active : action.value
            };
        default:
            return state;
    }
}