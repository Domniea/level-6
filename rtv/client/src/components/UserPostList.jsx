import React, { useContext, useEffect } from "react";
import { PostContext } from "../context/PostProvider";
import UserPost from "./UserPost";

function UserPostList(props) {
const { 
        userPosts,
        getUsersPosts,
        deletePost
    } = useContext(PostContext)
    const {user_id} = props

 
    useEffect(() => {
        getUsersPosts(user_id)
    }, [])
    console.log(user_id)

    return (
        <div className="PostList">
            { userPosts.map(item => <UserPost {...item} deletePost={deletePost} key={item._id} user_id={user_id}/>) }
        </div>
    )
}

export default UserPostList