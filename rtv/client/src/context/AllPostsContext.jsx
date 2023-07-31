import React, { createContext } from "react";
import axios from 'axios'

const AllPostsContext = createContext()

function AllPostsProvider(props) {
    
function getAllPosts() {
    axios.get('/api/api/posts', (req, res))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

    return (
        <AllPostsContext.Provider
            value={getAllPosts}
        >
            {props.children}
        </AllPostsContext.Provider>
    )
}

export {AllPostsContext, AllPostsProvider}