import React ,{ useContext } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { UserContext } from "../context/UserProvider";

function Profile() {
    const { 
        user: {
            username
        },
        addPost,
        posts
     } = useContext(UserContext)

     console.log(posts)

    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome {username}</h2>
            <PostForm addPost={addPost}/>
            <h3>Your Posts</h3>
            <PostList posts={posts} />
        </div>
    )
}

export default Profile
