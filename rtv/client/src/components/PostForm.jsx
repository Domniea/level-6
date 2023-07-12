import React, { useState } from "react";


function PostForm(props) {
    const initInputs = {
        title: '',
        description: ''
    }

    const { addPost } = props

    const [inputs, setInputs] = useState(initInputs)

    const { title, description } = inputs

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(inputs)
        addPost(inputs)

    }

    return (
        <div className='PostForm'>
            <form onSubmit={handleSubmit}>
            <label htmlFor="title">title</label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Type Here"
                    value={title}
                    onChange={handleChange} 
                />
                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Type Here"
                    value={description}
                    onChange={handleChange} 
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default PostForm