import React from "react";
import { Link, Navigate } from "react-router-dom";

function Navbar() {

    return(
        <div>
          <Link to='/profile'>Profile</Link>
          <Link to='/public'>Public</Link>
          <Link to='/home'>Home</Link>
          <button>Log Out</button>
        </div>
    )
}

export default Navbar