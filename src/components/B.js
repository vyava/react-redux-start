import React from "react";
import { bindActionCreators } from "redux";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

function B(props){
    console.log(props)
    return (
        <div className="container">
            {
                props.state.active ? <p>"Active"</p> : <p>"Passive"</p>
            }
            Component B
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

export default connect(mapStateToProps, mapActionsToProps)(B);