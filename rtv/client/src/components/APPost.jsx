import React, { useContext, useEffect, useState } from 'react'
import CommentsBox from './CommentsBox'
import { PostContext } from '../context/PostProvider'
import axios from 'axios'

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function APPost(props) {
    const { title, description, _id } = props
    
    const PostData = useContext(PostContext)


    const [postComments, setPostComments] = useState([])

    //Retrieve Post Comments
    function retrievePostComments(postID) {
        userAxios.get(`/api/api/comment/${postID}`)
            .then(res => setPostComments(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        retrievePostComments(_id)
    }, [])
        

        console.log(postComments)
    return (
        <div className='post'>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <CommentsBox 
                id={_id}
                postComments={postComments}
            />
        </div>
    )
}

export default APPost