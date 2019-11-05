import React from "react";
// import { bindActionCreators } from "redux";
// import * as actions from "../store/actions/actions";
import { connect } from "react-redux";

let B = ({contents}) => {
    return (
        <div className="container content-wrapper">
            {
                (contents.length) ? 
                contents.map((content) => {
                    return (
                        <div key={content.id} className="content-item">
                            <h3>{content.title}</h3>
                            <img src={content.thumbnailUrl} alt={content.title} />
                        </div>
                    )
                }) : <h1>YOK</h1>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        contents : state.content.news
    }
};

B = connect(mapStateToProps)(B);

export default B;