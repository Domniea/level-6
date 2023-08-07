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
                // setUserPosts(prevState => {
                //     return 
                // })
            })
            // .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    //Get All Posts
    function getAllPosts() {
        userAxios.get('/api/api/vote/sorted')
        .then(res => {
            setAllPosts(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    //Add Post
    function addPost(credentials, userId){
        userAxios.post(`/api/api/posts/${userId}`, credentials)
            .then(res => {
                setUserPosts(prevState => {
                    return [
                        ...prevState,
                        res.data
                    ]
                })
            })
            .catch(err => console.log(err.response))
    }

    //Delete User Post
    function deletePost(postId) {
        userAxios.delete(`/api/api/posts/${postId}`)
            .then(res => {
                setUserPosts(prevState => prevState.filter(posts => posts._id !== postId))
            })
            .catch(err => console.log(err))
    }

    //Vote Scores
    function getVoteScores() {
        userAxios.get('/api/api/vote/')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    //Upvote
    function upVote(postId) {
        userAxios.put(`/api/api/vote/up/${postId}`)
            .then(res => {
                console.log('butts')
                // getVoteScores()
            })
            .catch(err => console.log(err))

        
        // axios.all([
        //     userAxios.put(`/api/api/vote/up/${postId}`),
        //     userAxios.put(`/api/api/vote/update/${postId}`)
        // ])
        //     .then(axios.spread((res1, res2) => {
        //         console.log(res1.data)
        //         console.log(res2.data)
        //     }))
        //     .catch(axios.spread((err1, err2) => {
        //         console.log(err1.data)
        //         console.log(err2.data)
        //         }
        //     )

        // )
        getAllPosts()
    }

    //Downvote
    function downVote(postId) {
        userAxios.put(`/api/api/vote/down/${postId}`)
            .then(res => {
                console.log('butts')
                // getVoteScores()
            })
            .catch(err => console.log(err))

   
        // axios.all([
        //     userAxios.put(`/api/api/vote/down/${postId}`),
        //     userAxios.put(`/api/api/vote/update/${postId}`)
        // ])
        //     .then(axios.spread((res1, res2) => {
        //         console.log(res1.data)
        //         console.log(res2.data)
        //     }))
        //     .catch(axios.spread((err1, err2) => {
        //         console.log(err1.data)
        //         console.log(err2.data)
        //         }
        //     )
        // )
        getAllPosts()
    }



    return (
        <PostContext.Provider
            value={{
                addPost,
                deletePost,
                getUsersPosts,
                allPosts,
                getAllPosts,
                userPosts,
                upVote,
                downVote,
                getVoteScores
            }}
        >
            {props.children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }