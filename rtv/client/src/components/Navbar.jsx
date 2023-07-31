import React from "react";
import { Link, Navigate } from "react-router-dom";

function Navbar(props) {
  const { logout } = props
    return(
        <div>
          <Link to='/'>Profile</Link>
          <Link to='/allPosts'>All Posts</Link>
          <Link to='/home'>Home</Link>
          <button onClick={logout}>Log Out</button>
        </div>
    )
}

export default Navbar