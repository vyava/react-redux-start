const SET_ACTIVE = "SET_ACTIVE";
const SET_PASSIVE = "SET_PASSIVE";

export function setActive(value){
    console.log("Value : " + value)
    return {
        type : SET_ACTIVE,
        active : value
    }
}

export function setPassive(value){
    return {
        type : SET_PASSIVE,
        active : value
    }
}