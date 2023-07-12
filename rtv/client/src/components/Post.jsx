import React from "react";

function Post(props) {
    const { title, description } = props
    
    return(
        <div className="Post">
            <h2>{title}</h2>
            <h3>{description}</h3>
        </div>
    )
}

export default Post