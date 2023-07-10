import React ,{ useContext } from "react";
import PostForm from "./PostForm";
import { UserContext } from "../context/UserProvider";

function Profile() {
    const { 
        user: {
            username
        },
        posts
     } = useContext(UserContext)

    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome {username}</h2>
            <PostForm />
        </div>
    )
}

export default Profile
