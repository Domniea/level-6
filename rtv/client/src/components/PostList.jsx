import React from "react";
import Post from "./Post";

function PostList(props) {
const { posts } = props
    console.log(posts)
    return (
        <div className="PostList">
            { posts.map(item => <Post {...item} key={item._id}/>) }
        </div>
    )
}

export default PostList