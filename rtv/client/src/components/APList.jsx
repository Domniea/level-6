import React, { useContext, useEffect, useState } from "react";
import APPost from "./APPost";
import { UserContext } from "../context/UserProvider";


function APList() {

    const PostList = useContext(UserContext)

    const { getAllPosts, allPosts } = PostList

    useEffect(() => {
        getAllPosts()
    },[])

    const posts = allPosts.map(post => {
        return <APPost 
            key={post._id}
            {...post}
        />
    })

    return (
        <div>
            <h1>All Posts</h1>
            {posts}
        </div>
    )
}

export default APList