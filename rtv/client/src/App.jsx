import { useState, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Home from './components/TempHome'
import Public from './components/Public'
import Profile from './components/Profile'
import { UserContext } from './context/UserProvider'
import './App.css'

function App() {
  const { token, logout } = useContext(UserContext)

  return (
    <div className='App'>
      <Navbar logout={logout} />
      <Routes>
          <Route path='/' element={ token ? <Profile/> : <Auth/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/public' element={<Public />}/>
          <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  )
}

export default App
