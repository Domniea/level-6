import React, { useState } from "react";

function AuthForm(props) {
    const {
            handleChange,
            handleSubmit,
            buttonTxt,
            inputs:
            { 
                username,
                password 
                }
        } = props
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                value={username}
                id="username"
                onChange={handleChange} 
            />
            <input 
                type="text"
                name="password"
                value={password}
                id="password"
                onChange={handleChange} 
            />
            <button>{buttonTxt}</button>
        </form>
    )
}
export default AuthForm