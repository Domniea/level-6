import React, { useEffect } from "react";
import Post from "./Post";

function PostList(props) {
const { posts, getUsersPosts, deletePost, token } = props

    useEffect(() => {
        getUsersPosts()
    }, [])
    return (
        <div className="PostList">
            { posts.map(item => <Post {...item} deletePost={deletePost} key={item._id}/>) }
        </div>
    )
}

export default PostList