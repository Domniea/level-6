import React, { useState, createContext } from "react";
import axios from "axios";
// import user from "../../../server/models/user";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserContext = createContext()

function UserProvider(props) {
    const initUser = {
        user: JSON.parse(localStorage.getItem('user')) || '',
        token: localStorage.getItem('token') || '',
        posts: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initUser)
    const [allPosts, setAllPosts] = useState([])

    //Credentials Error Messages
    function errMsgAlert(errAlert) {
        setUserState(prevState => ({
            ...prevState,
            errMsg: errAlert 
        }))
    }

    //Signup
    function signup(credentials) {
        axios.post('/api/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => errMsgAlert(err.response.data.errMsg))
    }

    //Login
    function login(credentials) {
        axios.post('/api/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUsersPosts()
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => errMsgAlert(err.response.data.errMsg))
    }

    //Logout
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('posts')

        setUserState({
            user: '',
            token: '',
            posts: [],
            errMsg: ''
        })
    }

    //Add Post
    function addPost(credentials){
        userAxios.post('/api/api/posts/', credentials)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data]
                }))
                localStorage.setItem('posts', posts)
            })
            .catch(err => console.log(err.response))
    }

    //Get Users Posts
    function getUsersPosts() {
        userAxios.get('/api/api/posts/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data
                }))
            })
            // .then(res => console.log(res.data))
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

    //Delete User Post
    function deletePost(postId) {
        userAxios.delete(`/api/api/posts/${postId}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: prevState.posts.filter(posts => posts._id !== postId)
                }))
            })
            .catch(err => console.log(err))
    }

    return (
    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addPost,
            deletePost,
            getUsersPosts,
            getAllPosts,
            allPosts,

        }}
    >
        {props.children}
    </UserContext.Provider>
    )
}

export {UserContext, UserProvider}