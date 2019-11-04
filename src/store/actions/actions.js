const SET_ACTIVE = "SET_ACTIVE";
const SET_PASSIVE = "SET_PASSIVE";

export function setActive(){
    return {
        type : SET_ACTIVE,
        active : true
    }
}

export function setPassive(){
    return {
        type : SET_PASSIVE,
        active : false
    }
}