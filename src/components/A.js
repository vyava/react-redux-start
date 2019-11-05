import React from "react";
// import { bindActionCreators } from "redux";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";


function A(props){
    // let result = props.getNews()
    // console.log(result)
    return (
        <div className="container">
            <button className="default" onClick={props.getNews}>Active</button>
            {/* <button className={props.className} onClick={()=> props.dispatch(actions.setPassive())}>Passive</button> */}
        </div>
    )
}


// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         news : state
//     }
// };

const mapDispatchToProps = {
    getNews : actions.getNews
}

A = connect(null, mapDispatchToProps)(A);

export default A;