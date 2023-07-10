import React, { useContext } from 'react'
import TodoList from './TodoList.js'
import Todo from './Todo.js'
import { UserContext } from './context/UserProvider.js'

export default function Public(){
  const data = useContext(UserContext)
  // console.log(data)
  return (
    <div className="public">
      <h1>{data.test}</h1>
    </div>
  )
}