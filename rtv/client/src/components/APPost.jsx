import React from 'react'

function APPost(props) {
    const { title, description } = props
    return (
        <div className='post'>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default APPost