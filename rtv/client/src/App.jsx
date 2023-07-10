import { useState, Switch } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Home from './components/TempHome'
import Public from './components/Public'
import Profile from './components/Profile'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/public' element={<Public />}/>
          <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
