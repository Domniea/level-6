import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Home from './components/TempHome'
import APList from './components/APList'
import ProtectedRoute from './components/ProtectedRoute'
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
          <Route path='/home' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
              <Home/>
            </ProtectedRoute>}/>
          <Route path='/allPosts' element={<ProtectedRoute token={token} redirectTo={<Auth/>}>
              <APList/>
            </ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App
