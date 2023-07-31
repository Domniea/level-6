import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { UserProvider } from './context/UserProvider.jsx'
import { AllPostsProvider } from './context/AllPostsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <AllPostsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AllPostsProvider>
    </Router>
)
