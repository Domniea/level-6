import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import PrivateRoute from './components/PrivateRoute.jsx'
import { UserContext } from './context/UserProvider.js'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={ token ? <Navigate to='/profile' /> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<PrivateRoute 
            redirectTo='/'
            token={token}
          >
            <Profile />
          </PrivateRoute>}
        />
        <Route 
          path="/public"
          element={<PrivateRoute
            token={token}
            redirectTo='/'
          >
            <Public />
          </PrivateRoute>}
        />
      </Routes>
    </div>
  )
}