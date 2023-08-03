import React , {useState, useContext, useEffect} from "react";
import axios from "axios";
import Comment from "./Comment";

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function CommentsBox(props) {
 
    const { _id, postComments, setPostComments } = props

    const initInput = {
        comment:''
    }
    const [input, setInput] = useState(initInput)


    //Post Comment
    function addComment(credentials, postId) {
        userAxios.post(`/api/api/comment/${postId}`, {comment: credentials.comment, post: postId})
        .then(res => setPostComments(prevState => {
            return [
                ...prevState,
                res.data
            ]
        }))
        .catch(err => console.log(err))
    }


    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevState => ({
             ...prevState,
            [name]: value
        }))
     }

    function handleSubmit(e) {
        e.preventDefault()
        addComment(input, _id)
        setInput(initInput)
 
    }

    const comment = postComments.map(comment => {
        return <Comment
        key={comment._id}
            {...comment}
        />
    })
    
    return (
        <div className="CommentsBox">
            {comment}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="comment"
                value={input.comment}
                onChange={handleChange}
            />
            <button>Comment</button>
        </form>
        </div>
    )
}

export default CommentsBox