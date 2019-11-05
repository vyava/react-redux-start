import React from "react";
// import { bindActionCreators } from "redux";
// import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

function B(props){
    console.log(props)
    return (
        <div className="container">
            {JSON.stringify(props)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        article : state
    }
};

B = connect(mapStateToProps)(B);

export default B;