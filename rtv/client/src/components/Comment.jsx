import React from "react";

function Comment(props) {
    const { comment } = props

    return(
        <div className="Comment">
            <h5>{comment}</h5>
        </div>
    )
}

export default Comment