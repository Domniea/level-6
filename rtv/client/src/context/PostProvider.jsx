import React, { createContext, useState } from "react";
import axios from "axios";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const PostContext = createContext()

function PostProvider(props) {

    const [allPosts, setAllPosts] = useState([])
    const [userPosts, setUserPosts] = useState([])

    //Get Users Posts
    function getUsersPosts(userId) {
        userAxios.get(`/api/api/posts/${userId}`)
            .then(res => {
                setUserPosts(res.data)
            })
            .catch(err => console.log(err))
    }

    //Get All Users Posts
    function getAllPosts() {
        userAxios.get('/api/api/posts')
        .then(res => {
            setAllPosts(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //Add Post
    function addPost(credentials){
        userAxios.post('/api/api/posts/', credentials)
            .then(res => {
                setUserPosts(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data]
                }))
                localStorage.setItem('posts', posts)
            })
            .catch(err => console.log(err.response))
    }

    //Delete User Post
    function deletePost(postId) {
        userAxios.delete(`/api/api/posts/${postId}`)
            .then(res => {
                setUserPosts(prevState => ({
                    ...prevState,
                    posts: prevState.posts.filter(posts => posts._id !== postId)
                }))
            })
            .catch(err => console.log(err))
    }



    return (
        <PostContext.Provider
            value={{
                addPost,
                deletePost,
                getUsersPosts,
                getAllPosts,
                userPosts
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }