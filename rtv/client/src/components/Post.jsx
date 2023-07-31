import React from "react";

function Post(props) {
    const { title, _id, description, deletePost } = props
    
    return(
        <div className="Post">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <button onClick={() => deletePost(_id)}>Delete</button>
        </div>
    )
}

export default Post