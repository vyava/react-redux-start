import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";


function set(reducer, action){
    // console.log(action)
    console.log(reducer)
    // action.setActive("true")
    // console.log(action)
}

function A(props){
    // console.log(props)
    return (
        <div className="container">
            <button onClick={() => set(props.reducer, props.actions)}>State Change</button>
            Component A
        </div>
    )
}

function mapStateToProps(state){
    return state;
}

function mapActionsToProps(dispatch){
    return {
        actions : bindActionCreators(Object.assign(
            {},
            actions
        ), dispatch)
    }
}

export default connect(mapStateToProps, mapActionsToProps)(A);