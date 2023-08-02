import React, { createContext, useState } from "react";
import axios from 'axios'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const CommentsContext = createContext()

function CommentsProvider(props) {
    const initInput = {
        comment:''
    }
    const [input, setInput] = useState(initInput)

    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevState => ({
             ...prevState,
            [name]: value
        }))
 
    }
    
    //Post Comment
    function addComment(credentials, id) {
        userAxios.post('/api/api/comment/', {comment: credentials.comment, post: id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    // //Retrieve Post Comments
    // function retrievePostComments(postID) {
    //     userAxios.get(`/api/api/comment/${postID}`)
    //         .then(res => setPostComments(res.data))
    //         .catch(err => console.log(err))
    // }
    

    return (
        <CommentsContext.Provider
            value={{
                input,
                handleChange,
                addComment,
                // retrievePostComments
            }}
        >
            {props.children}
        </CommentsContext.Provider>
    )
}

export {CommentsContext, CommentsProvider}