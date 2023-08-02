import React, { useContext, useEffect } from "react";
import { PostContext } from "../context/PostProvider";
import UserPost from "./UserPost";

function UserPostList(props) {
const { 
        userPosts,
        getUsersPosts,
        deletePost
    } = useContext(PostContext)
    const {_id} = props

 
    useEffect(() => {
        getUsersPosts(_id)
    }, [])


    return (
        <div className="PostList">
            { userPosts.map(item => <UserPost {...item} deletePost={deletePost} key={item._id}/>) }
        </div>
    )
}

export default UserPostList