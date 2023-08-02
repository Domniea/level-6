import React ,{ useContext, useEffect, useState } from "react";
import PostForm from "./PostForm";
import UserPostList from "./UserPostList";
import { UserContext } from "../context/UserProvider";
import { PostContext } from "../context/PostProvider";

function Profile() {
    const { 
        user: {
            username,
            _id
        },
        token
     } = useContext(UserContext)

     const {
        userPosts,
        addPost,
        deletePost,
        getUsersPosts
     } = useContext(PostContext)

    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome {username}</h2>
            <PostForm addPost={addPost}/>
            <h3>Your Posts</h3>
            <UserPostList _id={_id}/>
        </div>
    )
}

export default Profile
