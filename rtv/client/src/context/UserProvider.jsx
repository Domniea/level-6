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

    function login(credentials) {
        axios.post('/api/auth/login', credentials)
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


    return (
    <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            
        }}
    >
        {props.children}
    </UserContext.Provider>
    )
}

export {UserContext, UserProvider}