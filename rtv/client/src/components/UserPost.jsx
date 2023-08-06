import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsBox from "./CommentsBox";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserPost(props) {
    const { title, _id, description, deletePost, user_id } = props
    
    const [postComments, setPostComments] = useState([])
    
    //Retrieve Post Comments
    function retrievePostComments(postID) {
        userAxios.get(`/api/api/comment/${postID}`)
            .then(res => setPostComments(res.data))
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        retrievePostComments(_id)
    }, [])

    return(
        <div className="post">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <CommentsBox 
                _id={_id}
                postComments={postComments}
                setPostComments={setPostComments}
            />
            <button onClick={() => deletePost(_id)}>Delete</button>
        </div>
    )
}

export default UserPost