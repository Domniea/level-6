import React from 'react'

export default function Todo(props){
  const { title, description, imgUrl } = props

  return (
    <div className="todo">
      <h4>{title}</h4>
      <h5>{description}</h5>
      <img src={imgUrl} />
    </div>
  )
}