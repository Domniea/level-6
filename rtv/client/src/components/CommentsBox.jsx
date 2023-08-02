import React , {useState, useContext, useEffect} from "react";
import Comment from "./Comment";
import { CommentsContext } from "../context/CommentsProvider";
import { PostContext } from "../context/PostProvider";

function CommentsBox(props) {

    const { addComment } = useContext(CommentsContext)
    const { _id, postComments, retrievePostComments } = props
    const initInput = {
        comment:''
    }
    const [input, setInput] = useState(initInput)
    // const [comments, setComments] = useState([])

    function handleChange(e) {
        const { name, value } = e.target
        setInput(prevState => ({
             ...prevState,
            [name]: value
        }))
     }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(_id)
        addComment(input, _id)
        console.log(1)
        getUsersPosts()
        console.log(2)

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