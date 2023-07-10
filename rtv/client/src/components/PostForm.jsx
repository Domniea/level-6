import React, { useState } from "react";


function PostForm() {
    const initInputs = {
        description: ''
    }

    const [inputs, setInputs] = useState(initInputs)

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
    }

    return (
        <div className='PostForm'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    placeholder="Type Here"
                    value={inputs.description}
                    onChange={handleChange} 
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default PostForm