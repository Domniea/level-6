import React from "react";
import { Link, Navigate } from "react-router-dom";

function Navbar(props) {
  const { logout } = props
    return(
        <div className="Navbar">
          <Link className='nav-link' to='/'>Profile</Link>
          <Link className='nav-link' to='/allPosts'>All Posts</Link>
          <Link className='nav-link' to='/home'>Home</Link>
          <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Navbar