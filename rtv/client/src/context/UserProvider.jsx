import React, { useState, createContext } from "react";
import axios from "axios";

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
        posts: []
    }

    const [userState, setUserState] = useState(initUser)

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
            .catch(err => console.log(err.response.data.errMsg))
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
            .catch(err => console.log(err.response.data.errMsg))
    }

    //Logout
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: '',
            token: '',
            posts: []
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
            })
            .catch(err => console.log(err.response.data.errMsg))
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
            .catch(err => console.log(res.response.data.errMsg))
    }

    return (
    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            addPost,
            getUsersPosts
        }}
    >
        {props.children}
    </UserContext.Provider>
    )
}

export {UserContext, UserProvider}