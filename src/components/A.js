import React from "react";
// import { bindActionCreators } from "redux";
import * as actions from "../store/actions/contentActions";
import { connect } from "react-redux";


let A = (props) => {
    // let result = props.getNews()
    return (
        <div className="container top">
            <div className={props.button.buttonStatus} id="result">Result</div>
            <button onClick={props.getNews}>Get</button>
            {/* <button className={props.className} onClick={()=> props.dispatch(actions.setPassive())}>Passive</button> */}
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        button : state.button
    }
};

const mapDispatchToProps = {
    getNews : actions.getNews
}

A = connect(mapStateToProps, mapDispatchToProps)(A);

export default A;