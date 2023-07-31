import React from 'react'
import TodoList from './TodoList.js'
import Todo from './Todo.js'

export default function Public(){
  return (
    <div className="public">
      <h1>Public Page</h1>
      <TodoList/>
    </div>
  )
}