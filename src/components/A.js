import React from "react";
// import { bindActionCreators } from "redux";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";


function A(props){
    console.log(props)
    return (
        <div className="container">
            <p>{JSON.stringify(props.active)}</p>
            <button onClick={()=> props.dispatch(actions.setActive())}>Active</button>
            <button onClick={()=> props.dispatch(actions.setPassive())}>Passive</button>
        </div>
    )
}


const mapStateToProps = state => {
    // console.log(state.state)
    return {
        active: state.state.active
    }
};


export default connect(mapStateToProps)(A);