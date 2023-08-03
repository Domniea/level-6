import React, { useContext, useEffect, useState } from 'react'
import CommentsBox from './CommentsBox'
import axios from 'axios'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function APPost(props) {
    const { title, description, _id } = props
    
  
    const [postComments, setPostComments] = useState([])

    //Retrieve Post Comments
    function retrievePostComments(postId) {
        userAxios.get(`/api/api/comment/${postId}`)
            .then(res => setPostComments(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        retrievePostComments(_id)
    }, [])

    return (
        <div className='post'>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <CommentsBox 
                _id={_id}
                postComments={postComments}
                setPostComments={setPostComments}
            />
        </div>
    )
}

export default APPost