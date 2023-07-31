import React ,{ useContext } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import { UserContext } from "../context/UserProvider";

function Profile() {
    const { 
        user: {
            username,
        },
        token,
        addPost,
        deletePost,
        posts,
        getUsersPosts
     } = useContext(UserContext)

    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome {username}</h2>
            <PostForm addPost={addPost}/>
            <h3>Your Posts</h3>
            <PostList 
                posts={posts} 
                getUsersPosts={getUsersPosts}
                deletePost={deletePost}
                // token={token}
            />
        </div>
    )
}

export default Profile
